interface ToastProps {
    text: string,
    duration?: number
    textColor?: string,
    backgroundColor?: string,
    shadowColor?: string,
    componentId?: string
}

interface Rout {
    component: {
        name: string,
        options?: any
    }
}

interface StackRoot {
    root: {
        stack: {
            children: Rout[]
        }
    }
}