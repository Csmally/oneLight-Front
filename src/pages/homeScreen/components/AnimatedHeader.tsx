import { BlurView } from "@react-native-community/blur";
import CategoryBar from "./CategoryBar";
import InfoBar from "./InfoBar";
import SearchBar from "./SearchBar";
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from "react-native-reanimated";
import { StyleSheet, View } from "react-native";
import { useContext } from "react";
import { HomePageContext } from "../utils/context";

function AnimatedHeader() {
    console.log('9898头部刷新');
    const { scrollY, initTopbarHeight, categoryBarRef } = useContext(HomePageContext);
    // 映射头部组件高度动画样式
    const containerAnimatedStyle = useAnimatedStyle(() => {
        // height
        const height = interpolate(scrollY.value, [0, 90], [initTopbarHeight, initTopbarHeight - 90], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        return { height };
    });
    // 映射头部组件高斯模糊透明度动画样式
    const blurAnimatedStyle = useAnimatedStyle(() => {
        // height
        const opacity = interpolate(scrollY.value, [0, 90], [0, 1], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        return { opacity };
    });
    return (
        <Animated.View style={[{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2 }, containerAnimatedStyle]}>
            <InfoBar />
            <View style={styles.barContainer}>
                <SearchBar />
                <CategoryBar ref={ref => { categoryBarRef.current = ref; }} />
            </View>
            <Animated.View style={[styles.blurContainer, blurAnimatedStyle]}>
                <BlurView style={{ flex: 1 }} blurType='xlight' blurAmount={50} />
            </Animated.View>
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