import Toast from '@/components/toast'
import WelcomeScreen from './welcomeScreen'
import LoginScreen from './loginScreen'
import HomeScreen from './homeScreen'

export default [
    {
        path: 'Toast',
        component: Toast
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
]