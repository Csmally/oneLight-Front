import { LayoutRoot, Navigation } from 'react-native-navigation';
import Storage from "@/storage";
import { Assets } from 'react-native-ui-lib';
import { CONSTS_VALUE } from '@/interfaces/commonEnum';

//设置app路由
export const setAppRouter = async (isInitApp?: boolean) => {
    const loginStatus = Storage.getBoolean(CONSTS_VALUE.LOGIN_STATUS);
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
                                    icon: Assets.bottomBarIcons.home,
                                    selectedIcon: Assets.bottomBarIcons.homeSelect,
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
                                    text: '集市',
                                    icon: Assets.bottomBarIcons.market,
                                    selectedIcon: Assets.bottomBarIcons.marketSelect
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
                                    icon: Assets.bottomBarIcons.mine,
                                    selectedIcon: Assets.bottomBarIcons.mineSelect
                                }
                            }
                        }
                    }
                ],
                options: {
                    bottomTabs: {
                        currentTabIndex: 0,
                        // translucent: true,
                        drawBehind: true,
                        tabsAttachMode: 'together',
                        backgroundColor: 'rgba(255, 255, 255, 0)'
                    },
                    bottomTab: {
                        textColor: '#959595',
                        selectedTextColor: '#000000',
                        fontSize: 12,
                        animateBadge: true
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