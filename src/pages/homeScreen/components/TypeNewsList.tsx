import { useContext, useState, useEffect } from "react";
import { View, FlatList, RefreshControl } from "react-native";
import { HomePageContext } from "../utils/context";
import Animated, { useAnimatedRef, useAnimatedScrollHandler } from "react-native-reanimated";
import { getNavigationConsts } from "@/utils/loadAppTools";
import EmptyComponent from "@/components/EmptyComponent";
import News from "@/components/News";
import LoadMore from "@/components/LoadMore";
import newsDataMock from '@/mock/newsData';

const initTopbarHeight = getNavigationConsts().statusBarHeight + 170;

function TypeNewsList() {
    const { scrollY } = useContext(HomePageContext);
    const flatListRef = useAnimatedRef<FlatList<NewsItem>>();
    // 滑动事件
    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    });
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [newsData, setNewsData] = useState<NewsItem[]>([]);
    // const [newsData, setNewsData] = useState([]);
    // 接口查询list数据源
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
    const tt = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
        }, 1500);
    };
    const loadMoreData = () => {
        if (isLoadingMore) return;
        getNewsData();
    };
    useEffect(() => {
        console.log('9898有用--home组件刷新了');
        getNewsData();
    }, []);
    return (
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
            ListEmptyComponent={<EmptyComponent />}
            renderItem={({ item }) => <News news={item} />}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            ListFooterComponent={<LoadMore isLoadingMore={isLoadingMore} />}
            refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={tt} progressViewOffset={initTopbarHeight}></RefreshControl>}
            onEndReached={loadMoreData}
            onEndReachedThreshold={0.3}
        />
    );
}

export default TypeNewsList;