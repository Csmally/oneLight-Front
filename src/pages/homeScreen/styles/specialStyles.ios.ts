import { CONST_VALUE } from "@/interfaces/commonEnum";
import Storage from "@/storage";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    page: {
        width: '100%',
        position: 'absolute',
        height: Storage.getNumber(CONST_VALUE.SCREEN_HEIGHT)
    },
    container: {
        paddingBottom: Storage.getNumber(CONST_VALUE.BOTTOMTABS_HEIGHT)
    }
});

export default styles;