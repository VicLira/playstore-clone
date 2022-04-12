import { FlatList, StyleSheet, Text, View } from "react-native";
import Botao from "./src/components/botao";
import Cabecalho from "./src/components/cabecalho";
import Jogos from "./src/components/Jogos";
import CardLancamentos from "./src/components/CardLancamentos"
import dados from "./dados";
import LANCAMENTOS from "./dados/lancamentos";


export default function App() {
  return (
    <View style={{ backgroundColor: "#581F18", flex: 1 }}>
      <Cabecalho></Cabecalho>
      <Botao
        Logo="logo-android"
        texto="SUSPENSE"
        cor="#9FE2BF"
        Logo2="game-controller"
        texto2="ROMANCE"
        cor2="#820066"
      />
      <Botao
        Logo="film"
        texto="COMÉDIA"
        cor="#FF7F50"
        Logo2="musical-notes"
        texto2="BIOGRAFIA"
        cor2="#6495ED"
      />
      <Botao
        Logo="book"
        texto="AUDIOLIVRO"
        cor="#CCCCFF"
        Logo2="journal"
        texto2="NOTICIAS"
        cor2="#FFBF00"
      />

  <Text style={estilo.Title}>Livros</Text>
      <View>
        <FlatList 
          horizontal={true} 
          data={dados} 
          keyExtractor={item => item.id}
          renderItem={({item}) => (

            <Jogos
              titulo={item.nome}
              valor={item.valor}
              imagem={item.imagem}
            />
          )}
        />
      </View>
      
      <Text style={estilo.Title}>Lançamentos</Text>
      <View>
        <FlatList 
          horizontal={true} 
          data={LANCAMENTOS} 
          keyExtractor={item => item.id}
          renderItem={({item}) => (

            <CardLancamentos
              titulo={item.nome}
              data={item.data}
              imagem={item.imagem}
            />
          )}
        />
      </View>
      
    </View>
  );
}

const estilo = StyleSheet.create({
  Title: {
    fontSize: 20,
    textTransform: "uppercase",
    margin: 5,
    color: "white",
  },

});
