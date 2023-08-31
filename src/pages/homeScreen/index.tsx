import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Text, View } from 'react-native-ui-lib';
import Storage from '@/storage';
import { Navigation } from 'react-native-navigation';
import { CONST_VALUE } from '@/interfaces/commonEnum';
import specialStyles from './styles/specialStyles';

const HomeScreen: React.FC = () => {
    useEffect(() => {
        const { statusBarHeight, bottomTabsHeight } = Navigation.constantsSync();
        Storage.set(CONST_VALUE.BOTTOMTABS_HEIGHT, bottomTabsHeight);
        Storage.set(CONST_VALUE.STATUSBAR_HEIGHT, statusBarHeight);
        setTimeout(() => {
            SplashScreen.hide();
        }, 2500);
    }, []);
    return (
        <ScrollView
            contentInsetAdjustmentBehavior='never'
            style={specialStyles.page}
            contentContainerStyle={specialStyles.container}
        >
            <View style={styles.aa}></View>
            <View style={styles.bb}></View>
            <View style={styles.cc}></View>
            <View style={styles.bb}></View>
            <View style={styles.cc}></View>
            <View style={styles.bb}></View>
            <View style={styles.cc}></View>
            <View style={styles.bb}></View>
            <View style={styles.ee}></View>
            <View style={styles.dd}></View>
            <Text>我是结尾</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
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
    },
    ee: {
        height: 56,
        backgroundColor: 'black'
    }
});

export default HomeScreen;
