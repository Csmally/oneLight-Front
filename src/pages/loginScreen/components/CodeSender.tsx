import { Text, TouchableOpacity, Colors } from "react-native-ui-lib"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { getFontSize, getViewSize } from '@/utils/sizeTool'
import { StyleSheet } from "react-native"
import { useEffect, useRef, useState } from "react"

const CodeSender: React.FC = () => {
    const [status, setStatus] = useState(true)
    const [second, setSecond] = useState(30)
    const secondRef = useRef(30)
    const timerRef: any = useRef(null)
    const reGetCode = () => {
        if(!status){
            console.log('9898等一会，太频繁啦')
        }
    }
    const sendCode = () => {
        setStatus(false)
        interval(() => {
            setSecond(second => second - 1)
        }, 1000)
    }
    const interval = (fn: () => void, time: number) => {
        const timeout = () => {
            if (secondRef.current === 0) {
                setStatus(true)
                setSecond(30)
                clearTimeout(timerRef.current)
                return
            }
            timerRef.current = setTimeout(() => {
                fn();
                timeout();
            }, time);
        };
        timeout();
    };

    useEffect(() => {
        secondRef.current = second
    })
    return (
        status ?
            <TouchableOpacity style={styles.container} onPress={sendCode}>
                <Text style={styles.strText}>获取验证码</Text>
                <Icon name="paper-plane" size={getViewSize(15)} />
            </TouchableOpacity> :
            <TouchableOpacity style={styles.container} onPress={reGetCode}>
                <Text style={[styles.strText,styles.disabledColor]}>重新获取({second}秒)</Text>
                <Icon name="clock" size={getViewSize(15)} color={Colors.$textDisabled}/>
            </TouchableOpacity>
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