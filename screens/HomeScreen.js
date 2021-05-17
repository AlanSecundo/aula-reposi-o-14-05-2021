import React from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import PokeCard from '../components/PokeCard';
import PokeList from '../helpers/pokemons';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: "100%",
    },
});

export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            {
                PokeList.results.map(element => {
                    return <PokeCard
                        name={element.name}
                        id={element.id}
                        imageUrl={element.image}
                        key={element.id} />
                })
            }

        </ScrollView>
    );
}
