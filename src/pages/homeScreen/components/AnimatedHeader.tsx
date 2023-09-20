import { View } from "react-native";
import CategoryTabs from "./CategoryTabs";
import HeaderTopBar from "./HeaderTopBar";
import SearchBar from "./SearchBar";

const AnimatedHeader: React.FC = () => {
    return (
        <View>
            <HeaderTopBar />
            <SearchBar />
            <CategoryTabs />
        </View>
    );
};

export default AnimatedHeader;