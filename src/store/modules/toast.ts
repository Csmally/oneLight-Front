import { makeAutoObservable } from 'mobx';
import { Navigation } from 'react-native-navigation';

class ToastStore {
  status = false;
  text = '';
  duration = 2000;
  textColor = '#FFFFFF';
  backgroundColor = '#000000';
  shadowColor = '#000000';

  constructor() {
    makeAutoObservable(this);
  }

  show(parmas: ToastProps) {
    const {
      text,
      duration = 2000,
      textColor = '#FFFFFF',
      backgroundColor = '#000000',
      shadowColor = '#000000',
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
    this.textColor = '#FFFFFF';
    this.backgroundColor = '#000000';
    this.shadowColor = '#000000';
  }
}

export default new ToastStore();
