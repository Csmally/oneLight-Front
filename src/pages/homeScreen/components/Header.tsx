import { CONSTS_STYLE_VALUE } from "@/interfaces/commonEnum";
import { getNavigationConsts } from "@/utils/loadAppTools";
import { getViewSize } from "@/utils/sizeTool";
import { BlurView } from "@react-native-community/blur";
import { StyleSheet, TextInput } from "react-native";
import { View } from "react-native-ui-lib";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Header: React.FC = () => {
    return (
        <View style={[styles.container, { paddingTop: getNavigationConsts().statusBarHeight }]}>
            <BlurView style={styles.blurContainer} blurType='xlight' blurAmount={50} />
            <View style={styles.innerContainer}>
                <Icon name="line-scan" size={getViewSize(25)} color={CONSTS_STYLE_VALUE.BLACK_COLOR} />
                <TextInput style={styles.middle} />
                <Icon name="bell-outline" size={getViewSize(25)} color={CONSTS_STYLE_VALUE.BLACK_COLOR} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
    },
    blurContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 999
    },
    innerContainer: {
        paddingVertical: getViewSize(5),
        paddingHorizontal: getViewSize(10),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    middle: {
        flex: 1,
        backgroundColor: 'black',
        marginHorizontal: getViewSize(10),
        height: getViewSize(30)
    }
});

export default Header;