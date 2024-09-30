import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const ImageCard = ({ cityData }) => {
  return (
    <View style={styles.slideCard}>
      <ImageBackground
        source={{ uri: cityData.uri }}
        resizeMode="cover"
        style={styles.imageBackgroundSlide}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.textContainer}>
          <Text style={styles.cityName}>{cityData.name}</Text>
          <Text style={styles.cityDesc}>{cityData.description}</Text>
          <View>
            <FontAwesome name="long-arrow-right" size={50} color="white" />
          </View>
        </View>
        <View style={{ ...styles.topIcon, right: 20 }}>
          <FontAwesome name="heart-o" size={30} color="white" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  slideCard: {
    width: width - 30,
    height: height - height * 0.1,
    borderRadius: 10,
    overflow: "hidden",
  },
  imageBackgroundSlide: {
    position: "relative",
    width: "98%",
    height: height - height * 0.1,
    justifyContent: "flex-end",
  },

  slideContainer: {
    gap: 10,
    paddingHorizontal: width * 0.05,
    justifyContent: "center",
  },

  imageStyle: {
    borderRadius: 10,
  },
  textContainer: {
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 250,
  },
  cityName: {
    fontSize: 28,
    color: "#FFF",
    fontWeight: "bold",
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
    fontSize: 20,
    color: "#FFF",
  },
});
