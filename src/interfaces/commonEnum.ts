/* eslint-disable no-unused-vars */
/**
 * 基础屏幕尺寸
 * 以iPhone6为基准
 */
enum BASE_SCREEN_SIZE {
    BASE_WIN_WIDTH = 375,
    BASE_WIN_HEIGHT = 667
}

/**
 * Storage存储的键值对的key
 */
enum CONST_VALUE {
    SCREEN_HEIGHT = 'SCREEN_HEIGHT',
    SCREEN_WIDTH = 'SCREEN_WIDTH',
    STATUSBAR_HEIGHT = 'STATUSBAR_HEIGHT',
    BOTTOMTABS_HEIGHT = 'BOTTOMTABS_HEIGHT',
    LOGIN_STATUS = 'LOGIN_STATUS',
}

export { BASE_SCREEN_SIZE, CONST_VALUE };