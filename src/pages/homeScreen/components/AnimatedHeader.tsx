import { BlurView } from "@react-native-community/blur";
import CategoryBar from "./CategoryBar";
import InfoBar from "./InfoBar";
import SearchBar from "./SearchBar";
import Animated from "react-native-reanimated";
import { StyleSheet, View } from "react-native";

const AnimatedHeader: React.FC = (props) => {
    const {
        flatListRef,
        containerAnimatedStyle,
        infoBarAnimatedStyle,
        avatorAnimatedStyle,
        gpaAnimatedStyle,
        communityNameAnimatedStyle,
        hotAreaAnimatedStyle,
        searchBarSpaceAnimatedStyle,
        categoryBarShadowAnimatedStyle,
        categoryColorAnimatedStyle,
        categoryTextSColorSAnimatedStyle,
        categoryTextNColorSAnimatedStyle
    } = props;
    return (
        <Animated.View animatedProps={containerAnimatedStyle}>
            <InfoBar
                infoBarAnimatedStyle={infoBarAnimatedStyle}
                avatorAnimatedStyle={avatorAnimatedStyle}
                communityNameAnimatedStyle={communityNameAnimatedStyle}
                hotAreaAnimatedStyle={hotAreaAnimatedStyle}
            />
            <View style={styles.barContainer}>
                <SearchBar gpaAnimatedStyle={gpaAnimatedStyle} searchBarSpaceAnimatedStyle={searchBarSpaceAnimatedStyle} />
                <CategoryBar
                    flatListRef={flatListRef}
                    categoryBarShadowAnimatedStyle={categoryBarShadowAnimatedStyle}
                    categoryColorAnimatedStyle={categoryColorAnimatedStyle}
                    categoryTextSColorSAnimatedStyle={categoryTextSColorSAnimatedStyle}
                    categoryTextNColorSAnimatedStyle={categoryTextNColorSAnimatedStyle}
                />
            </View>
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
    },
    barContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    }
});

export default AnimatedHeader;