import { useEffect, useState } from 'react';
import { Platform, RefreshControl, StyleSheet, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { View } from 'react-native-ui-lib';
import Storage from '@/storage';
import { CONSTS_VALUE } from '@/interfaces/commonEnum';
import { getNavigationConsts } from '@/utils/loadAppTools';
import { BlurView } from '@react-native-community/blur';
import AnimatedHeader from './components/AnimatedHeader';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import useHeaterAnimatedStyles from './useHeaterAnimatedStyles';

const DATA: NewsItem[] = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',
        title: '1 Item',
        color: 'green'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',
        title: '2 Item',
        color: 'red'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: '3 Item',
        color: 'white'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b4',
        title: '4 Item',
        color: 'black'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
        title: '5 Item',
        color: 'blue'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d76',
        title: '6 Item',
        color: 'pink'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7',
        title: '7 Item',
        color: 'yellow'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68',
        title: '8 Item',
        color: 'green'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d79',
        title: '9 Item',
        color: 'red'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d7a',
        title: '10 Item',
        color: 'blue'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d7b',
        title: '11 Item',
        color: 'green'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d7c',
        title: '12 Item',
        color: 'pink'
    },
    {
        id: '1',
        title: '12 Item',
        color: 'green'
    },
    {
        id: '2',
        title: '12 Item',
        color: 'blue'
    },
    {
        id: '3',
        title: '1241 Item',
        color: 'yellow'
    },
    {
        id: '4',
        title: '122 Item',
        color: 'pink'
    },
    {
        id: '5',
        title: '123 Item',
        color: 'green'
    },
];

const TestItem = ({ item }: { item: any }) => {
    return (
        <View style={{ height: 60, backgroundColor: item.color }}>
            <Text style={{ flex: 1 }}>{item.title}</Text>
        </View>
    );
};

const HomeScreen: React.FC = () => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const tt = () => {
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
        }, 3000);
    };
    useEffect(() => {
        // Storage.set(CONSTS_VALUE.LOGIN_STATUS,false);
        SplashScreen.hide();
    }, []);
    // 滑动距离
    const scrollY = useSharedValue(0);
    // 滑动事件
    const scrollHandler = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y;
    });
    const initTopbarHeight = getNavigationConsts().statusBarHeight + 190;
    const {
        containerAnimatedStyle,
        infoBarAnimatedStyle,
        avatorAnimatedStyle,
        communityNameAnimatedStyle,
        hotAreaAnimatedStyle,
        searchBarSpaceAnimatedStyle,
        categoryBarShadowAnimatedStyle,
        gpaAnimatedStyle,
        categoryColorAnimatedStyle,
        categoryTextSColorSAnimatedStyle,
        categoryTextNColorSAnimatedStyle,
    } = useHeaterAnimatedStyles(scrollY, initTopbarHeight);
    return (
        <View style={Platform.OS === 'ios' ? styles.pageForIos : styles.pageForAndroid} >
            <Animated.FlatList
                contentInsetAdjustmentBehavior='never'
                contentContainerStyle={{
                    paddingBottom: getNavigationConsts().bottomTabsHeight
                }}
                onScroll={scrollHandler}
                data={DATA}
                renderItem={({ item }) => <TestItem item={item} />}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View height={5}></View>}
                ListFooterComponent={() => <Text>到底部了</Text>}
                ListFooterComponentStyle={{ backgroundColor: 'pink' }}
                ListHeaderComponent={
                    () => (
                        <AnimatedHeader
                            scrollY={scrollY}
                            containerAnimatedStyle={containerAnimatedStyle}
                            infoBarAnimatedStyle={infoBarAnimatedStyle}
                            avatorAnimatedStyle={avatorAnimatedStyle}
                            communityNameAnimatedStyle={communityNameAnimatedStyle}
                            hotAreaAnimatedStyle={hotAreaAnimatedStyle}
                            searchBarSpaceAnimatedStyle={searchBarSpaceAnimatedStyle}
                            categoryBarShadowAnimatedStyle={categoryBarShadowAnimatedStyle}
                            gpaAnimatedStyle={gpaAnimatedStyle}
                            categoryColorAnimatedStyle={categoryColorAnimatedStyle}
                            categoryTextSColorSAnimatedStyle={categoryTextSColorSAnimatedStyle}
                            categoryTextNColorSAnimatedStyle={categoryTextNColorSAnimatedStyle}
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
};

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
