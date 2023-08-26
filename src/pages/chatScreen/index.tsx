import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Text } from 'react-native-ui-lib';

const ChatScreen: React.FC = () => {
    useEffect(()=>{
        setTimeout(() => {
            SplashScreen.hide();
        }, 2500);
    },[]);
    return (
        <Text>我是聊天室</Text>
    );
};

export default ChatScreen;
