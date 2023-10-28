import { useContext, useState } from "react";
import { View, FlatList, RefreshControl, StyleSheet } from "react-native";
import { HomePageContext } from "../utils/context";
import Animated, { useAnimatedRef, useAnimatedScrollHandler } from "react-native-reanimated";
import { getNavigationConsts } from "@/utils/loadAppTools";
import EmptyComponent from "@/components/EmptyComponent";
import News from "@/components/News";
import LoadMore from "@/components/LoadMore";
import newsDataMock from '@/mock/newsData';
import HomeHeaderActivity from "./HomeHeaderActivity";

const apifunc = async () => {
    return new Promise((res) => {
        setTimeout(() => {
            const data: NewsItem[] = newsDataMock.map((item, index) => ({
                ...item,
                id: index + '-' + (new Date()).getTime()
            }));
            res(data);
        }, 800);
    });
};

function TypeNewsList() {
    const { scrollY, initTopbarHeight } = useContext(HomePageContext);
    const flatListRef = useAnimatedRef<FlatList<NewsItem>>();
    // 滑动事件
    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    });
    const [loadingStatus, setLoadingStatus] = useState({ isRefreshing: false, isLoadingMore: false });
    const [newsData, setNewsData] = useState<NewsItem[]>([]);
    // 接口查询list数据源
    const getNewsData = async (type = 'loadmore') => {
        if (loadingStatus.isLoadingMore || loadingStatus.isRefreshing) return;
        setLoadingStatus({
            isRefreshing: type === 'init' ? true : false,
            isLoadingMore: type === 'loadmore' ? true : false,
        });
        const apiData: NewsItem[] = await apifunc() as NewsItem[];
        setNewsData(type === 'loadmore' ? [...newsData, ...apiData] : apiData);
        setLoadingStatus({
            isRefreshing: false,
            isLoadingMore: false,
        });
    };
    const tt = () => {
        getNewsData('init');
    };
    const loadMoreData = () => {
        getNewsData('loadmore');
    };
    return (
        <Animated.FlatList
            ref={ref => flatListRef.current = ref}
            contentInsetAdjustmentBehavior='never'
            showsVerticalScrollIndicator={false}
            style={styles.page}
            contentContainerStyle={{
                // paddingTop: initTopbarHeight,
                paddingBottom: getNavigationConsts().bottomTabsHeight
            }}
            keyExtractor={item => item.id}
            removeClippedSubviews
            onScroll={scrollHandler}
            data={newsData}
            windowSize={8}
            ListEmptyComponent={<EmptyComponent isShow={!loadingStatus.isLoadingMore && !loadingStatus.isRefreshing} />}
            renderItem={({ item }) => <News news={item} />}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            ListHeaderComponent={<HomeHeaderActivity />}
            ListFooterComponent={<LoadMore isLoadingMore={loadingStatus.isLoadingMore} />}
            refreshControl={<RefreshControl refreshing={loadingStatus.isRefreshing} onRefresh={tt} progressViewOffset={initTopbarHeight}></RefreshControl>}
            onEndReached={loadMoreData}
            onEndReachedThreshold={0.8}
        />
    );
}

const styles = StyleSheet.create({
    page: {
        width: WINDOW_WIDTH
    }
});

export default TypeNewsList;