require('react-native-ui-lib/config').setConfig({ appScheme: 'default' });
import SplashScreen from 'react-native-splash-screen';
import { loadSysStyle, screensRegister, setAppRouter, navigationEventListen } from '@/utils/loadAppTools';
import { Navigation } from "react-native-navigation";

function getLoginStatus() {
  return new Promise((res, rej) => {
      setTimeout(() => {
          res(false)
      }, 2000);
  })
}

const appLoader = async () => {
  //加载app系统默认主题、默认样式、根样式等
  loadSysStyle()

  //监听导航Navigation事件
  navigationEventListen()

  //注册屏幕组件
  screensRegister()

  //获取登录态&初始化登录态
  let isLogin = await getLoginStatus()

  //设置app路由
  setAppRouter()

  //关闭启动屏
  SplashScreen.hide()
}
appLoader()

