import { BlurView } from "@react-native-community/blur";
import CategoryTabs from "./CategoryTabs";
import InfoBar from "./InfoBar";
import SearchBar from "./SearchBar";
import Animated from "react-native-reanimated";
import { StyleSheet, View } from "react-native";

const AnimatedHeader: React.FC = (props) => {
    const {
        infoBarAnimatedStyle,
        avatorAnimatedStyle,
        searchBarAnimatedStyle,
        communityNameAnimatedStyle,
    } = props;
    return (
        <Animated.View>
            <InfoBar
                infoBarAnimatedStyle={infoBarAnimatedStyle}
                avatorAnimatedStyle={avatorAnimatedStyle}
                communityNameAnimatedStyle={communityNameAnimatedStyle}
            />
            <SearchBar searchBarAnimatedStyle={searchBarAnimatedStyle} />
            <CategoryTabs />
            <View style={styles.blurContainer}>
                <BlurView style={{ flex: 1 }} blurType='xlight' blurAmount={50} />
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    blurContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
        height: '100%',
        zIndex: -1
    }
});

export default AnimatedHeader;