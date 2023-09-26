import { commonStyles, getCommonShadowStyle } from "@/common/styles";
import { getViewSize } from "@/utils/sizeTool";
import { Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Animated, { Extrapolation, SharedValue, interpolate, useAnimatedStyle } from "react-native-reanimated";
import Icon from 'react-native-vector-icons/AntDesign';

type SearchBarProps = {
    scrollY: SharedValue<number>,
}

function SearchBar({ scrollY }: SearchBarProps) {
    // 映射搜索栏左侧占位元素宽度动画样式
    const searchBarSpaceAnimatedStyle = useAnimatedStyle(() => {
        // 占位元素宽度
        const width = interpolate(scrollY.value, [0, 200], [0, 40], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        return {
            width,
        };
    });
    // 搜索框边距动画
    const gpaAnimatedStyle = useAnimatedStyle(() => {
        // 边距
        const gapStyle = interpolate(scrollY.value, [0, 200], [10, 0], {
            extrapolateLeft: Extrapolation.CLAMP,
            extrapolateRight: Extrapolation.CLAMP,
        });
        return {
            marginVertical: gapStyle,
        };
    });
    return (
        <TouchableWithoutFeedback onPress={() => { console.log('9898跳转页面'); }} style={{ zIndex: 1 }}>
            <Animated.View style={[styles.container, gpaAnimatedStyle]} >
                <Animated.View style={searchBarSpaceAnimatedStyle} />
                <Animated.View style={styles.searchContainer}>
                    <Icon name="search1" size={getViewSize(25)} color={commonStyles.black_333} />
                    <Text style={styles.searchPlaceholder} >搜索更多~</Text>
                </Animated.View>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: commonStyles.pageBorderGap
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 10,
        backgroundColor: commonStyles.white,
        borderRadius: 25,
        ...getCommonShadowStyle()
    },
    searchPlaceholder: {
        marginLeft: 8,
        color: commonStyles.grey_placeholder
    },
});

export default SearchBar;