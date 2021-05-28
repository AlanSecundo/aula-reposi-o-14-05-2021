import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import PokeCard from '../components/PokeCard';
import PokeList from '../helpers/pokemons';
import axios from 'axios';

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: "100%",
    },
});

export default function HomeScreen() {

    const [pokeList, setPokeList] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
        .then(response => {
            setPokeList(response.data.results)
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

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
