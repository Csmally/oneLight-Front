import { View, Text } from "react-native";

function EmptyComponent() {
    return (
        <View style={{ backgroundColor: 'green', alignItems: 'center' }}>
            <View style={{ width: 50, height: 50, marginVertical: 10, backgroundColor: 'yellow' }}>
                <Text>空页面1</Text>
            </View>
            <View style={{ width: 50, height: 50, marginVertical: 10, backgroundColor: 'yellow' }}>
                <Text>空页面2</Text>
            </View>
        </View>
    );
}

export default EmptyComponent;