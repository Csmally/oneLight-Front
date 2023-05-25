import { useEffect } from 'react'
import { Text } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

function HomeScreen() {
    useEffect(()=>{
        setTimeout(() => {
            SplashScreen.hide();
        }, 2500);
    },[])
    return (
        <Text>我是home</Text>
    )
}

export default HomeScreen
