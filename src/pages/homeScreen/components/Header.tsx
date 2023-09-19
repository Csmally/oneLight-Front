import commonStyles from "@/common/styles";
import { getNavigationConsts } from "@/utils/loadAppTools";
import { getViewSize } from "@/utils/sizeTool";
import { BlurView } from "@react-native-community/blur";
import { StyleSheet, TextInput } from "react-native";
import { View } from "react-native-ui-lib";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type HeaderProps = {
    setHeaderHeight: (height: number) => void;
}
const Header: React.FC<HeaderProps> = ({ setHeaderHeight }) => {
    const getHeight = (e: any) => {
        const height = e?.nativeEvent?.layout?.height || 0;
        setHeaderHeight(height);
    };
    return (
        <View style={[styles.container, { top: getNavigationConsts().statusBarHeight }]} onLayout={getHeight}>
            <BlurView style={styles.blurContainer} blurType='xlight' blurAmount={50} />
            <View style={styles.innerContainer}>
                <Icon name="line-scan" size={getViewSize(25)} color={commonStyles.black} />
                <TextInput />
                <Icon name="bell-outline" size={getViewSize(25)} color={commonStyles.black} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        // top: 0,
        left: 10,
        right: 10,
        overflow: 'hidden',
        // opacity: 0
        borderRadius: 20
    },
    blurContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    innerContainer: {
        paddingVertical: getViewSize(12),
        paddingHorizontal: getViewSize(10),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    middleTextInput: {
        flex: 1,
        backgroundColor: '#dcdcdc',
        marginHorizontal: getViewSize(10),
        height: getViewSize(40),
    }
});

export default Header;