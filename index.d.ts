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

// 信息 常见：首页一条发布信息
type NewsItem = {
    id: string,
    publisherName: string,
    avatar: string,
    imgs?: string[],
    description: string,
    publishTime: number | string,
    tags?: number[]
}

interface ToastTool {
    show: (params: ToastProps) => void;
}
declare var Toast: ToastTool;