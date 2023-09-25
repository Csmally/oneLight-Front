import { commonStyles } from "@/common/styles";
import { getViewSize } from "@/utils/sizeTool";
import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type NewsProps = {
    news: NewsItem
}
function News({ news }: NewsProps) {
    console.log('9898item刷新', news.publisherName,news.id);
    return (
        <View style={styles.container}>
            <View style={styles.publisherInfo}>
                <FastImage source={{ uri: news.avatar }} style={styles.avatar} />
                <Text style={styles.publisherName}>{news.publisherName}</Text>
            </View>
            <View style={styles.mainArea}>
                <View style={styles.imgContainer}>
                    {
                        news.imgs.map((item, index) => <FastImage key={index} source={{ uri: item }} style={styles.img} />)
                    }
                </View>
                <Text style={styles.description}>{news.description}</Text>
            </View>
            <View style={styles.controllerBar}>
                <Text style={styles.publishTime}>{news.publishTime}</Text>
                <View style={styles.commentLike}>
                    <View style={styles.comment}>
                        <Icon name="comment-processing-outline" size={25} />
                        <Text>评论</Text>
                    </View>
                    <View style={styles.like}>
                        <Icon name="lightning-bolt" size={25} />
                        <Text>10</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: commonStyles.white,
        borderRadius: getViewSize(10),
        marginHorizontal: commonStyles.pageBorderGap,
        padding: commonStyles.pageBorderGap
    },
    publisherInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18
    },
    publisherName: {
        marginLeft: 10
    },
    mainArea: {
        marginVertical: 10
    },
    imgContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'space-between'
    },
    img: {
        width: '32%',
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
        marginRight: '1.3%'
    },
    description: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    controllerBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    publishTime: {
        color: '#7b7b7b'
    },
    commentLike: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    comment: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10
    },
    like: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default memo(News, (prevProps, nextProps) => {
    return prevProps.news.id === nextProps.news.id;
});
// export default News;