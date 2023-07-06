import { useEffect } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'
import SplashScreen from 'react-native-splash-screen'
import { Text, View } from 'react-native-ui-lib'

const HomeScreen: React.FC = () => {
    useEffect(()=>{
        setTimeout(() => {
            SplashScreen.hide();
        }, 2500);
    },[])
    return (
        <ScrollView style={styles.test}>
            <View style={styles.aa}></View>
            <Text>我是home页</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    test: {
        backgroundColor: 'pink'
    },
    aa: {
        width: 100,
        height: 100,
        backgroundColor: 'orange'
    }
})
export default HomeScreen
