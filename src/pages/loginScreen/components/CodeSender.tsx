import React from "react"
import { Text, Colors, View } from "react-native-ui-lib"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { getFontSize, getViewSize } from '@/utils/sizeTool'
import { StyleSheet, ActivityIndicator, TouchableWithoutFeedback } from "react-native"
import { useEffect, useRef, useState } from "react"
import { Toast } from "@/store"

const CodeSender: React.FC = () => {
    const [status, setStatus] = useState(true)
    const [second, setSecond] = useState(30)
    const secondRef = useRef(30)
    const timerRef = useRef<any>(null)
    const reGetCode = () => {
        if (!status) {
            Toast.show({ text: '操作过于频繁' })
        }
    }
    const sendCode = () => {
        setStatus(false)
        interval(() => {
            setSecond(second => second - 1)
        }, 1000)
    }
    const interval = (fn: () => void, time: number) => {
        if (secondRef.current === 0) {
            setStatus(true)
            setSecond(30)
            clearTimeout(timerRef.current)
            return
        }
        timerRef.current = setTimeout(() => {
            fn();
            interval(fn, time);
        }, time);
    };

    useEffect(() => {
        secondRef.current = second
    })
    return (
        status ?
            <TouchableWithoutFeedback onPress={sendCode}>
                <View style={styles.container}>
                    <Text style={styles.strText}>获取验证码</Text>
                    <Icon name="paper-plane" size={getViewSize(18)} />
                </View>
            </TouchableWithoutFeedback> :
            <TouchableWithoutFeedback onPress={reGetCode}>
                <View style={styles.container}>
                    <Text style={[styles.strText, styles.disabledColor]}>重新获取({second}秒)</Text>
                    <ActivityIndicator />
                </View>
            </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    strText: {
        fontSize: getFontSize(18),
        marginRight: getViewSize(6)
    },
    disabledColor: {
        color: Colors.$textDisabled
    }
})
export default CodeSender