import { LayoutRoot, Navigation } from 'react-native-navigation';
import Storage from "@/storage";
import { Assets } from 'react-native-ui-lib';
import { CONSTS_VALUE } from '@/interfaces/commonEnum';
import { commonStyles } from '@/common/styles';

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
                                    name: 'MarketScreen',
                                    options: {
                                        topBar: {
                                            visible: false
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
                                    name: 'CircleScreen',
                                    options: {
                                        topBar: {
                                            visible: false
                                        }
                                    }
                                },
                            }],
                            options: {
                                bottomTab: {
                                    text: '圈子',
                                    icon: Assets.bottomBarIcons.circle,
                                    selectedIcon: Assets.bottomBarIcons.circleSelect
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
                        translucent: true,
                        drawBehind: true,
                        tabsAttachMode: 'together',
                        backgroundColor: 'transparent',
                        animate: true,
                        animateTabSelection: true,
                        titleDisplayMode: 'alwaysShow'
                    },
                    bottomTab: {
                        textColor: '#959595',
                        selectedTextColor: commonStyles.black,
                        fontSize: 12,
                        animateBadge: true,
                        fontWeight: '500'
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