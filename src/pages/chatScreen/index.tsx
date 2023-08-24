import { useEffect } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'
import SplashScreen from 'react-native-splash-screen'
import { Text, View } from 'react-native-ui-lib'

const ChatScreen: React.FC = () => {
    useEffect(()=>{
        setTimeout(() => {
            SplashScreen.hide();
        }, 2500);
    },[])
    return (
        <Text>我是聊天室</Text>
    )
}

const styles = StyleSheet.create({
    test: {
        // height: 900,
        flex: 1,
        backgroundColor: 'red'
    },
    aa: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    bb: {
        width: 100,
        height: 100,
        backgroundColor: 'blue'
    },
    cc: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }
})
export default ChatScreen
