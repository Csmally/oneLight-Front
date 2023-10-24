import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

type AnimatedImageProps = {
    uri: string,
    selfIndex: number,
    activeIndex: number
}
function AnimatedImage({ uri, selfIndex, activeIndex }: AnimatedImageProps) {
    const animatedOpacity = useSharedValue(0);
    const animatedStyles = useAnimatedStyle(() => {
        return {
            opacity: withTiming(animatedOpacity.value, {
                duration: 1200,
                easing: Easing.linear
            })
        };
    });
    useEffect(() => {
        if (selfIndex === activeIndex) {
            animatedOpacity.value = 1;
        } else {
            animatedOpacity.value = 0;
        }
    }, [activeIndex, animatedOpacity, selfIndex]);
    return (
        <Animated.Image
            source={{ uri }}
            style={[
                styles.container,
                animatedStyles
            ]} />
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
});

//true不更新，false更新
const equalProps = (prevProps: AnimatedImageProps, nextProps: AnimatedImageProps) => {
    return prevProps.activeIndex !== nextProps.selfIndex && nextProps.activeIndex !== nextProps.selfIndex;
};
export default React.memo(AnimatedImage, equalProps);