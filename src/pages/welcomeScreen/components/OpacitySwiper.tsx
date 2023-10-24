import { StyleSheet, View } from "react-native";
import AnimatedImage from "./AnimatedImage";

type OpacitySwiperProps = {
    activeIndex: number;
    imgUrls: string[]
}
function OpacitySwiper({ activeIndex, imgUrls }: OpacitySwiperProps) {
    return (
        <View style={styles.container}>
            {
                imgUrls.map((uri, index) => <AnimatedImage uri={uri} selfIndex={index} activeIndex={activeIndex} key={index} />)
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default OpacitySwiper;