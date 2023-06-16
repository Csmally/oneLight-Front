import screensMap from '@/pages/screensMap'
import { Navigation } from 'react-native-navigation'
import { Colors, Typography, Spacings, Assets } from 'react-native-ui-lib';


type RootStack = {
    root: {
        stack: {
            children: Rout[]
        }
    }
}
type Rout = {
    component: {
        name: string,
        options?: any
    }
}

//设置导航默认样式
export const setDefaultNavigationStyle = () => {
    Navigation.setDefaultOptions({
        topBar: {
            background: {
                color: {
                    light: '#F7F8F9',
                    dark: Colors.grey10
                },
            },
            visible: true,
            animate: true,
            animateLeftButtons: true,
            animateRightButtons: true,
            backButton: { popStackOnPress: true },
            noBorder: true,
            scrollEdgeAppearance: {
                active: false,
                noBorder: true
            },
            title: {
                text: 'oneLight'  //默认title
            },
        }
    });
}

//加载app系统默认主题、默认样式、根样式等
export const loadSysStyle = () => {
    Colors.loadSchemes({
        light: {
            screenBG: '#F7F8F9',
            textLinkColor: '#4597f7',
            textColor: Colors.grey10,
            moonOrSun: Colors.yellow30,
            mountainForeground: Colors.green30,
            mountainBackground: Colors.green50,
            $backgroundSuccess: Colors.green40,
        },
        dark: {
            screenBG: Colors.grey10,
            textLinkColor: '#4597f7',
            textColor: Colors.white,
            moonOrSun: Colors.grey80,
            mountainForeground: Colors.violet10,
            mountainBackground: Colors.violet20,
            $backgroundSuccess: Colors.green40,
        }
    });

    Typography.loadTypographies({
        heading: { fontSize: 36, fontWeight: '600' },
        subheading: { fontSize: 28, fontWeight: '500' },
        body: { fontSize: 18, fontWeight: '400' }
    });

    Spacings.loadSpacings({
        page: 20,
        card: 12,
        gridGutter: 16
    });

    Assets.loadAssetsGroup('icons', {
        logo: require('@/static/appLogo.png'),
        alipay: require('@/static/alipay.png'),
        wechat: require('@/static/wechat.png'),
    })
}

//监听导航Navigation事件
export const navigationEventListen = () => {
    //监听按钮事件
    Navigation.events().registerNavigationButtonPressedListener(({ buttonId, componentId }) => {
        if (buttonId === 'closeModal') {
            Navigation.dismissModal(componentId);
        }
    });
    //监听命令事件
    Navigation.events().registerCommandListener((name, params) => {
        console.log('9898name', name)
        console.log('9898params', params)
    });
}

//注册屏幕组件
export const screensRegister = () => {
    screensMap.forEach(screenInfo => {
        Navigation.registerComponent(screenInfo.path, () => screenInfo.component);
    })
}

//设置app路由
export const setAppRouter = () => {
    let isLogin = false
    let router: RootStack = { root: { stack: { children: [] } } }
    if (isLogin) {

    } else {
        screensMap.forEach(screenInfo => {
            router.root.stack.children.push({
                component: {
                    name: screenInfo.path,
                    options: screenInfo.options ? screenInfo.options : null
                }
            })
        })
    }
    Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setRoot(router)
    });
}