import { Text, View } from "react-native-ui-lib";

const TopBarWidget: React.FC = () => {
    return (
        <View style={{flex: 1,backgroundColor:'pink'}}>
            <Text>我是自定义头部</Text>
        </View>
    );
};

export default TopBarWidget;