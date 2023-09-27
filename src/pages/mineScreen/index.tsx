import { CONSTS_VALUE } from '@/interfaces/commonEnum';
import Storage from '@/storage';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

function MineScreen() {
    const tt = () => {
        Storage.set(CONSTS_VALUE.LOGIN_STATUS, false);
    };
    return (
        <View style={styles.test}>
            <Text onPress={tt}>我的页</Text>
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
