import { BlurView } from "@react-native-community/blur";
import CategoryBar from "./CategoryBar";
import InfoBar from "./InfoBar";
import SearchBar from "./SearchBar";
import Animated from "react-native-reanimated";
import { StyleSheet, View } from "react-native";

const AnimatedHeader: React.FC = (props) => {
    const {
        containerAnimatedStyle,
        infoBarAnimatedStyle,
        avatorAnimatedStyle,
        searchBarAnimatedStyle,
        communityNameAnimatedStyle,
        hotAreaAnimatedStyle,
        searchBarSpaceAnimatedStyle,
        categoryBarItemAnimatedStyle,
        categoryBarShadowAnimatedStyle,
    } = props;
    return (
        <Animated.View>
            <InfoBar
                infoBarAnimatedStyle={infoBarAnimatedStyle}
                avatorAnimatedStyle={avatorAnimatedStyle}
                communityNameAnimatedStyle={communityNameAnimatedStyle}
                hotAreaAnimatedStyle={hotAreaAnimatedStyle}
            />
            <SearchBar searchBarAnimatedStyle={searchBarAnimatedStyle} searchBarSpaceAnimatedStyle={searchBarSpaceAnimatedStyle} />
            <CategoryBar searchBarAnimatedStyle={searchBarAnimatedStyle} categoryBarItemAnimatedStyle={categoryBarItemAnimatedStyle} categoryBarShadowAnimatedStyle={categoryBarShadowAnimatedStyle} />
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