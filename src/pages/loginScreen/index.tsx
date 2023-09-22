import { Text, View, Assets, Button, TextField, Colors } from "react-native-ui-lib";
import { getFontSize, getViewSize } from '@/utils/sizeTool';
import { StyleSheet } from "react-native";
import { useState } from "react";
import Animated, { FadeIn, FadeOut, Layout } from "react-native-reanimated";
import CodeSender from "./components/CodeSender";
import Storage from "@/storage";
import { setAppRouter } from "@/utils/setRouterTools";
import { CONSTS_VALUE } from "@/interfaces/commonEnum";
import FastImage from "react-native-fast-image";

type LoginScreenProps = {
    componentId: string
}
function LoginScreen() {
    const [isShowPassCode, setIShowPassCode] = useState(false);
    const [account, setAccount] = useState('');
    const [passCode, setPassCode] = useState('');
    const loginHandle = () => {
        console.log('9898登录啦');
        Storage.set(CONSTS_VALUE.LOGIN_STATUS, true);
        setAppRouter();
    };
    const validateMobileNum = (val: string) => {
        const reg = /^1[3,4,5,6,7,8,9][0-9]{9}$/;
        const isMobileNum = reg.test(val);
        if (isShowPassCode !== isMobileNum) {
            setIShowPassCode(isMobileNum);
        }
        return reg.test(val);
    };
    return (
        <Animated.View
            style={styles.container}
            entering={FadeIn.duration(1000)}
            exiting={FadeOut.duration(1000)}>
            <View flex bg-screenBG padding-20>
                <FastImage
                    style={[styles.viewMargin, styles.logo]}
                    source={Assets.icons.logo} />
                <Text center style={[styles.title, styles.viewMargin]}>
                    嗨
                    <Text style={styles.appName}>,  oneLight</Text>
                </Text>
                <TextField
                    value={account}
                    style={styles.textInput}
                    containerStyle={[styles.textContainer, styles.viewMargin]}
                    floatingPlaceholderStyle={styles.placeholder}
                    maxLength={11}
                    keyboardType='phone-pad'
                    placeholder={'输入手机号（新号码自动注册）'}
                    floatingPlaceholder
                    validate={validateMobileNum}
                    validateOnChange
                    onChangeText={setAccount} />
                {
                    isShowPassCode ?
                        <Animated.View entering={FadeIn.duration(500)} exiting={FadeOut.duration(500)}>
                            <TextField
                                value={passCode}
                                style={styles.textInput}
                                containerStyle={[styles.textContainer, styles.viewMargin]}
                                floatingPlaceholderStyle={styles.placeholder}
                                placeholder={'密码'}
                                floatingPlaceholder
                                onChangeText={setPassCode}
                                trailingAccessory={<CodeSender />} />
                        </Animated.View> :
                        null
                }
                <Animated.View layout={Layout.duration(500)}>
                    <Text center color='#a8a8a8' style={styles.viewMargin}>或</Text>
                    <View style={[styles.loginMethods, styles.viewMargin]}>
                        <FastImage
                            style={styles.loginMethod}
                            source={Assets.icons.wechat} />
                        <FastImage
                            style={styles.loginMethod}
                            source={Assets.icons.alipay} />
                    </View>
                    <View style={styles.btnContainer}>
                        <Button
                            style={styles.loginBtn}
                            label='登录'
                            labelStyle={{ fontWeight: '700' }}
                            enableShadow
                            size={Button.sizes.large}
                            onPress={loginHandle}
                            backgroundColor='black' />
                    </View>
                </Animated.View>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewMargin: {
        marginBottom: getViewSize(30)
    },
    title: {
        fontSize: getFontSize(38),
        fontWeight: '500'
    },
    appName: {
        fontSize: getFontSize(25),
        fontWeight: '400'
    },
    textContainer: {
        paddingBottom: getViewSize(6),
        borderBottomWidth: getViewSize(1),
        borderBottomColor: Colors.$outlineDisabled
    },
    textInput: {
        fontSize: getFontSize(18)
    },
    placeholder: {
        fontSize: getFontSize(18),
    },
    loginMethods: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    loginMethod: {
        marginHorizontal: getViewSize(25),
        width: getViewSize(30),
        height: getViewSize(30)
    },
    btnContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    loginBtn: {
        width: getViewSize(200)
    },
    logo: {
        width: getViewSize(65),
        height: getViewSize(65)
    }
});

export default LoginScreen;