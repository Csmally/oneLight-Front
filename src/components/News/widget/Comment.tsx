import { commonStyles } from "@/common/styles";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Comment() {
    return (
        <View style={styles.container}>
            <Icon name="comment-processing-outline" size={22} color={commonStyles.black} />
            <Text style={styles.text}>99+</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        width: 30,
        textAlign: 'center',
        color: commonStyles.grey_placeholder
    }
});

export default Comment;