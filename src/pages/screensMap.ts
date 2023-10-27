import ToastScreen from '@/components/toast';
import WelcomeScreen from './welcomeScreen';
import LoginScreen from './loginScreen';
import HomeScreen from './homeScreen';
import MineScreen from './mineScreen';
import MarketScreen from './marketScreen';
import ErrorScreen from './errorScreen';
import CircleScreen from './circleScreen';

export default [
    {
        path: 'ErrorScreen',
        component: ErrorScreen
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
        path: 'MarketScreen',
        component: MarketScreen
    },
    {
        path: 'CircleScreen',
        component: CircleScreen
    },
];