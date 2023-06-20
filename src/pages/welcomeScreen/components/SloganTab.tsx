import { getViewSize, getFontSize } from '@/utils/sizeTool';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Navigation } from "react-native-navigation";

const SloganTab: React.FC = () => {
    const joinUs = () => {
        console.log('加入我们！！！')
    }
    const loginHandler = () => {
        Navigation.showModal({
            stack: {
                children: [{
                    component: {
                        name: 'LoginScreen'
                    }
                }]
            }
        });
    }
    return (
        <View style={styles.container}>
            <View>
                <Text style={[styles.fontStyle, styles.title]}>Welcome Use OneLight</Text>
                <Text style={[styles.fontStyle, styles.title]}>这是一个专属年轻人的App</Text>
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
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: '13%',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: getViewSize(25)
    },
    fontStyle: {
        textAlign: 'center',
        marginVertical: getViewSize(4)
    },
    title: {
        fontSize: getFontSize(18),
        fontWeight: '600'
    },
    content: {
        fontSize: getFontSize(15),
        color: '#999999'
    },
    joinUs: {
        color: '#4597f7'
    },
    loginBtn: {
        width: getViewSize(150),
        height: getViewSize(46),
        borderRadius: getViewSize(23),
        backgroundColor: '#000000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 10
    },
    loginText: {
        color: '#ffffff',
        fontSize: getFontSize(16),
        fontWeight: 'bold'
    },
})

export default SloganTab