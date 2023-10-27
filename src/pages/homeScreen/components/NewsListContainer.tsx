import TypeNewsList from "./TypeNewsList";
import { FlatList } from "react-native";
import { useContext } from "react";
import { HomePageContext } from "../utils/context";

const tabs = [
    {
        label: '全部',
    },
    {
        label: '美食',
    },
    {
        label: '快递',
    },
    {
        label: 'Replace',
    },
    {
        label: '兼职',
    },
];
function NewsListContainer() {
    const { newsListContainerRef } = useContext(HomePageContext);
    return (
        <FlatList
            ref={ref => { newsListContainerRef.current = ref; }}
            data={tabs}
            renderItem={() => <TypeNewsList />}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            removeClippedSubviews={true}
        />
    );
}

export default NewsListContainer;