import React from 'react';
import {View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native';
import { Ionicons} from '@expo/vector-icons';


export default function Cabecalho(){
return(
    
    <View style={estilo.header}>
        <Ionicons name="menu" size={24} color="white" />
        <Text style ={estilo.Texto}> Read Store </Text>
       
        <Ionicons name="ios-search-sharp" size={24} color="white" />
    </View>

);
}
const estilo = StyleSheet.create({
    header:{
        backgroundColor:'#250902',
        borderRadius:2,
        marginTop:8,
        width:'99,9%',
        padding:20,
        margin:2,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20

    },
    Texto:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    }

})