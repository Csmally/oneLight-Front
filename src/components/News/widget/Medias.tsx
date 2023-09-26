import { commonStyles } from "@/common/styles";
import { BlurView } from "@react-native-community/blur";
import { StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import Icon from "react-native-vector-icons/FontAwesome5";

type MediasProps = {
    medias: string[]
}

// 一张图频或视频
function SingleMedia({ medias }: MediasProps) {
    const media = medias[0];
    return (
        <View style={styles.singleContainer}>
            <BlurView style={styles.blur} blurType='xlight' blurAmount={50} />
            <FastImage source={{ uri: media }} style={[styles.img, styles.singleImg]} />
        </View>
    );
}

// 两张图频或视频
function DoubleMedia({ medias }: MediasProps) {
    return (
        medias.map((item, index) => (
            <View style={styles.doubleContainer} key={index}>
                <BlurView style={styles.blur} blurType='xlight' blurAmount={50} />
                <FastImage source={{ uri: item }} style={[styles.img, styles.doubleImg]} />
            </View>
        ))
    );
}

// 多张图频或视频
function ThreeMedia({ medias }: MediasProps) {
    return (
        medias.map((item, index) => (
            index < 3 &&
            <View style={styles.threeContainer} key={index}>
                <FastImage source={{ uri: item }} style={[styles.img, styles.threeleImg]} />
                {
                    index === 2 &&
                    <View style={styles.imgCount}>
                        <Icon name="image" size={15} color={commonStyles.white} />
                        <Text style={styles.imgCountText}>{medias.length}</Text>
                    </View>
                }
            </View>
        ))
    );
}

// 媒体展示容器（图片&视频）
function Medias({ medias }: MediasProps) {
    return (
        <View style={[styles.container, medias.length > 1 && styles.moreContainer]}>
            {/* {
                medias.map((item, index) => <FastImage key={index} source={{ uri: item }} style={styles.img} />)
            } */}
            {
                medias.length === 1 && <SingleMedia medias={medias} />
            }
            {
                medias.length === 2 && <DoubleMedia medias={medias} />
            }
            {
                medias.length > 2 && <ThreeMedia medias={medias} />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // backgroundColor: 'violet'
    },
    moreContainer: {
        justifyContent: 'space-between'
    },
    blur: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    singleContainer: {
        width: '50%',
        aspectRatio: 1,
        marginBottom: 10,
        overflow: 'hidden',
        borderRadius: 20,
        padding: 10,
    },
    doubleContainer: {
        width: '49%',
        aspectRatio: 1,
        marginBottom: 10,
        overflow: 'hidden',
        borderRadius: 10,
        padding: 10,
    },
    threeContainer: {
        width: '32.5%',
        aspectRatio: 1,
        marginBottom: 10,
        overflow: 'hidden',
        borderRadius: 5,
    },
    img: {
        flex: 1
    },
    singleImg: {
        borderRadius: 15
    },
    doubleImg: {
        borderRadius: 10
    },
    threeleImg: {
        borderRadius: 5
    },
    imgCount: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 5,
        right: 5,
        padding: 3,
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 5
    },
    imgCountText: {
        color: commonStyles.white,
        marginLeft: 5
    }
});

export default Medias;