import { View, StyleSheet } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSequence, withSpring, withTiming } from "react-native-reanimated";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type LoadMoreProps = {
    isLoadingMore: boolean
}
function LoadMore({ isLoadingMore }: LoadMoreProps) {
    return (
        isLoadingMore ? <Test /> : null
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5
    }
});

function Test() {
    // 创建一个共享变量，用于控制动画
    const rotateZ = useSharedValue(0);

    // 创建动画
    rotateZ.value = withRepeat(
        withTiming(360, { duration: 500 }),
        -1
    );
    // 创建动画样式
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ rotateZ: `${rotateZ.value}deg` }]
    }));
    return (
        <View style={styles.container}>
            <Animated.View style={animatedStyle}>
                <Icon name="lightning-bolt-circle" size={30} />
            </Animated.View>
        </View >
    )
}
export default LoadMore;