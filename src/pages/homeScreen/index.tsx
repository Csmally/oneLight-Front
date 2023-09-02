import React, { useEffect, useState } from 'react';
import { FlatList, Platform, ScrollView, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Text, View } from 'react-native-ui-lib';
import Storage from '@/storage';
import { CONSTS_VALUE } from '@/interfaces/commonEnum';
import { getNavigationConsts } from '@/utils/loadAppTools';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1',
        title: '1 Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f62',
        title: '2 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: '3 Item',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b4',
        title: '4 Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
        title: '5 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d76',
        title: '6 Item',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7',
        title: '7 Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68',
        title: '8 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d79',
        title: '9 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d7a',
        title: '10 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d7b',
        title: '11 Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d7c',
        title: '12 Item',
    },
];

const TestItem = ({ item }: { item: any }) => {
    return (
        <View style={{ height: 80, backgroundColor: 'green' }}>
            <Text>{item.item.title}</Text>
        </View>
    )
}
const HomeScreen: React.FC = () => {
    const [isRefreshing,setIsRefreshing] = useState(false);
    const tt = () => {
        // Storage.set('LOGIN_STATUS', false);
        console.log('9898开始刷新了');
        setIsRefreshing(true);
        setTimeout(() => {
            setIsRefreshing(false);
            console.log('9898结束刷新了');
        }, 5000);
    }
    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 2500);
    }, []);
    return (
        <FlatList
            contentInsetAdjustmentBehavior='never'
            style={Platform.OS === 'ios' ? styles.pageForIos : styles.pageForAndroid}
            contentContainerStyle={{
                paddingBottom: Platform.OS === 'ios' ? getNavigationConsts().bottomTabsHeight : 0
            }}
            data={DATA}
            renderItem={(item) => <TestItem item={item} />}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={()=><View height={20}></View>}
            ListFooterComponent={()=><Text>到底部了</Text>}
            ListFooterComponentStyle={{backgroundColor:'pink'}}
            ListHeaderComponent={()=><Text>我是头部</Text>}
            ListHeaderComponentStyle={{backgroundColor: 'pink',paddingBottom: 50}}
            onRefresh={tt}
            refreshing={isRefreshing}
        />
    );
};

const styles = StyleSheet.create({
    pageForIos: {
        width: '100%',
        position: 'absolute',
        height: Storage.getNumber(CONSTS_VALUE.SCREEN_HEIGHT)
    },
    pageForAndroid: {
        flex: 1
    },
    aa: {
        height: 100,
        backgroundColor: 'pink'
    },
    bb: {
        height: 100,
        backgroundColor: 'red'
    }
});

export default HomeScreen;
