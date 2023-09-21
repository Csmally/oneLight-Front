import { commonStyles, getCommonShadowStyle } from "@/common/styles";
import { getViewSize } from "@/utils/sizeTool";
import { Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Animated from "react-native-reanimated";
import Icon from 'react-native-vector-icons/AntDesign';

const SearchBar: React.FC = ({ searchBarSpaceAnimatedStyle, gpaAnimatedStyle }) => {
    return (
        <TouchableWithoutFeedback onPress={() => { console.log('9898跳转页面'); }} style={{ zIndex: 1 }}>
            <Animated.View style={[styles.container, gpaAnimatedStyle]}>
                <Animated.View style={searchBarSpaceAnimatedStyle} />
                <Animated.View style={styles.searchContainer}>
                    <Icon name="search1" size={getViewSize(25)} color={commonStyles.black_3a} />
                    <Text style={styles.searchPlaceholder} >搜索更多~</Text>
                </Animated.View>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: commonStyles.pageBorderGap
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 10,
        backgroundColor: commonStyles.white,
        borderRadius: 25,
        ...getCommonShadowStyle().style
    },
    searchPlaceholder: {
        marginLeft: 8,
        color: commonStyles.grey_placeholder
    },
});

export default SearchBar;