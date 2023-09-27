import { getViewSize } from "@/utils/sizeTool";
import { useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { Navigation } from 'react-native-navigation';
import { ToastStore } from "@/store";
import { observer } from "mobx-react-lite";

const ToastScreen: React.FC<ToastProps> = observer(({ componentId = '' }) => {
    const timerRef = useRef<any>();
    if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            Navigation.dismissOverlay(componentId);
        }, ToastStore.duration);
    }
    useEffect(() => {
        timerRef.current = setTimeout(() => {
            Navigation.dismissOverlay(componentId);
        }, ToastStore.duration);
        return () => {
            ToastStore.close();
            clearTimeout(timerRef.current);
        };
    }, []);
    return (
        <View style={styles.container}>
            <View style={[styles.content, { backgroundColor: ToastStore.backgroundColor, shadowColor: ToastStore.shadowColor }]}>
                <Text style={[styles.text,{ color: ToastStore.textColor }]}>{ToastStore.text}</Text>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        pointerEvents: 'none',
    },
    content: {
        maxWidth: getViewSize(150),
        padding: getViewSize(10),
        borderRadius: getViewSize(8),
        elevation: 5, // 设置阴影的程度-安卓
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.6,
        shadowRadius: 3,
    },
    text: {
        textAlign: 'center'
    }
});

export default ToastScreen;
