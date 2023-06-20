import { StyleSheet, View } from "react-native"
import { getViewSize } from '@/utils/sizeTool'
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import React, { useEffect } from "react";

type DoterProps = {
    selfIndex: number,
    activeIndex: number
}
const Doter: React.FC<DoterProps> = ({ selfIndex, activeIndex }) => {
    const animatedWidth = useSharedValue(getViewSize(16));
    const animatedHeight = useSharedValue(getViewSize(6));
    const animatedColor = useSharedValue('#999999')
    const animatedStyles = useAnimatedStyle(() => {
        return {
            width: withTiming(animatedWidth.value, {
                duration: 500,
                easing: Easing.linear
            }),
            height: withTiming(animatedHeight.value, {
                duration: 500,
                easing: Easing.linear
            }),
            backgroundColor: withTiming(animatedColor.value, {
                duration: 500,
                easing: Easing.linear
            }),
        }
    });
    useEffect(() => {
        if (selfIndex === activeIndex) {
            animatedWidth.value = getViewSize(6)
            animatedHeight.value = getViewSize(16)
            animatedColor.value = '#000000'
        } else {
            animatedWidth.value = getViewSize(16)
            animatedHeight.value = getViewSize(6)
            animatedColor.value = '#999999'
        }
    }, [activeIndex])
    return (
        <Animated.View style={[styles.dotRadius, animatedStyles]} />
    )
}

const styles = StyleSheet.create({
    dotRadius: {
        borderRadius: getViewSize(3),
        marginHorizontal: getViewSize(3)
    }
})

const equalProps = (prevProps: DoterProps, nextProps: DoterProps) => {
    if (prevProps.activeIndex === nextProps.selfIndex || nextProps.activeIndex === nextProps.selfIndex) {
        return false
    } else {
        return true
    }
}

export default React.memo(Doter, equalProps)