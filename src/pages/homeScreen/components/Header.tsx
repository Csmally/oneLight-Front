import { CONSTS_STYLE_VALUE } from "@/interfaces/commonEnum";
import { getNavigationConsts } from "@/utils/loadAppTools";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";

const Header: React.FC = () => {
    return (
        <View style={[styles.container, { paddingTop: getNavigationConsts().statusBarHeight }]}>
            <Text>我是头部组件自定义</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: CONSTS_STYLE_VALUE.WHITE_COLOR
    }
});

export default Header;