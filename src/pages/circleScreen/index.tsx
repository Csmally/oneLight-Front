import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

function CircleScreen() {
    useEffect(() => {
        console.log('9898有用--圈子组件刷新了');
    }, []);
    return (
        <View style={styles.container}>
            <Text>圈子</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: 'green'
    }
});

export default CircleScreen;