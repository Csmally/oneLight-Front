import { Navigation } from 'react-native-navigation';
import { Colors, Typography, Spacings, Assets } from 'react-native-ui-lib';
import Storage from '@/storage';
import { Dimensions } from 'react-native';
import { CONSTS_VALUE } from '@/interfaces/commonEnum';
import { commonStyles } from '@/common/styles';

//初始化storage数据
export const initStorageData = () => {
    const loginStatus = Storage.getBoolean(CONSTS_VALUE.LOGIN_STATUS);
    // 视口屏幕尺寸
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    if (!loginStatus) {
        Storage.set(CONSTS_VALUE.LOGIN_STATUS, false);
    }
    WINDOW_WIDTH = windowWidth;
    WINDOW_HEIGHT = windowHeight;
};

//设置导航默认样式
export const setDefaultNavigationStyle = () => {
    Navigation.setDefaultOptions({
        topBar: {
            visible: true,
            drawBehind: false,
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
        },
        statusBar: {
            backgroundColor: 'transparent',
            drawBehind: true,
            translucent: true
        },
        layout: {
            componentBackgroundColor: commonStyles.pageBgColor
        },
        animations: {
            setRoot: {
                alpha: {
                    from: 0,
                    to: 1,
                    duration: 300
                }
            }
        }
    });
};

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
        logo: require('@/static/icons/appLogo.png'),
        alipay: require('@/static/icons/alipay.png'),
        wechat: require('@/static/icons/wechat.png'),
        mobile: require('@/static/icons/mobilePhone.png'),
    });
    Assets.loadAssetsGroup('bottomBarIcons', {
        home: require('@/static/bottomBarIcons/home.png'),
        homeSelect: require('@/static/bottomBarIcons/homeSelect.png'),
        mine: require('@/static/bottomBarIcons/mine.png'),
        mineSelect: require('@/static/bottomBarIcons/mineSelect.png'),
        market: require('@/static/bottomBarIcons/market.png'),
        marketSelect: require('@/static/bottomBarIcons/marketSelect.png'),
        circle: require('@/static/bottomBarIcons/circle.png'),
        circleSelect: require('@/static/bottomBarIcons/circleSelect.png'),
    });
};

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
        console.log('9898name', name);
        console.log('9898params', params);
    });

    Navigation.events().registerComponentDidAppearListener(({ componentId, componentName, passProps }) => {
        console.log('9898有用--componentId', componentId);
        console.log('9898有用--componentName', componentName);
        console.log('9898有用--passProps', passProps);
    });
};

//获取屏幕信息，例如bottomBarHeight
export const getNavigationConsts = () => {
    return Navigation.constantsSync();
};