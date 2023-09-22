import { commonStyles } from "@/common/styles";
import { getViewSize } from "@/utils/sizeTool";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, Platform } from "react-native";
import FastImage from "react-native-fast-image";
import Animated, { AnimatedRef, Extrapolation, SharedValue, interpolate, interpolateColor, useAnimatedStyle } from "react-native-reanimated";

const tabs = [
    {
        title: '全部',
        img: require('../static/all.png')
    },
    {
        title: '美食',
        img: require('../static/food.png')
    },
    {
        title: '快递',
        img: require('../static/express.png')
    },
    {
        title: 'Replace',
        img: require('../static/class.png')
    },
    {
        title: '兼职',
        img: require('../static/job.png')
    },
];

type CategoryBarProps = {
    scrollY: SharedValue<number>,
    flatListRef: AnimatedRef<Animated.FlatList<NewsItem>>
}

function CategoryBar({ scrollY }: CategoryBarProps) {
    console.log('9898刷新');
    const [currentTab, setCurrentTab] = useState(0);
    const changeTab = (index: number) => {
        setCurrentTab(index);
    };
    // 分类背景色变化动画(选中)
    const categoryColorAnimatedStyle = useAnimatedStyle(() => {
        // 背景颜色
        const backgroundColor = interpolateColor(scrollY.value, [0, 200], ['rgba(0, 0, 0,1)', 'rgba(0, 0, 0,0)']);
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
            marginVertical: gapStyle,
            borderRadius,
            backgroundColor,
        };
    });
    // 映射分类栏阴影动画样式
    const categoryBarShadowAnimatedStyle = useAnimatedStyle(() => {
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
        // 背景颜色
        const backgroundColor = interpolateColor(scrollY.value, [0, 200], ['rgba(255, 255, 255,1)', 'rgba(255, 255, 255,0)']);
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
            marginVertical: gapStyle,
            borderRadius,
            shadowOffset: {
                width: 0,
                height: shadowWidth
            },
            shadowOpacity,
            shadowRadius,
            elevation: shadowWidth,
            shadowColor: Platform.OS === 'ios' ? '#cecece' : '#000000',
            backgroundColor
        };
    });
    // 分类栏字体色变化动画(选中)
    const categoryTextSColorSAnimatedStyle = useAnimatedStyle(() => {
        // 背景颜色
        const color = interpolateColor(scrollY.value, [0, 200], ['#ffffff', '#000000']);
        return {
            color
        };
    });
    // 分类栏字体色变化动画(未选中)
    const categoryTextNColorSAnimatedStyle = useAnimatedStyle(() => {
        // 背景颜色
        const color = interpolateColor(scrollY.value, [0, 200], ['#000000', '#ffffff']);
        return {
            color
        };
    });
    return (
        <Animated.ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ zIndex: 2 }}
        >
            {
                tabs.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.6}
                        onPress={() => changeTab(index)}
                    >
                        <Animated.View
                            style={[
                                styles.tabItem,
                                index === currentTab ? categoryColorAnimatedStyle : categoryBarShadowAnimatedStyle
                            ]}
                        >
                            <FastImage source={item.img} style={styles.tabIcon} />
                            <Animated.Text
                                style={[
                                    styles.tabTitle,
                                    index === currentTab ? categoryTextSColorSAnimatedStyle : categoryTextNColorSAnimatedStyle
                                ]}
                                ellipsizeMode='middle'
                                numberOfLines={1}
                            >
                                {item.title}
                            </Animated.Text>
                        </Animated.View>
                    </TouchableOpacity>
                ))
            }
        </Animated.ScrollView >
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

export default CategoryBar;