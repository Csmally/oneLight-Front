import { commonStyles } from "@/common/styles";
import { getViewSize } from "@/utils/sizeTool";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const tabs = [
    {
        title: '全部',
        img: ''
    },
    {
        title: '美食',
        img: ''
    },
    {
        title: '快递',
        img: ''
    },
    {
        title: 'Replace',
        img: ''
    },
    {
        title: '兼职',
        img: ''
    },
];

const CategoryTabs: React.FC = () => {
    return (
        <ScrollView
            horizontal
            bounces={false}
            showsHorizontalScrollIndicator={false}
        // contentContainerStyle={{ marginHorizontal: commonStyles.pageBorderGap }}
        >
            {
                tabs.map((item, index) => (
                    <View key={index} style={styles.tabItem}>
                        <Text style={styles.tabTitle}>{item.title}</Text>
                    </View>
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
        minWidth: getViewSize(100),
        height: getViewSize(46),
        borderRadius: getViewSize(23),
        marginHorizontal: getViewSize(5),
        backgroundColor: commonStyles.black,
    },
    tabTitle: {
        color: commonStyles.white,
        fontWeight: 'bold'
    }
});

export default CategoryTabs;