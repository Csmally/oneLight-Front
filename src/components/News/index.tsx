import { commonStyles } from "@/common/styles";
import { StyleSheet, Text, View } from "react-native";
import Comment from "./widget/Comment";
import Like from "./widget/Like";
import PublisherInfo from "./widget/PublisherInfo";
import Medias from "./widget/Medias";
import Tags from "./widget/Tags";

type NewsProps = {
    news: NewsItem
}

function News({ news }: NewsProps) {
    console.log('9898item刷新', news.publisherName, news.id);
    return (
        <View style={styles.container}>
            <PublisherInfo news={news} />
            <View style={styles.mainArea}>
                {!!news.imgs && news.imgs.length > 0 && <Medias medias={news.imgs} />}
                <Text style={styles.description} numberOfLines={2}>{news.description}</Text>
                {news.tags && news.tags.length > 0 && <Tags tags={news.tags} />}
            </View>
            <View style={styles.controllerBar}>
                <Text style={styles.publishTime}>{news.publishTime}</Text>
                <View style={styles.commentLike}>
                    <Comment />
                    <Like />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: commonStyles.white,
        borderRadius: 10,
        marginHorizontal: commonStyles.pageBorderGap,
        padding: commonStyles.pageBorderGap
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18
    },
    mainArea: {
        marginTop: 10
    },
    description: {
        color: commonStyles.black_333,
        marginBottom: 10
    },
    controllerBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    publishTime: {
        color: commonStyles.grey_placeholder
    },
    commentLike: {
        flexDirection: 'row',
        alignItems: 'center'
    },
});

export default News;