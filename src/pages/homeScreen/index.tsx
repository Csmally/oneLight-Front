import { useEffect } from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AnimatedHeader from './components/AnimatedHeader';
import { useSharedValue } from 'react-native-reanimated';
import BlurBox from '@/components/BlurBox';
import NewsList from './components/NewsList';
import { HomePageContext } from './utils/context';
import { getNavigationConsts } from '@/utils/loadAppTools';

function HomeScreen() {
    console.log(`9898home刷新${Platform.OS}`);
    const initTopbarHeight = getNavigationConsts().statusBarHeight + 170;
    // 滑动距离
    const scrollY = useSharedValue(0);
    useEffect(() => {
        SplashScreen.hide();
    }, []);
    return (
        <HomePageContext.Provider value={{ scrollY, initTopbarHeight }}>
            <View style={styles.page} >
                <NewsList />
                {/* 涉及blur组件需要放在下方 */}
                {/* <AnimatedHeader flatListRef={flatListRef} /> */}
                <AnimatedHeader />
                <BlurBox />
            </View>
        </HomePageContext.Provider>
    );
}

const styles = StyleSheet.create({
    page: {
        ...Platform.select({
            ios: {
                height: Dimensions.get('window').height
            },
            android: {
                flex: 1
            }
        })
    }
});

export default HomeScreen;
