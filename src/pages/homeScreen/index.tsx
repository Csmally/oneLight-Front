import Storage from '@/storage'
import { useEffect } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'
import SplashScreen from 'react-native-splash-screen'
import { Text, View } from 'react-native-ui-lib'

const HomeScreen: React.FC = () => {
    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 2500);
    }, [])
    return (
        <ScrollView style={styles.box} bounces={false} contentInsetAdjustmentBehavior='never'>
            <View style={styles.aa}></View>
            <View style={styles.bb}></View>
            <View style={styles.cc}></View>
            <View style={styles.bb}></View>
            <View style={styles.cc}></View>
            <View style={styles.bb}></View>
            <View style={styles.cc}></View>
            <View style={styles.bb}></View>
            <View style={styles.cc}></View>
            <View style={styles.dd}></View>
            <Text>我是结尾</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    box: {
        // position: 'absolute',
        // height: Storage.getNumber('screenHeight'),
        // width: '100%'
        flex: 1
    },
    aa: {
        height: 100,
        backgroundColor: 'pink'
    },
    bb: {
        height: 100,
        backgroundColor: 'red'
    },
    cc: {
        height: 100,
        backgroundColor: 'yellow'
    },
    dd: {
        height: 100,
        backgroundColor: 'green'
    }
})
export default HomeScreen
