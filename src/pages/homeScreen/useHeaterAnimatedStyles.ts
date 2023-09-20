import { Extrapolation, SharedValue, interpolate, useAnimatedProps } from "react-native-reanimated";

const useHeaterAnimatedStyles = (scrollY: SharedValue<number>) => {
    // 映射信息栏额外动画增加paddingTop
    const infoBarAnimatedStyle = useAnimatedProps(() => {
        // 信息栏额外paddingTop
        const paddingTop = interpolate(scrollY.value, [0, 200], [0, 10], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        return { paddingTop };
    });
    // 映射信息栏额社区名称动画
    const communityNameAnimatedStyle = useAnimatedProps(() => {
        // 信息栏额外paddingTop
        const opacity = interpolate(scrollY.value, [0, 200], [1, 0], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        return { opacity };
    });
    // 映射信息栏头像动画样式
    const avatorAnimatedStyle = useAnimatedProps(() => {
        // 头像：宽、高、半径
        const imgStyle = interpolate(scrollY.value, [0, 200], [40, 30], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        // 头像：右边距
        const marginRight = interpolate(scrollY.value, [0, 200], [0, 10], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        // 头像：透明度
        const opacity = interpolate(scrollY.value, [0, 200], [1, 0.5], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        return {
            width: imgStyle,
            height: imgStyle,
            borderRadius: imgStyle / 2,
            marginRight,
            opacity
        };
    });
    // 映射搜索框动画样式
    const searchBarAnimatedStyle = useAnimatedProps(() => {
        // 上下移动距离
        const translateY = interpolate(scrollY.value, [0, 200], [0, -50], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        return {
            // marginVertical,
            // width,
            transform: [{ translateY }]
        };
    });
    return {
        infoBarAnimatedStyle,
        avatorAnimatedStyle,
        searchBarAnimatedStyle,
        communityNameAnimatedStyle,
    };
};

export default useHeaterAnimatedStyles;