import { FunctionComponent, useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import AnimatedImage from "./AnimatedImage"

type OpacitySwiperProps = {
    onIndexChanged: (index: number) => void,
    imgUrls: string[]
}
const OpacitySwiper: FunctionComponent<OpacitySwiperProps> = ({ onIndexChanged, imgUrls }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(() => {
        let timer = setTimeout(() => {
            if (activeIndex === imgUrls.length - 1) {
                setActiveIndex(0)
                onIndexChanged(0)
            } else {
                setActiveIndex(activeIndex + 1)
                onIndexChanged(activeIndex + 1)
            }
        }, 5000);
        return () => {
            clearInterval(timer)
        }
    }, [activeIndex])
    return (
        <View style={styles.container}>
            {
                imgUrls.map((uri, index) => <AnimatedImage uri={uri} selfIndex={index} activeIndex={activeIndex} key={index} />)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default OpacitySwiper