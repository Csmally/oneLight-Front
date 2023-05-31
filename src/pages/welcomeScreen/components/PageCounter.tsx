import { StyleSheet, View } from "react-native";
import Doter from "./Doter";
import { FunctionComponent } from "react";

type PageCounterProps = {
    total: number,
    activeIndex: number
}
const PageCounter: FunctionComponent<PageCounterProps> = ({ total, activeIndex }) => {
    return (
        <View style={styles.container}>
            {
                new Array(total).fill(undefined).map((item, index) => {
                    return (
                        <Doter key={index} selfIndex={index} activeIndex={activeIndex}/>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '13%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default PageCounter