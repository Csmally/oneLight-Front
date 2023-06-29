import { getViewSize } from "@/utils/sizeTool"
import { useEffect, useRef } from "react"
import { StyleSheet } from "react-native"
import { View, Text } from "react-native-ui-lib"
import { Navigation } from 'react-native-navigation'
import { Toast } from "@/store"

const ToastScreen: React.FC<ToastProps> = ({ text, textColor = "#FFFFFF", backgroundColor = "#000000", shadowColor = "#000000", duration = 5000, componentId = '' }) => {
    let timerRef = useRef<any>()
    useEffect(() => {
        Toast.setCurrentToastId(componentId)
        timerRef.current = setTimeout(() => {
            Navigation.dismissOverlay(componentId)
        }, duration);
        return () => {
            Toast.close()
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

export default ToastScreen
