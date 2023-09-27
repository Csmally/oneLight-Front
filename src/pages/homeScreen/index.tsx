import { useEffect, useState } from 'react';
import { FlatList, Platform, RefreshControl, StyleSheet, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Storage from '@/storage';
import { CONSTS_VALUE } from '@/interfaces/commonEnum';
import { getNavigationConsts } from '@/utils/loadAppTools';
import { BlurView } from '@react-native-community/blur';
import AnimatedHeader from './components/AnimatedHeader';
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import News from '@/components/News';
import newsDataMock from '@/mock/newsData';
import LoadMore from '@/components/LoadMore';

function HomeScreen() {
    console.log(`9898home刷新${Platform.OS}`);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const tt = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
        }, 1500);
    };
    const [newsData, setNewsData] = useState<NewsItem[]>([]);
    const getNewsData = () => {
        setIsLoadingMore(true);
        const apiData = newsDataMock.map((item, index) => ({
            ...item,
            id: index + '-' + (new Date()).getTime()
        }));
        setTimeout(() => {
            setNewsData([...newsData, ...apiData]);
            setIsLoadingMore(false);
        }, 1500);
    };
    const loadMoreData = () => {
        if (isLoadingMore) return;
        getNewsData();
    };
    useEffect(() => {
        // Storage.set(CONSTS_VALUE.LOGIN_STATUS,false);
        getNewsData();
        SplashScreen.hide();
    }, []);
    const flatListRef = useAnimatedRef<FlatList<NewsItem>>();
    // 滑动距离
    const scrollY = useSharedValue(0);
    // 滑动事件
    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    });
    const initTopbarHeight = getNavigationConsts().statusBarHeight + 170;
    return (
        <View style={[Platform.OS === 'ios' ? styles.pageForIos : styles.pageForAndroid]} >
            {/* <Animated.View style={spaceViewAnimatedStyle} /> */}
            <Animated.FlatList
                style={{ paddingTop: initTopbarHeight }}
                ref={ref => flatListRef.current = ref}
                contentInsetAdjustmentBehavior='never'
                contentContainerStyle={{
                    paddingBottom: getNavigationConsts().bottomTabsHeight
                }}
                keyExtractor={item => item.id}
                removeClippedSubviews
                onScroll={scrollHandler}
                data={newsData}
                renderItem={({ item }) => <News news={item} />}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                ListFooterComponent={<LoadMore isLoadingMore={isLoadingMore} />}
                refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={tt}></RefreshControl>}
                onEndReached={loadMoreData}
                onEndReachedThreshold={0.3}
            />
            {/* 涉及blur组件需要放在下方 */}
            <AnimatedHeader
                scrollY={scrollY}
                initTopbarHeight={initTopbarHeight}
                flatListRef={flatListRef}
            />
            <View style={[styles.blurContainer, { height: getNavigationConsts().bottomTabsHeight }]}>
                <BlurView style={{ flex: 1 }} blurType='xlight' blurAmount={50} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pageForIos: {
        height: Storage.getNumber(CONSTS_VALUE.WINDOW_HEIGHT)
    },
    pageForAndroid: {
        flex: 1
    },
    header: {
        backgroundColor: 'pink',
    },
    blurContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        overflow: 'hidden'
    }
});

export default HomeScreen;
