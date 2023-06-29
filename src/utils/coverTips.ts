import { Navigation } from 'react-native-navigation'

export const Toast = {
    show: (parmas: ToastProps) => {
        Navigation.showOverlay({
            component: {
                name: 'Toast',
                passProps: parmas,
                options: {
                    layout: {
                        componentBackgroundColor: 'transparent',
                    },
                    overlay: {
                        interceptTouchOutside: false
                    }
                }
            }
        });
    }
}