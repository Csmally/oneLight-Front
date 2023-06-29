import { getViewSize } from "@/utils/sizeTool"
import { useEffect, useRef } from "react"
import { StyleSheet } from "react-native"
import { View, Text } from "react-native-ui-lib"
import { Navigation } from 'react-native-navigation'

const Toast: React.FC = () => {
    let timerRef = useRef<any>()
    useEffect(() => {
        timerRef.current = setTimeout(() => {
            Navigation.dismissAllOverlays()
        }, 2500);
        return () => {
            clearTimeout(timerRef.current)
        }
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text color={'#FFFFFF'} center>我是toast我是toast我是toast我是toast我是toast</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        pointerEvents: 'none',

        elevation: 5, // 设置阴影的程度-安卓
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    content: {
        maxWidth: getViewSize(150),
        backgroundColor: '#000000',
        padding: getViewSize(10),
        borderRadius: getViewSize(8),
    }
})

export default Toast
