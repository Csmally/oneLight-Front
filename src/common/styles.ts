import { getFontSize, getViewSize } from "@/utils/sizeTool";
import { Platform, StyleSheet } from "react-native";

type CommonShadowParams = {
    shadowWidth?: number,
    shadowOpacity?: number,
    shadowRadius?: number,
    shadowColorForIos?: string,
    shadowColorForAndroid?: string,
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

const defaultShadowParam: CommonShadowParams = {
    shadowWidth: getViewSize(10),
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowColorForIos: '#cecece',
    shadowColorForAndroid: commonStyles.black,
};

const getCommonShadowStyle = (params?: CommonShadowParams) => {
    const shadowStyles: CommonShadowParams = { ...defaultShadowParam, ...params };
    return StyleSheet.create({
        style: {
            ...Platform.select({
                ios: {
                    shadowOffset: {
                        width: 0,
                        height: shadowStyles.shadowWidth
                    },
                    shadowOpacity: shadowStyles.shadowOpacity,
                    shadowRadius: shadowStyles.shadowRadius,
                    shadowColor: shadowStyles.shadowColorForIos,
                },
                android: {
                    shadowColor: shadowStyles.shadowColorForAndroid,
                    elevation: shadowStyles.shadowWidth,
                }
            })
        }
    });
};
export { commonStyles, getCommonShadowStyle };