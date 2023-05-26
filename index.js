import { Navigation } from "react-native-navigation";
import WelcomeScreen from '@/pages/welcomeScreen'
import LoginScreen from '@/pages/loginScreen'
require('react-native-ui-lib/config').setConfig({appScheme: 'default'});
import {Colors, Typography, Spacings} from 'react-native-ui-lib';

Colors.loadSchemes({
  light: {
    screenBG: 'transparent',
    textColor: Colors.grey10,
    moonOrSun: Colors.yellow30,
    mountainForeground: Colors.green30,
    mountainBackground: Colors.green50,
    $backgroundSuccess: Colors.green40,
  },
  dark: {
    screenBG: Colors.grey10,
    textColor: Colors.white,
    moonOrSun: Colors.grey80,
    mountainForeground: Colors.violet10,
    mountainBackground: Colors.violet20,
    $backgroundSuccess: Colors.green40,
  }
});

Typography.loadTypographies({
  heading: {fontSize: 36, fontWeight: '600'},
  subheading: {fontSize: 28, fontWeight: '500'},
  body: {fontSize: 18, fontWeight: '400'}
});

Spacings.loadSpacings({
  page: 20,
  card: 12,
  gridGutter: 16
});

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