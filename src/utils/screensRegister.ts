/**
 * 注意：此文件因涉及Screens（所有屏幕组件），一旦某一业务组件引用此文件方法会造成循环引用，
 * 所以轻易不要在此文件添加业务公共方法，若确实需要添加，注意避免循环引用
*/
import Screens from '@/pages/screensMap';
import { Navigation } from 'react-native-navigation';

//注册屏幕组件
export const screensRegister = () => {
    Screens.forEach(screenInfo => {
        Navigation.registerComponent(screenInfo.path, () => screenInfo.component);
    });
};