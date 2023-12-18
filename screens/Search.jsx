import { TouchableOpacity, View, TextInput } from "react-native";
import { SIZES, COLORS } from "../constants/index";
import { Feather, Ionicons } from "@expo/vector-icons";
import styles from "./search.style";

const Search = () => {
  return (
    <View style={SIZES.safeAreaView}>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            name="camera-outline"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />
        </TouchableOpacity>

        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onPressIn={() => {}}
            placeholder="What are you looking for?"
          />
        </View>

        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Feather name="search" size={24} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Search;
