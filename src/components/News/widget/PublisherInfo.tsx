import { commonStyles } from "@/common/styles";
import { View, Text, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";

type NewsProps = {
    news: NewsItem
}

function PublisherInfo({ news }: NewsProps) {
    return (
        <View style={styles.container}>
            <FastImage source={{ uri: news.avatar }} style={styles.avatar} />
            <Text style={styles.publisherName}>{news.publisherName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    publisherName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
        color: commonStyles.black_333
    },
});

export default PublisherInfo;