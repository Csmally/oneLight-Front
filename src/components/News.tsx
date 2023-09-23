import { commonStyles } from "@/common/styles";
import { getViewSize } from "@/utils/sizeTool";
import { StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function News({ news }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{news.title}</Text>
            <View style={styles.imgContainer}>
                {
                    news.img.map((item, index) => (
                        <View key={index} style={styles.singleImg}>
                            <FastImage source={item} style={[styles.img, { transform: [{ rotateZ: `${Math.random()*100}deg` }] }]} />
                        </View>
                    ))
                }
            </View>
            <View style={styles.bottomBar}>
                <Icon name="message-processing-outline" size={25} />
                <Text style={styles.text}>说点什么吧～</Text>
                <Icon name="cards-heart" size={25} />
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
    bottomBar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    text: {
        flex: 1,
        color: '#cecece',
        marginLeft: 10
    },
    imgContainer: {
        height: 350,
        // backgroundColor: 'pink'
    },
    singleImg: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        padding: 40
    },
    img: {
        flex: 1,
        borderRadius: 10
    }
});
export default News;