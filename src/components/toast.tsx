import { getViewSize } from "@/utils/sizeTool"
import { useEffect, useRef } from "react"
import { StyleSheet } from "react-native"
import { View, Text } from "react-native-ui-lib"
import { Navigation } from 'react-native-navigation'

const Toast: React.FC<ToastProps> = ({ text, textColor = "#FFFFFF", backgroundColor = "#000000", shadowColor = "#000000", duration = 2000, componentId = '' }) => {
    let timerRef = useRef<any>()
    useEffect(() => {
        timerRef.current = setTimeout(() => {
            Navigation.dismissOverlay(componentId)
        }, duration);
        console.log('9898清除之前',timerRef.current)
        return () => {
            console.log('9898清除之后',timerRef.current)
            clearTimeout(timerRef.current)
        }
    }, [])
    return (
        <View style={styles.container}>
            <View style={[styles.content, { backgroundColor, shadowColor }]}>
                <Text color={textColor} center>{text}</Text>
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
    },
    content: {
        maxWidth: getViewSize(150),
        padding: getViewSize(10),
        borderRadius: getViewSize(8),
        elevation: 5, // 设置阴影的程度-安卓
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.6,
        shadowRadius: 3,
    }
})

export default Toast
