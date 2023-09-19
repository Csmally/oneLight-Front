import commonStyles from "@/common/styles";
import { getNavigationConsts } from "@/utils/loadAppTools";
import { getViewSize } from "@/utils/sizeTool";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const HeaderWidget = () => {
    return (
        <View>
            <View style={[styles.topContainer, { paddingTop: getNavigationConsts().statusBarHeight }]}>
                <View style={styles.settings}>
                    <Icon name="location-arrow" size={getViewSize(25)} color={commonStyles.black} />
                </View>
                <View style={styles.communityNameContainer}>
                    <Text style={styles.communityName}>清华大学光华学院</Text>
                </View>
                <View style={[styles.settings, styles.avatorSetting]}>
                    <Image style={styles.avator} source={{ uri: 'https://tuchuangs.com/imgs/2023/09/18/44d99b5d075ce313.jpg' }} />
                </View>
            </View>
            <View style={[styles.searchContainer, styles.shaw]}>
                <IconAntDesign name="search1" size={getViewSize(25)} color={commonStyles.black_3a} />
                <Text style={styles.searchPlaceholder}>搜索更多~</Text>
            </View>
            <ScrollView
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ marginHorizontal: commonStyles.pageBorderGap }}
            >
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => (
                        <View key={item} style={{ width: 80, height: 50, backgroundColor: 'pink', borderColor: 'black', borderWidth: 1 }}>
                            <Text>{item}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        // backgroundColor: 'pink',
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
        textAlign: 'center',
        fontSize: commonStyles.topBarFontSize,
        fontWeight: '600',
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
        marginVertical: getViewSize(20),
        marginHorizontal: commonStyles.pageBorderGap
    },
    searchPlaceholder: {
        marginLeft: 8,
        color: commonStyles.grey_placeholder
    },
    shaw: {
        shadowColor: '#cecece',
        shadowOffset: { width: 3, height: 9 },
        shadowOpacity: 0.2,
        shadowRadius: 2
    }
});
export default HeaderWidget;