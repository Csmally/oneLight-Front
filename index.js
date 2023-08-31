require('react-native-ui-lib/config').setConfig({ appScheme: 'default' });
import { loadSysStyle, screensRegister, navigationEventListen, setDefaultNavigationStyle, initStorageData } from '@/utils/loadAppTools';
import { setAppRouter } from '@/utils/setRouterTools';
import { ToastStore } from '@/store';

const appLoader = async () => {
  Toast = {
    show: (params) => {
      ToastStore.show(params)
    }
  }
  //初始化storage数据
  initStorageData()
  
  //加载app系统默认主题、默认样式、根样式等
  loadSysStyle()

  //监听导航Navigation事件
  navigationEventListen()

  //注册屏幕组件
  screensRegister()

  //设置导航默认样式
  setDefaultNavigationStyle()

  //设置app路由
  setAppRouter(true)
}
appLoader()

