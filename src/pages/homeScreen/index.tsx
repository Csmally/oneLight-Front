import { useEffect, useState } from 'react';
import { FlatList, Platform, RefreshControl, StyleSheet, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { View } from 'react-native-ui-lib';
import Storage from '@/storage';
import { CONSTS_VALUE } from '@/interfaces/commonEnum';
import { getNavigationConsts } from '@/utils/loadAppTools';
import { BlurView } from '@react-native-community/blur';
import AnimatedHeader from './components/AnimatedHeader';
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import News from '@/components/News';
import newsDataMock from '@/mock/newsData';

const TestItem = ({ item }: { item: any }) => {
    return (
        <View style={{ height: 60, backgroundColor: item.color }}>
            <Text style={{ flex: 1 }}>{item.title}</Text>
        </View>
    );
};

function HomeScreen() {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const tt = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
        }, 3000);
    };
    const [newsData, setNewsData] = useState([]);
    const getNewsData = () => {
        newsDataMock.forEach(item => item.id = Math.random());
        setNewsData(newsDataMock);
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
    const initTopbarHeight = getNavigationConsts().statusBarHeight + 190;
    return (
        <View style={Platform.OS === 'ios' ? styles.pageForIos : styles.pageForAndroid} >
            <Animated.FlatList
                ref={ref => flatListRef.current = ref}
                contentInsetAdjustmentBehavior='never'
                contentContainerStyle={{
                    paddingBottom: getNavigationConsts().bottomTabsHeight
                }}
                keyExtractor={(item, index) => index.toString()}
                removeClippedSubviews
                onScroll={scrollHandler}
                data={newsData}
                renderItem={({ item }) => <News news={item} />}
                ItemSeparatorComponent={() => <View height={5}></View>}
                ListFooterComponent={() => <Text>到底部了</Text>}
                ListFooterComponentStyle={{ backgroundColor: 'pink' }}
                ListHeaderComponent={
                    () => (
                        <AnimatedHeader
                            scrollY={scrollY}
                            initTopbarHeight={initTopbarHeight}
                            flatListRef={flatListRef}
                        />
                    )
                }
                stickyHeaderIndices={[0]}
                refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={tt}></RefreshControl>}
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
