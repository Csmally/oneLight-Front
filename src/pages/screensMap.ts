import WelcomeScreen from './welcomeScreen'
import LoginScreen from './loginScreen'
import Toast from './toast'

export default [
    {
        path: 'toast',
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