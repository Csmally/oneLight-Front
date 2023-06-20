import { Image, Text, View, TextField, Button, Colors, Assets } from "react-native-ui-lib";
import { getFontSize, getViewSize } from '@/utils/sizeTool';
import Animated, { FadeInLeft, FadeOutLeft } from "react-native-reanimated";
import { StyleSheet } from "react-native";

type SignInTabProps = {
    changeLoginTab: (tabName: string) => void
}
const SignInWidget: React.FC<SignInTabProps> = ({ changeLoginTab }) => {
    console.log('9898登录页')
    const onChangeText = () => { }
    const loginHandle = () => {}
    return (
        <Animated.View entering={FadeInLeft.duration(500)} exiting={FadeOutLeft.duration(500)}>
            
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    viewMargin: {
        marginBottom: getViewSize(30)
    },
    textContainer: {
        paddingBottom: getViewSize(8),
        borderBottomWidth: getViewSize(1),
        borderBottomColor: '#a8a8a8'
    },
    textInput: {
        fontSize: getFontSize(20)
    },
    placeholder: {
        fontSize: getFontSize(20),
    },
    loginMethods: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    loginMethod: {
        marginHorizontal: getViewSize(25)
    },
    btnContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    loginBtn: {
        width: getViewSize(200)
    },
    orStyle: {
        marginVertical: getViewSize(15)
    }
})

export default SignInWidget