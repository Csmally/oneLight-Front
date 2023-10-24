import { commonStyles, getCommonShadowStyle } from '@/common/styles';
import { memo } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Navigation } from "react-native-navigation";

function SloganTab() {
    const joinUs = () => {
        console.log('加入我们！！！');
    };
    const loginHandler = () => {
        Navigation.showModal({
            stack: {
                children: [{
                    component: {
                        name: 'LoginScreen',
                        options: {
                            topBar: {
                                background: {
                                    translucent: false,
                                },
                                drawBehind: false
                            }
                        }
                    }
                }]
            }
        });
    };
    return (
        <View style={styles.container}>
            <View>
                <Text style={[styles.fontStyle, styles.title]}>Welcome Use OneLight</Text>
                <Text style={[styles.fontStyle, styles.title]}>这是一个专属年轻人的App</Text>
            </View>
            <View>
                <Text style={[styles.fontStyle, styles.content]}>在这里，你可以</Text>
                <Text style={[styles.fontStyle, styles.content]}>分享美食，社交，数码，时尚</Text>
                <Text style={[styles.fontStyle, styles.content]}>
                    或者
                    <Text style={[styles.fontStyle, styles.content, styles.joinUs]} onPress={joinUs}>加入我们</Text>
                    的团队
                </Text>
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={loginHandler}>
                <Text style={styles.loginText}>注册/登录</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 30,
    },
    fontStyle: {
        textAlign: 'center',
        marginVertical: 4
    },
    title: {
        fontSize: 18,
        fontWeight: '600'
    },
    content: {
        fontSize: 15,
        color: '#999999'
    },
    joinUs: {
        color: '#4597f7'
    },
    loginBtn: {
        width: 150,
        height: 46,
        borderRadius: 25,
        backgroundColor: commonStyles.black,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...getCommonShadowStyle()
    },
    loginText: {
        color: commonStyles.white,
        fontSize: 16,
        fontWeight: 'bold'
    },
});

export default memo(SloganTab);