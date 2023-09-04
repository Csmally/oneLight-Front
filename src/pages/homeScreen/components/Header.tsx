import { CONSTS_STYLE_VALUE } from "@/interfaces/commonEnum";
import { getNavigationConsts } from "@/utils/loadAppTools";
import { StyleSheet, TextInput } from "react-native";
import { View } from "react-native-ui-lib";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Header: React.FC = () => {
    return (
        <View style={[styles.container, { paddingTop: getNavigationConsts().statusBarHeight }]}>
            <View style={styles.innerContainer}>
                <Icon name="line-scan" size={30} color={CONSTS_STYLE_VALUE.BLACK_COLOR} />
                <TextInput style={styles.middle} />
                <Icon name="bell-outline" size={30} color={CONSTS_STYLE_VALUE.BLACK_COLOR} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: CONSTS_STYLE_VALUE.WHITE_COLOR,
    },
    innerContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    middle: {
        flex: 1,
        backgroundColor: 'green',
        marginHorizontal: 10,
        height: 30
    }
});

export default Header;