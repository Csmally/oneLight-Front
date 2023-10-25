import { TabController } from "react-native-ui-lib";
import TypeNewsList from "./TypeNewsList";

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
function NewsList() {
    return (
        <TabController items={tabs} asCarousel>
            <TabController.PageCarousel>
                {
                    tabs.map((tab, index) => (
                        <TabController.TabPage index={index} key={index} lazy>
                            <TypeNewsList />
                        </TabController.TabPage>
                    ))
                }
            </TabController.PageCarousel>
        </TabController>
    );
}

export default NewsList;