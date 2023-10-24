import { StyleSheet } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import React, { useEffect } from "react";
import { commonStyles } from "@/common/styles";

type DoterProps = {
    selfIndex: number,
    activeIndex: number
}
function Doter({ selfIndex, activeIndex }: DoterProps) {
    const animatedWidth = useSharedValue(16);
    const animatedHeight = useSharedValue(6);
    const animatedColor = useSharedValue('#999999');
    const animatedStyles = useAnimatedStyle(() => {
        return {
            width: withTiming(animatedWidth.value, {
                duration: 300,
                easing: Easing.linear
            }),
            height: withTiming(animatedHeight.value, {
                duration: 300,
                easing: Easing.linear
            }),
            backgroundColor: withTiming(animatedColor.value, {
                duration: 300,
                easing: Easing.linear
            }),
        };
    });
    useEffect(() => {
        if (selfIndex === activeIndex) {
            animatedWidth.value = 6;
            animatedHeight.value = 16;
            animatedColor.value = commonStyles.black;
        } else {
            animatedWidth.value = 16;
            animatedHeight.value = 6;
            animatedColor.value = '#999999';
        }
    }, [activeIndex, animatedColor, animatedHeight, animatedWidth, selfIndex]);
    return (
        <Animated.View style={[styles.dotRadius, animatedStyles]} />
    );
}

const styles = StyleSheet.create({
    dotRadius: {
        borderRadius: 3,
        marginHorizontal: 3
    }
});

const equalProps = (prevProps: DoterProps, nextProps: DoterProps) => {
    return prevProps.activeIndex !== nextProps.selfIndex && nextProps.activeIndex !== nextProps.selfIndex;
};

export default React.memo(Doter, equalProps);