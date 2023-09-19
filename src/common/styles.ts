import { getFontSize, getViewSize } from "@/utils/sizeTool";
import { Platform, StyleSheet } from "react-native";

type shadowOffsetType = {
    width: number,
    height: number
}

type CommonShadowParams = {
    shadowOffset?: shadowOffsetType,
    shadowOpacity?: number,
    shadowRadius?: number,
    shadowColorForIos?: string,
    shadowColorForAndroid?: string,
    elevation?: number
}

const commonStyles = {
    pageBgColor: '#F6F6F6',
    white: '#FFFFFF',
    black: '#000000',
    black_3a: '#3a3a3a',
    grey_placeholder: '#7b7b7b',
    topBarFontSize: getFontSize(17),
    pageBorderGap: getViewSize(10),
};

const defaultShadowParam = {
    shadowOffset: {
        width: 3,
        height: 10
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowColorForIos: '#cecece',
    shadowColorForAndroid: commonStyles.black,
    elevation: 20
};

const getCommonShadowStyle = (params?: CommonShadowParams) => {
    const shadowStyles = { ...defaultShadowParam, ...params };
    return StyleSheet.create({
        style: {
            ...Platform.select({
                ios: {
                    shadowOffset: shadowStyles.shadowOffset,
                    shadowOpacity: shadowStyles.shadowOpacity,
                    shadowRadius: shadowStyles.shadowRadius,
                    shadowColor: shadowStyles.shadowColorForIos,
                },
                android: {
                    shadowColor: shadowStyles.shadowColorForAndroid,
                    elevation: shadowStyles.elevation,
                }
            })
        }
    });
};
export { commonStyles, getCommonShadowStyle };