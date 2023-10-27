import { useContext } from "react";
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from "react-native-reanimated";
import { HomePageContext } from "../utils/context";

function HomeHeaderActivity() {
    const { scrollY, initTopbarHeight } = useContext(HomePageContext);
    // 映射头部组件高度动画样式
    const containerAnimatedStyle = useAnimatedStyle(() => {
        // height
        const paddingTop = interpolate(scrollY.value, [0, 90], [initTopbarHeight, initTopbarHeight - 90], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        return { paddingTop };
    });
    return (
        // <Animated.View style={containerAnimatedStyle}></Animated.View>
        <Animated.View style={{ height: initTopbarHeight }}></Animated.View>
    );
}

export default HomeHeaderActivity;