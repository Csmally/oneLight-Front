import WelcomeScreen from './welcomeScreen'
import LoginScreen from './loginScreen'
import Toast from '@/components/toast'

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
]