import WelcomeScreen from './welcomeScreen'
import LoginScreen from './loginScreen'
import SignUpScreen from './signUpScreen'
import HomeScreen from './homeScreen'

export default [
    {
        path: 'HomeScreen',
        component: HomeScreen
    },
    {
        path: 'SignUpScreen',
        component: SignUpScreen
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