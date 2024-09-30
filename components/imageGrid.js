import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  ImageBackground,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import cities from "./common";
const { width, height } = Dimensions.get("window");

const Card = () => {
  return (
    <ScrollView>
      <View style={styles.grid}>
        {cities.map((data) => (
          <View style={styles.card}>
            <ImageBackground
              source={{ uri: data.uri }}
              resizeMode="cover"
              style={styles.imageBackground}
              imageStyle={styles.imageStyle}
            >
              <View style={styles.textContainer}>
                <Text style={styles.cityName}>{data.name}</Text>
                <View>
                  <FontAwesome
                    name="long-arrow-right"
                    size={50}
                    color="white"
                  />
                </View>
              </View>
              <View style={styles.topIcon}>
                <AntDesign name="hearto" size={30} color="white" />
              </View>
            </ImageBackground>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: width / 2 - 30,
    height: height / 2 - height * 0.1,
    borderRadius: 10,
    overflow: "hidden",
  },

  imageBackground: {
    position: "relative",
    width: width / 2 - 30,
    height: height / 2 - height * 0.1,
    justifyContent: "flex-end",
  },
  imageStyle: {
    borderRadius: 10,
  },
  textContainer: {
    padding: 10,
    height: 120,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cityName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  topIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  cityDesc: {
    fontSize: 16,
    color: "#000",
  },
  grid: {
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    paddingVertical: 20,
    justifyContent: "space-between",
  },
});
