import { commonStyles, getCommonShadowStyle } from "@/common/styles";
import { getViewSize } from "@/utils/sizeTool";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";

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

const CategoryTabs: React.FC = () => {
    const [currentTab, setCurrentTab] = useState(0);
    return (
        <ScrollView
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 10, paddingRight: commonStyles.pageBorderGap }}
        >
            {
                tabs.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.6}
                        style={[styles.tabItem, index === currentTab ? styles.selectTab : styles.tab]}
                        onPress={() => setCurrentTab(index)}
                    >
                        <FastImage source={item.img} style={styles.tabIcon} />
                        <Text
                            style={index === currentTab ? styles.selectTabTitle : styles.tabTitle}
                            ellipsizeMode='middle'
                            numberOfLines={1}
                        >
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    tabItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: getViewSize(100),
        height: getViewSize(46),
        borderRadius: getViewSize(23),
        marginLeft: commonStyles.pageBorderGap,
        backgroundColor: commonStyles.white,
        paddingHorizontal: getViewSize(20),
    },
    tab: {
        ...getCommonShadowStyle().style
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

export default CategoryTabs;