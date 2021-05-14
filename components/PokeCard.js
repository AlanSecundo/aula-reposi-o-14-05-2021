import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  pokeCard: {
    backgroundColor: "#8BBE8A",
    borderRadius: 10,
    marginTop: 20,
    width: "100%",
    height: 115,
  },
  pokeId: {
    fontWeight: "bold",
    color: "rgba(23, 23, 27, 0.6)",
  },
  pokeName: {
    fontSize: 26,
    color: "white",
    fontWeight: 700,
  },
  bgBalls: {
    width: 75,
    height: 32,
    marginLeft: 90,
    marginTop: 5,
  },
});

export default function PokeCard({ name, id }) {
  return (
    <View style={styles.pokeCard}>
      <View>
        <Image
          style={styles.bgBalls}
          source={require("../assets/bg-balls.svg")}
        />
      </View>
      <View>
        <Text style={styles.pokeId}>#{id.toString().padStart(3, "0")}</Text>
        <Text style={styles.pokeName}>{name}</Text>
      </View>
    </View>
  );
}
