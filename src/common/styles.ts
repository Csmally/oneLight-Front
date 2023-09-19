import { getFontSize, getViewSize } from "@/utils/sizeTool";
import { Platform, StyleSheet } from "react-native";

const commonStyles = {
    pageBgColor: '#F6F6F6',
    white: '#FFFFFF',
    black: '#000000',
    black_3a: '#3a3a3a',
    grey_placeholder: '#7b7b7b',
    topBarFontSize: getFontSize(17),
    pageBorderGap: getViewSize(10),
};

const commonShadowStyles = StyleSheet.create({
    style: {
        shadowOffset: { width: 3, height: 9 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        ...Platform.select({
            ios: {
                shadowColor: '#cecece',
            },
            android: {
                shadowColor: commonStyles.black,
                elevation: 20,
            }
        })
    }
});
export { commonStyles, commonShadowStyles };