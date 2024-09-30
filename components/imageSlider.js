import React from "react";
import { StyleSheet, Dimensions, FlatList } from "react-native";
import ImageCard from "./imageCard";
import cities from "./common";

const { width, height } = Dimensions.get("window");

const SlideView = () => {
  const CARD_GAP = 20;
  const CARD_WIDTH = width - CARD_GAP * 2;

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      horizontal
      pagingEnabled
      data={cities}
      renderItem={({ item }) => <ImageCard cityData={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.slideContainer}
      snapToInterval={CARD_WIDTH + CARD_GAP}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default SlideView;

const styles = StyleSheet.create({
  slideContainer: {
    gap: 10,
    paddingHorizontal: width * 0.054,
    // paddingVertical: height * 0.035,
    justifyContent: "center",
  },
});
