import { commonStyles, getCommonShadowStyle } from "@/common/styles";
import { getViewSize } from "@/utils/sizeTool";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
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
    const { categoryBarItemAnimatedStyle, categoryBarShadowAnimatedStyle, searchBarAnimatedStyle } = props;
    const [currentTab, setCurrentTab] = useState(0);
    return (
        <Animated.ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={[{ zIndex: 2 }, searchBarAnimatedStyle]}
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
                                styles.tabItem, index === currentTab ? styles.selectTab : categoryBarShadowAnimatedStyle,
                                categoryBarItemAnimatedStyle,
                            ]}
                        >
                            <FastImage source={item.img} style={styles.tabIcon} />
                            <Text
                                style={index === currentTab ? styles.selectTabTitle : styles.tabTitle}
                                ellipsizeMode='middle'
                                numberOfLines={1}
                            >
                                {item.title}
                            </Text>
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
        marginTop: commonStyles.pageBorderGap,
        paddingHorizontal: getViewSize(20),
    },
    tab1: {
        ...getCommonShadowStyle().style
    },
    tab: {
        // shadowOffset: {
        //     width: 0,
        //     height: shadowStyles.shadowWidth
        // },
        // shadowOpacity: shadowStyles.shadowOpacity,
        // shadowRadius: shadowStyles.shadowRadius,
        // shadowColor: shadowStyles.shadowColorForIos,
    },
    selectTab: {
        backgroundColor: commonStyles.black
    },
    tabIcon: {
        width: getViewSize(18),
        height: getViewSize(18),
        marginRight: getViewSize(5)
    },
    tabTitle: {
        color: commonStyles.black,
        fontWeight: 'bold',
        fontFamily: 'System'
    },
    selectTabTitle: {
        color: commonStyles.white,
        fontWeight: 'bold',
        fontFamily: 'System',
        fontVariant: ['small-caps']
    }
});

export default CategoryBar;