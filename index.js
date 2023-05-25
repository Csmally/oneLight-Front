import { Navigation } from "react-native-navigation";
import WelcomeScreen from '@/pages/welcomeScreen'
import LoginScreen from '@/pages/loginScreen'

Navigation.registerComponent('WelcomeScreen', () => WelcomeScreen);
Navigation.registerComponent('LoginScreen', () => LoginScreen);

Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
          {
            component: {
              name: 'LoginScreen'
            }
          },
          {
            component: {
              name: 'WelcomeScreen',
              options: {
              topBar: {
                visible: false
              }
              }
            }
          }
         ]
       }
     }
  });
});