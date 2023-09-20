import { commonStyles, getCommonShadowStyle } from "@/common/styles";
import { getViewSize } from "@/utils/sizeTool";
import { Text, StyleSheet, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import Icon from 'react-native-vector-icons/AntDesign';

const SearchBar: React.FC = ({ searchBarAnimatedStyle }) => {
    return (
        <Animated.View style={[styles.searchContainer, searchBarAnimatedStyle]}>
            <Icon name="search1" size={getViewSize(25)} color={commonStyles.black_3a} />
            <Text style={styles.searchPlaceholder} onPress={() => { console.log('9898点击了'); }}>搜索更多~</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        width: Dimensions.get('window').width - commonStyles.pageBorderGap * 2,
        flexDirection: 'row',
        alignItems: 'center',
        // alignSelf: 'flex-end',
        height: 50,
        paddingHorizontal: 10,
        backgroundColor: commonStyles.white,
        borderRadius: 25,
        marginHorizontal: commonStyles.pageBorderGap,
        marginVertical: 10,
        ...getCommonShadowStyle().style
    },
    tt: {
    },
    searchPlaceholder: {
        marginLeft: 8,
        color: commonStyles.grey_placeholder
    },
});

export default SearchBar;