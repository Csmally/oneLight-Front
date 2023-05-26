import { Image, Text, View } from "react-native-ui-lib";
import { getFontSize, getViewSize } from '@/utils/sizeTool'
import { StyleSheet } from "react-native"

function LoginScreen() {
    return (
        <View flex bg-screenBG padding-20>
            <Image source={require('@/static/appLogo.png')} height={getViewSize(65)} width={getViewSize(65)}/>
            <View paddingV-30>
                <Text center style={styles.title}>
                    嗨
                    <Text style={styles.appName}>,  oneLight</Text>
                </Text>
            </View>
        </View>    
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: getFontSize(38),
        fontWeight: '500'
    },
    appName: {
        fontSize: getFontSize(25),
        fontWeight: '400'
    }
})
export default LoginScreen