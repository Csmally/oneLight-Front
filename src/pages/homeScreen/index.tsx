import { useEffect, useState } from 'react';
import { Dimensions, FlatList, Platform, RefreshControl, StyleSheet, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { getNavigationConsts } from '@/utils/loadAppTools';
import AnimatedHeader from './components/AnimatedHeader';
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import News from '@/components/News';
import newsDataMock from '@/mock/newsData';
import LoadMore from '@/components/LoadMore';
import BlurBox from '@/components/BlurBox';

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
        console.log('9898有用--home组件刷新了');
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
        <View style={styles.page} >
            {/* <Animated.View style={spaceViewAnimatedStyle} /> */}
            <Animated.FlatList
                ref={ref => flatListRef.current = ref}
                contentInsetAdjustmentBehavior='never'
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: initTopbarHeight,
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
            <BlurBox/>
        </View>
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
    },
    header: {
        backgroundColor: 'pink',
    }
});

export default HomeScreen;
