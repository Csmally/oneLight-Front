import { commonStyles } from "@/common/styles";
import { getViewSize } from "@/utils/sizeTool";
import { memo } from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import Animated, { Extrapolation, SharedValue, interpolate, interpolateColor, useAnimatedStyle } from "react-native-reanimated";

type CategoryItemInfo = {
    title: string,
    img: any
}
type CategoryItemProps = {
    scrollY: SharedValue<number>,
    categoryInfo: CategoryItemInfo,
    setActiveTabIndex: (index: number) => void,
    selfIndex: number,
    activeTabIndex: number
}

function CategoryItem({ categoryInfo, scrollY, setActiveTabIndex, selfIndex, activeTabIndex }: CategoryItemProps) {
    // 分类栏item的容器动画
    const categoryContainerAnimatedStyle = useAnimatedStyle(() => {
        // 背景颜色
        const backgroundColor = interpolateColor(scrollY.value, [0, 200], [
            selfIndex === activeTabIndex ? 'rgba(0, 0, 0,1)' : 'rgba(255, 255, 255,1)',
            selfIndex === activeTabIndex ? 'rgba(0, 0, 0,0)' : 'rgba(255, 255, 255,0)',
        ]);
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
        const shadowStyle = selfIndex !== activeTabIndex ? {
            shadowOffset: {
                width: 0,
                height: shadowWidth
            },
            shadowOpacity,
            shadowRadius,
            elevation: shadowWidth,
            // shadowColor: Platform.OS === 'ios' ? '#cecece' : '#000000',
            shadowColor: 'red'
        } : {};
        return {
            marginLeft: gapStyle,
            marginVertical: gapStyle,
            borderRadius,
            backgroundColor,
            ...shadowStyle
        };
    });
    // 分类栏字体色变化动画(选中)
    const categoryTextColorAnimatedStyle = useAnimatedStyle(() => {
        const color = interpolateColor(scrollY.value, [0, 200], [
            selfIndex === activeTabIndex ? '#ffffff' : '#000000',
            selfIndex === activeTabIndex ? '#000000' : '#ffffff',
        ]);
        return {
            color
        };
    });
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setActiveTabIndex(selfIndex)}
        >
            <Animated.View
                style={[
                    styles.tabItem,
                    categoryContainerAnimatedStyle
                ]}
            >
                <FastImage source={categoryInfo.img} style={styles.tabIcon} />
                <Animated.Text
                    style={[
                        styles.tabTitle,
                        categoryTextColorAnimatedStyle
                    ]}
                    ellipsizeMode='middle'
                    numberOfLines={1}
                >
                    {categoryInfo.title}
                </Animated.Text>
            </Animated.View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    tabItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: getViewSize(100),
        height: 50,
        backgroundColor: commonStyles.white,
        paddingHorizontal: getViewSize(20)
    },
    tabIcon: {
        width: getViewSize(18),
        height: getViewSize(18),
        marginRight: getViewSize(5)
    },
    tabTitle: {
        fontWeight: 'bold',
        fontFamily: 'System'
    },
});
export default memo(CategoryItem, (prevProps, nextProps) => {
    return prevProps.activeTabIndex !== nextProps.selfIndex && nextProps.activeTabIndex !== nextProps.selfIndex;
});