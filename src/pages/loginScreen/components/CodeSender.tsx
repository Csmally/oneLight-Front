import { Text, View } from "react-native-ui-lib"
import Icon from 'react-native-vector-icons/FontAwesome5'
import { getFontSize, getViewSize } from '@/utils/sizeTool'
import { StyleSheet } from "react-native"

const CodeSender: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.strText}>获取验证码</Text>
            <Icon name="paper-plane" size={getViewSize(22)}/>
        </View>
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
    }
})
export default CodeSender