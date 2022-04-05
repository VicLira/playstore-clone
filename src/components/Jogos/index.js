import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image} from "react-native";

// Criando a função e recebendo por props o título valor e imagem do jogo
export default function Jogos({ titulo, valor, imagem }) {
    return (
        <TouchableOpacity style={estilo.containerJogos}>
            <Image
                style={estilo.images}
                source={require(`../../../assets/imagens/${imagem}`)}
            />
            
            <Text style={estilo.titulo}>{titulo}</Text>
            <Text style={estilo.valor}>{valor}</Text>
        </TouchableOpacity>
    );
};

const estilo = StyleSheet.create({
    containerJogos: {
        backgroundColor: "#250902",
        borderRadius: 10,
        marginTop: 8,
        padding: 15,
        margin: 2,
        alignItems: "center",
        justifyContent: "space-between",
        width: 130,
        height: 200,
        marginLeft: 8
    },
    titulo: {
        marginBottom: 5,
        marginTop: 5,
        color: "#f3f3f3",
        opacity: 0.8,
        fontSize: 13,
        fontWeight: "bold"
    },
    valor: {
        color: "green",
        fontSize: 12,
        opacity: 0.8,
        marginLeft: 29,
        marginTop: 2,
        fontWeight: "bold"
    },
    images: {
        width: "100%",
        height: 110,
        borderRadius: 3
    }
})