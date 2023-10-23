import { memo } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { getNavigationConsts } from "@/utils/loadAppTools";
import { BlurView } from "@react-native-community/blur";

const styles = StyleSheet.create({
    blurContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        overflow: 'hidden'
    }
});

function BlurBox() {
    const isIOS = Platform.OS === 'ios';
    if (isIOS) return null;
    return (
        <View style={[styles.blurContainer, { height: getNavigationConsts().bottomTabsHeight }]}>
            <BlurView style={{ flex: 1 }} blurType='xlight' blurAmount={50} />
        </View>
    );
}

export default memo(BlurBox);