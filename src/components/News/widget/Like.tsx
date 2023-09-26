import { commonStyles } from "@/common/styles";
import { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Like() {
    const [status, setStatus] = useState(false);
    const changeStatus = () => {
        setStatus(!status);
    };
    return (
        <TouchableWithoutFeedback onPress={changeStatus}>
            <View style={styles.container}>
                <Icon name={status ? "cards-heart" : "cards-heart-outline"} size={22} color={commonStyles.black} />
                <Text style={styles.text}>58</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15
    },
    text: {
        width: 30,
        textAlign: 'center',
        color: commonStyles.grey_placeholder
    }
});

export default Like;