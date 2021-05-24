import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  pokeCard: {
    backgroundColor: "#8BBE8A",
    borderRadius: 10,
    marginTop: 20,
    width: "100%",
    height: 115,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  pokeCardContent: {
    padding: 20,
  },
  pokeballBg: {
    width: "145px",
    height: "125px",
    position: "absolute",
    right: 0,
  },
  pokemonImage: {
    width: "130px",
    height: "130px",
    marginTop: "-25px",
  },
});

export default function PokeCard({ name, id, imageUrl }) {
  return (
    <View style={styles.pokeCard}>
      <View style={styles.background}>
        <Image
          style={styles.bgBalls}
          source={require("../assets/bg-balls.svg")}
        />
        <Image
          style={styles.pokeballBg}
          source={require("../assets/pokeball-bg.svg")}
        />
      </View>
      <View style={styles.pokeCardContent}>
        <Text style={styles.pokeId}>#{id.padStart(3, "0")}</Text>
        <Text style={styles.pokeName}>{name}</Text>
      </View>
      <Image style={styles.pokemonImage} source={imageUrl} />
    </View>
  );
}
