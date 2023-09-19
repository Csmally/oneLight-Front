import { commonStyles, getCommonShadowStyle } from "@/common/styles";
import { getNavigationConsts } from "@/utils/loadAppTools";
import { getViewSize } from "@/utils/sizeTool";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import CategoryTabs from "./CategoryTabs";
import FastImage from "react-native-fast-image";

const HeaderWidget: React.FC = () => {
    return (
        <View>
            <View style={[styles.topContainer, { paddingTop: getNavigationConsts().statusBarHeight }]}>
                <View style={styles.settings}>
                    <Icon name="location-arrow" size={getViewSize(20)} color={commonStyles.black} />
                </View>
                <View style={styles.communityNameContainer}>
                    <Text style={styles.communityName} ellipsizeMode='middle' numberOfLines={1}>清华大学光华学院</Text>
                </View>
                <View style={[styles.settings, styles.avatorSetting]}>
                    <FastImage style={styles.avator} source={{ uri: 'https://tuchuangs.com/imgs/2023/09/18/44d99b5d075ce313.jpg' }} />
                </View>
            </View>
            <View style={styles.searchContainer}>
                <IconAntDesign name="search1" size={getViewSize(25)} color={commonStyles.black_3a} />
                <Text style={styles.searchPlaceholder}>搜索更多~</Text>
            </View>
            <CategoryTabs />
        </View>
    );
};

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: commonStyles.pageBorderGap
    },
    settings: {
        flex: 1,
    },
    avatorSetting: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    communityNameContainer: {
        width: '50%',
    },
    communityName: {
        color: commonStyles.black,
        textAlign: 'center',
        fontSize: commonStyles.topBarFontSize,
        fontWeight: 'bold'
    },
    avator: {
        width: getViewSize(42),
        height: getViewSize(42),
        borderRadius: getViewSize(21)
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: getViewSize(12),
        backgroundColor: commonStyles.white,
        borderRadius: getViewSize(30),
        marginTop: getViewSize(20),
        marginBottom: getViewSize(10),
        marginHorizontal: commonStyles.pageBorderGap,
        ...getCommonShadowStyle().style
    },
    searchPlaceholder: {
        marginLeft: 8,
        color: commonStyles.grey_placeholder
    },
});
export default HeaderWidget;