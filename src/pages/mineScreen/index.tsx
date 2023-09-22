import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native-ui-lib';

function MineScreen() {
    return (
        <View style={styles.test}>
            <Text>我的页</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    test: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink'
    },
    aa: {
        width: 100,
        height: 100,
        backgroundColor: 'green'
    }
});

export default MineScreen;
