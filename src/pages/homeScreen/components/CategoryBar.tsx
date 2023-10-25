import { useState } from "react";
import Animated, { AnimatedRef } from "react-native-reanimated";
import CategoryItem from "./CategoryItem";
import { FlatList } from "react-native";

const tabs = [
    {
        title: '全部',
        img: require('../static/all.png')
    },
    {
        title: '美食',
        img: require('../static/food.png')
    },
    {
        title: '快递',
        img: require('../static/express.png')
    },
    {
        title: 'Replace',
        img: require('../static/class.png')
    },
    {
        title: '兼职',
        img: require('../static/job.png')
    },
];

type CategoryBarProps = {
    flatListRef: AnimatedRef<FlatList<NewsItem>>
}

function CategoryBar({ flatListRef }: CategoryBarProps) {
    console.log('9898分类bar刷新');
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const changeActiveTab = (index: number) => {
        if (index === activeTabIndex) return;
        setActiveTabIndex(index);
        flatListRef.current?.scrollToOffset({ offset: 90, animated: true });
    };
    return (
        <Animated.ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ zIndex: 2 }}
        >
            {
                tabs.map((item, index) => (
                    <CategoryItem
                        key={index}
                        categoryInfo={item}
                        changeActiveTab={changeActiveTab}
                        selfIndex={index}
                        activeTabIndex={activeTabIndex}
                    />
                ))
            }
        </Animated.ScrollView >
    );
}

export default CategoryBar;