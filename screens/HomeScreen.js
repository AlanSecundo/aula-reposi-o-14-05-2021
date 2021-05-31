import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import PokeCard from '../components/PokeCard';
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
                pokeList.map((element, index) => {
                    return <PokeCard
                                name={element.name}
                                pokeUrl={element.url}
                                key={index} 
                        />
                })
            }
        </ScrollView>
    );
}
