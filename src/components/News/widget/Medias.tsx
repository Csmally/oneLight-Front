import { StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";

type MediasProps = {
    medias: string[]
}

function Medias({ medias }: MediasProps) {
    return (
        <View style={styles.container}>
            {
                medias.map((item, index) => <FastImage key={index} source={{ uri: item }} style={styles.img} />)
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    img: {
        width: '32%',
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
        marginRight: '1.3%'
    },
});

export default Medias;