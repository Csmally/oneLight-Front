import { commonStyles } from '@/common/styles';
import { makeAutoObservable } from 'mobx';
import { Navigation } from 'react-native-navigation';

class ToastStore {
  status = false;
  text = '';
  duration = 2000;
  textColor = commonStyles.white;
  backgroundColor = commonStyles.black;
  shadowColor = commonStyles.black;

  constructor() {
    makeAutoObservable(this);
  }

  show(parmas: ToastProps) {
    const {
      text,
      duration = 2000,
      textColor = commonStyles.white,
      backgroundColor = commonStyles.black,
      shadowColor = commonStyles.black,
    } = parmas;
    this.text = text;
    this.duration = duration;
    this.textColor = textColor;
    this.backgroundColor = backgroundColor;
    this.shadowColor = shadowColor;
    if (this.status) {
      return;
    }
    this.status = true;
    Navigation.showOverlay({
      component: {
        name: 'ToastScreen',
        options: {
          layout: {
            componentBackgroundColor: 'transparent',
          },
          overlay: {
            interceptTouchOutside: false,
          },
        },
      },
    });
  }
  close() {
    this.status = false;
    this.text = '';
    this.duration = 2000;
    this.textColor = commonStyles.white;
    this.backgroundColor = commonStyles.black;
    this.shadowColor = commonStyles.black;
  }
}

export default new ToastStore();
