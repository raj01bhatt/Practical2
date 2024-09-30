import React, { useState, useMemo } from "react";
import SlideView from "../components/imageSlider";
import { StyleSheet, View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "./imageGrid";

export default function Home() {
  const [selectedView, selectView] = useState("SLIDEVIEW");
  let cityView = <SlideView />;
  useMemo(
    () => (cityView = selectedView === "SLIDEVIEW" ? <SlideView /> : <Card />),
    [cityView]
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>City Guide</Text>
        <View style={styles.iconContainer}>
          <AntDesign
            name="appstore1"
            onPress={() => selectView("GRIDVIEW")}
            size={24}
            color={selectedView === "GRIDVIEW" ? "black" : "grey"}
          />
          <MaterialCommunityIcons
            name="cards"
            onPress={() => selectView("SLIDEVIEW")}
            size={27}
            color={selectedView === "SLIDEVIEW" ? "black" : "grey"}
          />
        </View>
      </View>
      <View style={styles.main}>{cityView}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  header: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 15,
  },
  main: {
    flex: 1,
    justifyContent: "center",
  },
});
