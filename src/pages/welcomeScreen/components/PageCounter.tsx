import { StyleSheet, View } from "react-native";
import Doter from "./Doter";

type PageCounterProps = {
    total: number,
    activeIndex: number
}
function PageCounter({ total, activeIndex }: PageCounterProps) {
    return (
        <View style={styles.container}>
            {
                new Array(total).fill(undefined).map((item, index) => {
                    return (
                        <Doter key={index} selfIndex={index} activeIndex={activeIndex} />
                    );
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '13%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default PageCounter;