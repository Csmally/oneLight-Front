import { Image, Text, View, TextField, Button, Colors, Assets } from "react-native-ui-lib";
import { getFontSize, getViewSize } from '@/utils/sizeTool'
import { StyleSheet } from "react-native"
import { Navigation } from "react-native-navigation";
import { FunctionComponent } from "react";

const LoginScreen: FunctionComponent = (props) => {
    const onChangeText = () => { }
    const loginHandle = () => {
        console.log('9898登录')
    }
    const createCount = () => {
        console.log('9898创建账号')
        Navigation.push(props.componentId, {
            component: {
                name: 'SignUpScreen',
                options: {
                    topBar: {
                        rightButtons: [
                            {
                                id: 'closeModal',
                                text: '取消'
                            }
                        ]

                    }
                }
            }
        }
        )
    }
    return (
        <View flex bg-screenBG padding-20>
            <Image
                style={styles.viewMargin}
                source={Assets.icons.logo}
                height={getViewSize(65)}
                width={getViewSize(65)} />
            <Text center style={[styles.title, styles.viewMargin]}>
                嗨
                <Text style={styles.appName}>,  oneLight</Text>
            </Text>
            <TextField
                style={styles.textInput}
                containerStyle={[styles.textContainer, styles.viewMargin]}
                floatingPlaceholderStyle={styles.placeholder}
                keyboardType='phone-pad'
                placeholder={'账号/手机号'}
                floatingPlaceholder
                onChangeText={onChangeText}
                label="测试"
            />
            <TextField
                style={styles.textInput}
                containerStyle={[styles.textContainer]}
                secureTextEntry
                floatingPlaceholderStyle={styles.placeholder}
                placeholder={'密码'}
                floatingPlaceholder />
            <Text center color='#a8a8a8' style={styles.orStyle}>或</Text>
            <View style={[styles.loginMethods, styles.viewMargin]}>
                <Image
                    style={styles.loginMethod}
                    source={Assets.icons.wechat}
                    height={getViewSize(30)}
                    width={getViewSize(30)} />
                <Image
                    style={styles.loginMethod}
                    source={Assets.icons.alipay}
                    height={getViewSize(30)}
                    width={getViewSize(30)} />
            </View>
            <View style={[styles.btnContainer, styles.viewMargin]}>
                <Button
                    style={styles.loginBtn}
                    label='登录'
                    labelStyle={{ fontWeight: '700' }}
                    enableShadow
                    size={Button.sizes.large}
                    onPress={loginHandle}
                    backgroundColor='black' />
            </View>
            <Text center>
                没有账号？
                <Text color={Colors.textLinkColor} onPress={createCount}>
                    创建一个
                </Text>
            </Text>
        </View>
        // <TabController items={[{ label: 'First' }, { label: 'Second' }, { label: 'Third' }]}>
        //     <TabController.TabBar enableShadows />
        //     <View flex>
        //         <TabController.TabPage index={0}>
        //             <Text>我是第一页</Text>
        //         </TabController.TabPage>
        //         <TabController.TabPage index={1} lazy>
        //             <Text>我是第二页</Text>
        //         </TabController.TabPage>
        //         <TabController.TabPage index={2} lazy>
        //             <Text>我是第三页</Text>
        //         </TabController.TabPage>
        //     </View>
        // </TabController>
    )
}

const styles = StyleSheet.create({
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
        paddingBottom: getViewSize(10),
        borderBottomWidth: 1,
        borderBottomColor: '#a8a8a8'
    },
    textInput: {
        fontSize: getFontSize(22)
    },
    placeholder: {
        fontSize: getFontSize(22),
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
        width: getViewSize(200),
    },
    orStyle: {
        marginVertical: getViewSize(15)
    }
})
export default LoginScreen