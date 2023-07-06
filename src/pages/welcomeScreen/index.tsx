import { StyleSheet, View } from 'react-native';
import { BlurView } from "@react-native-community/blur";
import PageCounter from './components/PageCounter';
import { useMemo, useState, useEffect } from 'react';
import OpacitySwiper from './components/OpacitySwiper';
import SloganTab from './components/SloganTab';
import SplashScreen from 'react-native-splash-screen'

const imgUrls = [
    'https://tuchuangs.com/imgs/2023/04/23/945f7dee14fb39f4.jpeg',
    'https://tuchuangs.com/imgs/2023/04/23/d12921d23883b1d7.jpeg',
    'https://tuchuangs.com/imgs/2023/04/23/1bc98cb602be8e78.jpeg'
]
const WelcomeScreen: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 2500);
    }, [])

    const onIndexChanged = (index: number) => {
        setActiveIndex(index)
    }
    return (
        <View style={styles.page}>
            {
                useMemo(() => <OpacitySwiper onIndexChanged={onIndexChanged} imgUrls={imgUrls} />, [])
            }
            <View style={styles.container}>
                <BlurView
                    style={styles.blurView}
                    blurType="xlight"
                    blurAmount={15}
                    reducedTransparencyFallbackColor="white"
                />
                <PageCounter total={imgUrls.length} activeIndex={activeIndex} />
                <SloganTab />
            </View >
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    swiperImg: {
        flex: 1
    },
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: '60%',
        overflow: 'hidden'
    },
    blurView: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
    }
})
export default WelcomeScreen;