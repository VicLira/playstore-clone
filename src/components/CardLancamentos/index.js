import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image} from "react-native";

// Criando a função e recebendo por props o título valor e imagem do jogo
export default function Jogos({ titulo, data, imagem }) {
    return (
        <TouchableOpacity style={estilo.containerJogos}>
            <Image
                style={estilo.images}
                source={require(`../../../assets/imagens/${imagem}`)}
            />
            
            <Text style={estilo.titulo}>{titulo}</Text>
            <Text style={estilo.data}>{data}</Text>
        </TouchableOpacity>
    );
};

const estilo = StyleSheet.create({
    containerJogos: {
        marginTop: 8,
        padding: 15,
        margin: 2,
        alignItems: "center",
        justifyContent: "space-around",
        width: 300,
        height: 320,
        marginLeft: 8
    },
    titulo: {
        marginTop: 5,
        color: "#f3f3f3",
        opacity: 0.8,
        fontSize: 13,
        fontWeight: "bold"
    },
    data: {
        width: '50%',
        color: "white",
        textAlign: 'right',
        fontSize: 12,
        opacity: 0.3,
        marginTop: 2,
        fontWeight: "bold"
    },
    images: {
        width: "100%",
        height: 250,
        borderRadius: 3
    }
})