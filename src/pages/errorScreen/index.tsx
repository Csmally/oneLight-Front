import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

function ErrorScreen() {
    useEffect(() => {
        console.log('9898有用--错误组件刷新了');
    }, []);
    return (
        <View style={styles.container}>
            <Text>出错啦！</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ErrorScreen;