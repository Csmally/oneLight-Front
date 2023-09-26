import { formatTagValue } from "@/common/commonTools";
import { commonStyles, getCommonShadowStyle } from "@/common/styles";
import { Platform, StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";

type TagsProps = {
    tags: number[]
}

type TagProps = {
    tagValue: number
}

function Tag({ tagValue }: TagProps) {
    const { text, dotColor } = formatTagValue(tagValue);
    return (
        <View style={styles.tagContainer}>
            {/* <FastImage style={{ flex: 1 }} source={require('../static/tag.png')} /> */}
            <View style={[styles.dot, { backgroundColor: dotColor }]} />
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

function Tags({ tags }: TagsProps) {
    return (
        <View style={styles.tagsContainer}>
            {
                tags.map((item, index) => <Tag key={index} tagValue={item} />)
            }
        </View>
    );
}

const styles = StyleSheet.create({
    tagsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    tagContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: commonStyles.white,
        marginRight: 10,
        ...Platform.select({
            ios: {
                borderWidth: 1,
                borderColor: 'rgba(243,243,243,0.7)',
                // backgroundColor: 'rgba(241,241,241,0.8)'
            }
        }),
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        ...getCommonShadowStyle({ shadowWidth: 3 })
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: commonStyles.grey_placeholder,
        marginRight: 5
    },
    text: {
        color: '#6e6e6e',
        fontStyle: 'italic'
    }
});

export default Tags;