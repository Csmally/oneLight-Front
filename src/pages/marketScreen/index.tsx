import { useEffect } from 'react';
import { Text, View } from 'react-native';

function MarketScreen() {
    useEffect(() => {
        console.log('9898有用--集市组件刷新了');
    }, []);
    return (
        <View style={{ backgroundColor: 'pink', flex: 1 }}>
            <Text>我是聊天室</Text>
            <Text>我是聊天室</Text>
            <Text>我是聊天室</Text>
            <Text>我是聊天室</Text>
            <Text style={{ height: 30, backgroundColor: 'red' }}>我是聊天室</Text>
            <Text style={{ height: 30, backgroundColor: 'blue' }}>我是聊天室1</Text>
            <Text>我是聊天室2</Text>
            <Text>我是聊天室3</Text>
            <Text>我是聊天室4</Text>
            <Text>我是聊天室</Text>
            <Text>我是聊天室</Text>
            <Text>我是聊天室</Text>
            <Text>我是聊天室</Text>
        </View>
    );
}

export default MarketScreen;
