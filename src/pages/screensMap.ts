import ToastScreen from '@/components/toast';
import TopBarWidget from '@/components/topBarWidget';
import WelcomeScreen from './welcomeScreen';
import LoginScreen from './loginScreen';
import HomeScreen from './homeScreen';
import MineScreen from './mineScreen';
import ChatScreen from './chatScreen';

export default [
    {
        path: 'TopBarWidget',
        component: TopBarWidget
    },
    {
        path: 'ToastScreen',
        component: ToastScreen
    },
    {
        path: 'LoginScreen',
        component: LoginScreen
    },
    {
        path: 'WelcomeScreen',
        component: WelcomeScreen,
        options: {
            topBar: {
                visible: false
            }
        }
    },
    {
        path: 'HomeScreen',
        component: HomeScreen
    },
    {
        path: 'MineScreen',
        component: MineScreen
    },
    {
        path: 'ChatScreen',
        component: ChatScreen
    },
];