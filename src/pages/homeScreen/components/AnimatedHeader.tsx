import { BlurView } from "@react-native-community/blur";
import CategoryBar from "./CategoryBar";
import InfoBar from "./InfoBar";
import SearchBar from "./SearchBar";
import Animated, { AnimatedRef, Extrapolation, SharedValue, interpolate, useAnimatedStyle } from "react-native-reanimated";
import { StyleSheet, View } from "react-native";

type AnimatedHeaderProps = {
    scrollY: SharedValue<number>,
    initTopbarHeight: number,
    flatListRef: AnimatedRef<Animated.FlatList<NewsItem>>
}

function AnimatedHeader({ scrollY, initTopbarHeight, flatListRef }: AnimatedHeaderProps) {
    // 映射头部组件高度动画样式
    const containerAnimatedStyle = useAnimatedStyle(() => {
        // height
        const height = interpolate(scrollY.value, [0, 200], [initTopbarHeight, initTopbarHeight - 90], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        return { height };
    });
    return (
        <Animated.View style={containerAnimatedStyle}>
            <InfoBar scrollY={scrollY} />
            <View style={styles.barContainer}>
                <SearchBar scrollY={scrollY} />
                <CategoryBar scrollY={scrollY} flatListRef={flatListRef} />
            </View>
            <View style={styles.blurContainer}>
                <BlurView style={{ flex: 1 }} blurType='xlight' blurAmount={50} />
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    blurContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
        height: '100%',
        zIndex: -1
    },
    barContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    }
});

export default AnimatedHeader;