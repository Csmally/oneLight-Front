import { commonStyles } from "@/common/styles";
import { getNavigationConsts } from "@/utils/loadAppTools";
import { getViewSize } from "@/utils/sizeTool";
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, LayoutChangeEvent } from "react-native";
import Animated, { Extrapolation, SharedValue, interpolate, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome5";

type InfoBarProps = {
    scrollY: SharedValue<number>,
}

function InfoBar({ scrollY }: InfoBarProps) {
    // 热区宽度
    const hotAreaWidth = useSharedValue(0);
    const setHotAreaWidth = (e: LayoutChangeEvent) => {
        const width = (e?.nativeEvent?.layout?.width - 60) || 0;
        hotAreaWidth.value = width;
    };
    // 映射信息栏头像动画样式
    const avatorAnimatedStyle = useAnimatedStyle(() => {
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
    // 映射信息栏头像动画样式
    const communityNameAnimatedStyle = useAnimatedStyle(() => {
        // 信息栏额外paddingTop
        const opacity = interpolate(scrollY.value, [0, 200], [1, 0], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        return { opacity };
    });
    // ff
    const hotAreaAnimatedStyle = useAnimatedStyle(() => {
        // 热区宽度
        const width = interpolate(scrollY.value, [0, 100], [0, hotAreaWidth.value], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        return {
            width,
        };
    });
    return (
        <View style={{ paddingTop: getNavigationConsts().statusBarHeight, zIndex: 2 }}>
            <Animated.View style={styles.container} onLayout={setHotAreaWidth} >
                <View style={styles.settings}>
                    <Icon name="location-arrow" onPress={() => { console.log('9898我是定位位置'); }} size={getViewSize(20)} color={commonStyles.black} />
                </View>
                <Animated.View style={[styles.communityNameContainer, communityNameAnimatedStyle]}>
                    <Text style={styles.communityName} ellipsizeMode='middle' numberOfLines={1}>清华大学光华学院</Text>
                </Animated.View>
                <View style={[styles.settings, styles.avatorSetting]}>
                    <TouchableOpacity onPress={() => { console.log('9898我是个人信息'); }}>
                        <Animated.Image style={avatorAnimatedStyle} source={{ uri: 'https://tuchuangs.com/imgs/2023/09/18/44d99b5d075ce313.jpg' }} />
                    </TouchableOpacity>
                </View>
                {/* 搜索框热区 */}
                <TouchableWithoutFeedback onPress={() => { console.log('9898我是热区跳转'); }}>
                    <Animated.View style={[styles.hotArea, hotAreaAnimatedStyle]} />
                </TouchableWithoutFeedback>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: commonStyles.pageBorderGap
    },
    settings: {
        width: 40,
        height: 50,
        justifyContent: 'center',
        zIndex: 3
    },
    avatorSetting: {
        alignItems: 'flex-end'
    },
    communityNameContainer: {
        maxWidth: 150,
    },
    communityName: {
        color: commonStyles.black,
        textAlign: 'center',
        fontSize: commonStyles.topBarFontSize,
        fontWeight: 'bold'
    },
    hotArea: {
        height: 50,
        position: 'absolute',
        bottom: 0,
        right: commonStyles.pageBorderGap,
        zIndex: 2
    }
});

export default InfoBar;