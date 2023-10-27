import { forwardRef, useContext, useImperativeHandle, useState } from "react";
import CategoryItem from "./CategoryItem";
import { HomePageContext } from "../utils/context";
import { ScrollView } from "react-native";

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

const CategoryBar = forwardRef((props, ref) => {
    console.log('9898分类bar刷新');
    const { newsListContainerRef } = useContext(HomePageContext);
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const changeActiveTab = (index: number) => {
        if (index === activeTabIndex) return;
        setActiveTabIndex(index);
        newsListContainerRef?.current?.scrollToIndex?.({ index });
    };
    useImperativeHandle(ref, () => ({ changeActiveTab }));
    return (
        <ScrollView
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
        </ScrollView >
    );
});

CategoryBar.displayName = 'CategoryBar';

export default CategoryBar;