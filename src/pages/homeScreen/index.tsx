import { useEffect, useRef } from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AnimatedHeader from './components/AnimatedHeader';
import { useSharedValue } from 'react-native-reanimated';
import BlurBox from '@/components/BlurBox';
import NewsListContainer from './components/NewsListContainer';
import { HomePageContext } from './utils/context';
import { getNavigationConsts } from '@/utils/loadAppTools';

function HomeScreen() {
    console.log(`9898home刷新${Platform.OS}`);
    const initTopbarHeight = getNavigationConsts().statusBarHeight + 170;
    // 滑动距离
    const scrollY = useSharedValue(0);
    // 最外层所有list列表容器ref
    const newsListContainerRef = useRef();
    // 分类栏容器ref
    const categoryBarRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 3000);
    }, []);
    const providerValue = {
        initTopbarHeight, // 顶部动画组件的高度
        newsListContainerRef, // 最外层所有list列表容器ref
        categoryBarRef, // 分类栏容器ref
        scrollY, // 各个分类list列表滑动距离
    };
    return (
        <HomePageContext.Provider value={providerValue}>
            <View style={styles.page} >
                <NewsListContainer />
                {/* 涉及blur组件需要放在下方 */}
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
