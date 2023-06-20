import { Avatar } from "react-native-ui-lib";
import { getFontSize, getViewSize } from '@/utils/sizeTool';
import Animated, { FadeInRight, FadeOutRight } from "react-native-reanimated";
import { StyleSheet } from "react-native";

type SignUpTabProps = {
    changeLoginTab: (tabName: string) => void
}

const SignUpWidget: React.FC<SignUpTabProps> = ({ changeLoginTab }) => {
    console.log('9898注册页')
    return (
        <Animated.View entering={FadeInRight.duration(500)} exiting={FadeOutRight.duration(500)} style={styles.container}>
            <Avatar source={{uri: 'https://lh3.googleusercontent.com/-cw77lUnOvmI/AAAAAAAAAAI/AAAAAAAAAAA/WMNck32dKbc/s181-c/104220521160525129167.jpg'}} />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink'
    }
})
export default SignUpWidget