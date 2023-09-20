import { commonStyles } from "@/common/styles";
import { getNavigationConsts } from "@/utils/loadAppTools";
import { getViewSize } from "@/utils/sizeTool";
import { View, Text, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome5";

const InfoBar: React.FC = ({ infoBarAnimatedStyle, avatorAnimatedStyle, communityNameAnimatedStyle }) => {
    return (
        <View style={{ paddingTop: getNavigationConsts().statusBarHeight, zIndex: 2 }}>
            <Animated.View style={[styles.container, infoBarAnimatedStyle]}>
                <View style={styles.settings}>
                    <Icon name="location-arrow" size={getViewSize(20)} color={commonStyles.black} />
                </View>
                <Animated.View style={[styles.communityNameContainer, communityNameAnimatedStyle]}>
                    <Text style={styles.communityName} ellipsizeMode='middle' numberOfLines={1}>清华大学光华学院</Text>
                </Animated.View>
                <View style={[styles.settings, styles.avatorSetting]}>
                    <Animated.Image style={avatorAnimatedStyle} source={{ uri: 'https://tuchuangs.com/imgs/2023/09/18/44d99b5d075ce313.jpg' }} />
                </View>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: commonStyles.pageBorderGap,
        // backgroundColor: 'pink'
    },
    settings: {
        flex: 1,
        // backgroundColor: 'red'
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
        width: 40,
        height: 40,
        borderRadius: 20
    },
});
export default InfoBar;