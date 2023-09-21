import { Extrapolation, SharedValue, interpolate, useAnimatedProps } from "react-native-reanimated";

const useHeaterAnimatedStyles = (scrollY: SharedValue<number>, initTopbarHeight: number) => {
    // 映射头部组件高度动画样式
    const containerAnimatedStyle = useAnimatedProps(() => {
        // height
        const height = interpolate(scrollY.value, [0, 200], [initTopbarHeight, initTopbarHeight - 50], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        return { height };
    });
    // 映射信息栏额外动画增加paddingTop
    const infoBarAnimatedStyle = useAnimatedProps(() => {
        // 信息栏额外paddingTop
        const paddingTop = interpolate(scrollY.value, [0, 200], [0, 10], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        return { paddingTop };
    });
    // 映射信息栏社区名称动画
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
    // 映射搜索栏热区动画样式
    const hotAreaAnimatedStyle = useAnimatedProps(() => {
        // 热区宽度
        const width = interpolate(scrollY.value, [0, 100], [0, 300], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        return {
            width,
        };
    });
    // 映射搜索栏左侧占位元素宽度动画样式
    const searchBarSpaceAnimatedStyle = useAnimatedProps(() => {
        // 占位元素宽度
        const width = interpolate(scrollY.value, [0, 200], [0, 40], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        return {
            width,
        };
    });
    // 映射分类栏动画样式
    const categoryBarItemAnimatedStyle = useAnimatedProps(() => {
        // 边距
        const gapStyle = interpolate(scrollY.value, [0, 200], [10, 0], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        // 圆角
        const borderRadius = interpolate(scrollY.value, [0, 200], [25, 0], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        return {
            marginLeft: gapStyle,
            marginBottom: gapStyle,
            borderRadius
        };
    });
    // 映射分类栏阴影动画样式
    const categoryBarShadowAnimatedStyle = useAnimatedProps(() => {
        // 阴影宽度 & 安卓elevation
        const shadowWidth = interpolate(scrollY.value, [0, 200], [10, 0], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        // 透明度
        const shadowOpacity = interpolate(scrollY.value, [0, 200], [0.3, 0], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        // 圆角
        const shadowRadius = interpolate(scrollY.value, [0, 200], [2, 0], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        return {
            shadowOffset: {
                width: 0,
                height: shadowWidth
            },
            shadowOpacity,
            shadowRadius,
            elevation: shadowWidth,
            shadowColor: 'red'
        };
    });
    return {
        infoBarAnimatedStyle,
        avatorAnimatedStyle,
        searchBarAnimatedStyle,
        communityNameAnimatedStyle,
        hotAreaAnimatedStyle,
        searchBarSpaceAnimatedStyle,
        categoryBarItemAnimatedStyle,
        categoryBarShadowAnimatedStyle,
        containerAnimatedStyle
    };
};

export default useHeaterAnimatedStyles;