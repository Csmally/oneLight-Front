import { CONSTS_VALUE } from '@/interfaces/commonEnum';
import Storage from '@/storage';
import { useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';

function MineScreen() {
    const tt = () => {
        Storage.set(CONSTS_VALUE.LOGIN_STATUS, false);
    };
    const setError = () => {
        console.log(a.b.c);
    };
    const signOut = () => {
        Storage.set(CONSTS_VALUE.LOGIN_STATUS, false);
    };
    useEffect(() => {
        setTimeout(() => {
            console.log('9898有用--我的组件刷新了');
        }, 1);
    }, []);
    return (
        <View>
            <View style={styles.test}>
                <Text onPress={tt}>我的页</Text>
            </View>
            <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'violet' }} onPress={setError}>
                <Text>发生错误</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 100, height: 100, backgroundColor: 'violet' }} onPress={signOut}>
                <Text>退出登陆</Text>
            </TouchableOpacity>
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
