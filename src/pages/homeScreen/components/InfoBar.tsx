import { commonStyles } from "@/common/styles";
import { getNavigationConsts } from "@/utils/loadAppTools";
import { getViewSize } from "@/utils/sizeTool";
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import Animated from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome5";

const InfoBar: React.FC = (props) => {
    const {
        avatorAnimatedStyle,
        communityNameAnimatedStyle,
        hotAreaAnimatedStyle,
    } = props;
    return (
        <View style={{ paddingTop: getNavigationConsts().statusBarHeight, zIndex: 2 }}>
            <Animated.View style={styles.container}>
                <View style={styles.settings}>
                    <Icon name="location-arrow" onPress={() => { console.log('9898我是定位位置'); }} size={getViewSize(20)} color={commonStyles.black} />
                </View>
                <Animated.View style={[styles.communityNameContainer, communityNameAnimatedStyle]}>
                    <Text style={styles.communityName} ellipsizeMode='middle' numberOfLines={1}>清华大学光华学院</Text>
                </Animated.View>
                <View style={[styles.settings, styles.avatorSetting]}>
                    <TouchableOpacity onPress={() => { console.log('9898我是个人信息'); }}>
                        <Animated.Image style={avatorAnimatedStyle} source={{ uri: 'https://tuchuangs.com/imgs/2023/09/18/44d99b5d075ce313.jpg' }} />
                    </TouchableOpacity>
                </View>
                {/* 搜索框热区 */}
                <TouchableWithoutFeedback onPress={() => { console.log('9898我是热区跳转'); }}>
                    <Animated.View style={[styles.hotArea, hotAreaAnimatedStyle]} />
                </TouchableWithoutFeedback>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: commonStyles.pageBorderGap,
    },
    settings: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        zIndex: 3
    },
    avatorSetting: {
        alignItems: 'flex-end'
    },
    communityNameContainer: {
        maxWidth: 150,
    },
    communityName: {
        color: commonStyles.black,
        textAlign: 'center',
        fontSize: commonStyles.topBarFontSize,
        fontWeight: 'bold'
    },
    hotArea: {
        height: 50,
        // backgroundColor: 'violet',
        position: 'absolute',
        bottom: 0,
        right: commonStyles.pageBorderGap,
        zIndex: 2
    }
});

export default InfoBar;