import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { SIZES } from "../constants/index";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import styles from "./home.style";
import { Welcome, Carousel } from "../components";

const Home = () => {
  return (
    <View style={SIZES.safeAreaView}>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} color="black" />
          <Text style={styles.location}> Shanghai China</Text>

          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>

            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView>
        <Welcome />
        <Carousel />
      </ScrollView>
    </View>
  );
};

export default Home;
