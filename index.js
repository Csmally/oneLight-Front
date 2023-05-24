import { Navigation } from "react-native-navigation";
import HomeScreen from '@/pages/homeScreen'

Navigation.registerComponent('HomeScreen', () => HomeScreen);

Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'HomeScreen'
             }
           }
         ]
       }
     }
  });
});