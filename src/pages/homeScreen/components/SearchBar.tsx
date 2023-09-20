import { commonStyles, getCommonShadowStyle } from "@/common/styles";
import { getViewSize } from "@/utils/sizeTool";
import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

const SearchBar: React.FC = () => {
    return (
        <View style={styles.searchContainer}>
            <Icon name="search1" size={getViewSize(25)} color={commonStyles.black_3a} />
            <Text style={styles.searchPlaceholder}>搜索更多~</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: getViewSize(10),
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

export default SearchBar;