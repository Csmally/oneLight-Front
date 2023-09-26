import { View, StyleSheet } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

type LoadMoreProps = {
    isLoadingMore: boolean
}

function LoadMoreAnimated() {
    // 透明度动画共享变量
    const opacity = useSharedValue(0.3);
    // 缩放动画共享变量
    const scale = useSharedValue(1);

    // 创建透明度旋转动画
    opacity.value = withRepeat(
        withTiming(1, { duration: 1000 }),
        -1,
        true
    );
    // 创建缩放动画
    scale.value = withRepeat(
        withTiming(1.3, { duration: 1000 }),
        - 1,
        true
    );
    // 创建动画样式
    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ scale: scale.value }]
    }));
    return (
        <View style={styles.container}>
            <Animated.Image source={require('./static/lightning.png')} style={[styles.img, animatedStyle]} />
        </View >
    );
}

function LoadMore({ isLoadingMore }: LoadMoreProps) {
    return (
        isLoadingMore ? <LoadMoreAnimated /> : null
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        // backgroundColor: 'violet'
    },
    img: {
        width: 18,
        height: 18
    }
});

export default LoadMore;