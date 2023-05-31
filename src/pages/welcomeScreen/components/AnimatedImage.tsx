import React, { FunctionComponent, useEffect } from "react"
import { StyleSheet } from "react-native"
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

type AnimatedImageProps = {
    uri: string,
    selfIndex: number,
    activeIndex: number
}
const AnimatedImage: FunctionComponent<AnimatedImageProps> = ({ uri, selfIndex, activeIndex }) => {
    const animatedOpacity = useSharedValue(0);
    const animatedStyles = useAnimatedStyle(() => {
        return {
            opacity: withTiming(animatedOpacity.value, {
                duration: 1200,
                easing: Easing.linear
            })
        }
    });
    useEffect(() => {
        if (selfIndex === activeIndex) {
            animatedOpacity.value = 1
        } else {
            animatedOpacity.value = 0
        }
    }, [activeIndex])
    return (
        <Animated.Image
            source={{ uri }}
            style={[
                styles.container,
                animatedStyles
            ]} />
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
})

//true不更新，false更新
const equalProps = (prevProps: AnimatedImageProps, nextProps: AnimatedImageProps) => {
    if (prevProps.activeIndex === nextProps.selfIndex || nextProps.activeIndex === nextProps.selfIndex) {
        return false
    } else {
        return true
    }
}
export default React.memo(AnimatedImage, equalProps)