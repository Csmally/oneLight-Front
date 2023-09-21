import { commonStyles } from "@/common/styles";
import { getViewSize } from "@/utils/sizeTool";
import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import Animated from "react-native-reanimated";

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

const CategoryBar: React.FC = (props) => {
    const {
        categoryBarItemAnimatedStyle,
        categoryBarShadowAnimatedStyle,
        categoryColorAnimatedStyle,
        categoryTextSColorSAnimatedStyle,
        categoryTextNColorSAnimatedStyle
    } = props;
    const [currentTab, setCurrentTab] = useState(0);
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
                        onPress={() => setCurrentTab(index)}
                    >
                        <Animated.View
                            style={[
                                styles.tabItem, index === currentTab ? categoryColorAnimatedStyle : categoryBarShadowAnimatedStyle,
                                categoryBarItemAnimatedStyle,
                            ]}
                        >
                            <FastImage source={item.img} style={styles.tabIcon} />
                            <Animated.Text
                                style={[styles.tabTitle, index === currentTab ? categoryTextSColorSAnimatedStyle : categoryTextNColorSAnimatedStyle]}
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
};

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