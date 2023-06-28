import { getViewSize } from "@/utils/sizeTool"
import { StyleSheet } from "react-native"
import { View, Text } from "react-native-ui-lib"

const Toast: React.FC = () => {
    return (
        // <View flex center>
        // </View>
        <View style={styles.container}>
            <Text color={'#FFFFFF'} center>我是toast我是toast我是toast我是toast我是toast</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        maxWidth: getViewSize(150),
        backgroundColor: 'red',
        padding: getViewSize(10),
        borderRadius: getViewSize(8),
        top: '46%',
        alignSelf: 'center',
        
    }
})

export default Toast
