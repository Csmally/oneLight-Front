import { commonStyles } from "@/common/styles";
import { memo, useContext } from "react";
import { Platform, StyleSheet, TouchableWithoutFeedback } from "react-native";
import FastImage from "react-native-fast-image";
import Animated, { Extrapolation, interpolate, interpolateColor, useAnimatedStyle } from "react-native-reanimated";
import { HomePageContext } from "../utils/context";

type CategoryItemInfo = {
    title: string,
    img: any
}
type CategoryItemProps = {
    categoryInfo: CategoryItemInfo,
    // eslint-disable-next-line no-unused-vars
    changeActiveTab: (index: number) => void,
    selfIndex: number,
    activeTabIndex: number,
}

function CategoryItem({ categoryInfo, changeActiveTab, selfIndex, activeTabIndex }: CategoryItemProps) {
    const { scrollY } = useContext(HomePageContext);
    // 分类栏item的容器动画（边距、阴影）
    const categoryContainerAnimatedStyle = useAnimatedStyle(() => {
        // 背景颜色
        const backgroundColor = interpolateColor(scrollY.value, [0, 90], [
            selfIndex === activeTabIndex ? 'rgba(0, 0, 0,1)' : 'rgba(255, 255, 255,1)',
            selfIndex === activeTabIndex ? 'rgba(0, 0, 0,0)' : 'rgba(255, 255, 255,0)',
        ]);
        // 边距
        const gapStyle = interpolate(scrollY.value, [0, 90], [10, 0], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        // 圆角
        const borderRadius = interpolate(scrollY.value, [0, 90], [25, 0], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        // 阴影宽度 & 安卓elevation
        const shadowWidth = interpolate(scrollY.value, [0, 90], [10, 0], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        // 透明度
        const shadowOpacity = interpolate(scrollY.value, [0, 90], [0.3, 0], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        // 圆角
        const shadowRadius = interpolate(scrollY.value, [0, 90], [2, 0], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        const shadowStyle = {
            shadowOffset: {
                width: 0,
                height: shadowWidth
            },
            shadowOpacity,
            shadowRadius,
            elevation: shadowWidth,
            shadowColor: Platform.OS === 'ios' ? '#cecece' : commonStyles.black_333,
        };
        const noShadowStyle = {
            shadowOpacity: 0,
            elevation: 0,
        };
        return {
            marginLeft: gapStyle,
            marginVertical: gapStyle,
            borderRadius,
            backgroundColor,
            ...selfIndex === activeTabIndex ? noShadowStyle : shadowStyle
        };
    });
    // 分类栏字体色变化动画(选中)
    const categoryTextColorAnimatedStyle = useAnimatedStyle(() => {
        const color = interpolateColor(scrollY.value, [0, 90], [
            selfIndex === activeTabIndex ? commonStyles.white : commonStyles.black_333,
            selfIndex === activeTabIndex ? commonStyles.black_333 : commonStyles.white,
        ]);
        return {
            color
        };
    });
    return (
        <TouchableWithoutFeedback onPress={() => changeActiveTab(selfIndex)}>
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
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    tabItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 40
    },
    tabIcon: {
        width: 18,
        height: 18,
        marginRight: 5
    },
    tabTitle: {
        fontWeight: 'bold',
        fontFamily: 'System',
        lineHeight: 18
    },
});

export default memo(CategoryItem, (prevProps, nextProps) => {
    return prevProps.activeTabIndex !== nextProps.selfIndex && nextProps.activeTabIndex !== nextProps.selfIndex;
});