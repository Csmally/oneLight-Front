import { useState } from "react";
import Animated, { AnimatedRef, SharedValue } from "react-native-reanimated";
import CategoryItem from "./CategoryItem";

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
    scrollY: SharedValue<number>,
    flatListRef: AnimatedRef<Animated.FlatList<NewsItem>>
}

function CategoryBar({ scrollY }: CategoryBarProps) {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
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
                        scrollY={scrollY}
                        setActiveTabIndex={setActiveTabIndex}
                        selfIndex={index}
                        activeTabIndex={activeTabIndex}
                    />
                ))
            }
        </Animated.ScrollView >
    );
}

export default CategoryBar;