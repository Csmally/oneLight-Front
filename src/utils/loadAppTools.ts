import Screens from '@/pages/screensMap';
import { LayoutRoot, Navigation } from 'react-native-navigation';
import { Colors, Typography, Spacings, Assets } from 'react-native-ui-lib';
import Storage from '@/storage';
import { Dimensions } from 'react-native';

//初始化storage数据
export const initStorageData = () => {
    const loginStatus = Storage.getBoolean('loginStatus');
    // 获取屏幕尺寸
    const screenWidth = Dimensions.get('screen').width;
    const screenHeight = Dimensions.get('screen').height;
    if (!loginStatus) {
        Storage.set('loginStatus', false);
    }
    Storage.set('screenWidth', screenWidth);
    Storage.set('screenHeight', screenHeight);
};

//设置导航默认样式
export const setDefaultNavigationStyle = () => {
    Navigation.setDefaultOptions({
        topBar: {
            // background: {
            //     color: {
            //         light: '#F7F8F9',
            //         dark: Colors.grey10
            //     },
            // },
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
        logo: require('@/static/appLogo.png'),
        alipay: require('@/static/alipay.png'),
        wechat: require('@/static/wechat.png'),
        mobile: require('@/static/mobilePhone.png'),
        home: require('@/static/home.png'),
        homeSelect: require('@/static/homeSelect.png')
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
};

//注册屏幕组件
export const screensRegister = () => {
    Screens.forEach(screenInfo => {
        Navigation.registerComponent(screenInfo.path, () => screenInfo.component);
    });
};

//设置app路由
export const setAppRouter = (isInitApp?: boolean) => {
    const loginStatus = Storage.getBoolean('loginStatus');
    const welcomeRoot = {
        root: {
            stack: {
                children: [{
                    component: {
                        name: 'WelcomeScreen',
                        options: {
                            topBar: {
                                visible: false
                            }
                        }
                    }
                }]
            }
        }
    };
    const bottomRoot: LayoutRoot = {
        root: {
            bottomTabs: {
                children: [
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: 'HomeScreen',
                                    options: {
                                        topBar: {
                                            visible: false
                                        }
                                    }
                                },
                            }],
                            options: {
                                bottomTab: {
                                    text: '首页',
                                    icon: Assets.icons.home,
                                    selectedIcon: Assets.icons.homeSelect
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: 'ChatScreen',
                                    options: {
                                        topBar: {
                                            visible: true
                                        }
                                    }
                                },
                            }],
                            options: {
                                bottomTab: {
                                    text: '聊天室',
                                    icon: Assets.icons.home,
                                    selectedIcon: Assets.icons.homeSelect
                                }
                            }
                        }
                    },
                    {
                        stack: {
                            children: [{
                                component: {
                                    name: 'MineScreen',
                                    options: {
                                        topBar: {
                                            visible: false
                                        }
                                    }
                                },
                            }],
                            options: {
                                bottomTab: {
                                    text: '我的',
                                    icon: Assets.icons.home,
                                    selectedIcon: Assets.icons.homeSelect
                                }
                            }
                        }
                    }
                ],
                options: {
                    bottomTabs: {
                        currentTabIndex: 0,
                        translucent: true,
                        drawBehind: true,
                        tabsAttachMode: 'together'
                    },
                    bottomTab: {
                        textColor: '#959595',
                        selectedTextColor: '#000000',
                        fontSize: 12
                    }
                }
            }
        }
    };
    if (isInitApp === true) {
        Navigation.events().registerAppLaunchedListener(() => {
            Navigation.setRoot(loginStatus ? bottomRoot : welcomeRoot);
        });
    } else {
        Navigation.setRoot(loginStatus ? bottomRoot : welcomeRoot);
    }
};