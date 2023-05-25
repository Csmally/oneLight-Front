import { Dimensions, PixelRatio } from 'react-native';
import { commonEnum } from '@/interfaces';
import { StyleSheet } from 'react-native';

// 以iPhone6为基准&宽度适配优先
const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
const BASE_WIN_WIDTH = commonEnum.BASE_SCREEN_SIZE.BASE_WIN_WIDTH;
// const BASE_WIN_HEIGHT = commonEnum.BASE_SCREEN_SIZE.BASE_WIN_HEIGHT;
// const viewScale = Math.min(windowWidth / BASE_WIN_WIDTH, windowHeight / BASE_WIN_HEIGHT);
const viewScale = windowWidth / BASE_WIN_WIDTH
const fontScale = PixelRatio.getFontScale();

// 宽度&高度转换
export function getViewSize(viewSize: number) {
    if (viewSize <= 1) {
        return StyleSheet.hairlineWidth;
    }
    return PixelRatio.roundToNearestPixel(viewScale * viewSize);
}

// 字体转换
export function getFontSize(fontSize: number): number {
    return PixelRatio.roundToNearestPixel((fontSize * viewScale) / fontScale);
}