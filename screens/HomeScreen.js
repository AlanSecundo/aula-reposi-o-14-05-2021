import React from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import PokeCard from '../components/PokeCard';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
  },
});

export default function HomeScreen({ name }) {
  return (
    <ScrollView style={styles.container}>
      {
        ['Bulbasauro','Ivisauro','Venosauro', 'Charmander'].map((element, index) => {
          return <PokeCard name={element} id={index + 1}/>
        })
      }
      
    </ScrollView>
  );
}
