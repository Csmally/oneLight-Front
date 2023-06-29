import { makeAutoObservable } from "mobx"
import { Navigation } from "react-native-navigation"

class ToastStore {
    status = false
    currentToastId = ''
    constructor() {
        makeAutoObservable(this)
    }

    show(parmas: ToastProps) {
        if(this.status) {
            Navigation.dismissOverlay(this.currentToastId)
        }
        this.status = true
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
    close() {
        this.status = false
    }
    setCurrentToastId(componentId: string) {
        this.currentToastId = componentId
    }
}

export default new ToastStore()