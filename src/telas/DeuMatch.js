import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { ComponenteBola } from '../componentes/componenteBola';
import { ComponenteQuadrado } from '../componentes/componenteQuadrado';
import { ComponenteRetangulo } from '../componentes/componenteRetangulo';

import { ComponenteTimeline } from '../componentes/componenteTimeline';
import { ComponenteProduto } from '../componentes/componenteProduto';


export function DeuMatch({ navigation }) {

    const fotoBgMatch = '../../assets/match.png'

    function AbriSacola() {
        navigation.navigate('Sacola')
    }

    return (

        <View style={style.container}>

            <StatusBar style="auto" />

            <Image
                style={style.imagem}
                source={require(fotoBgMatch)}
            />

            <View style={style.match}>
                <View style={style.ContainerMatch}>
                    <View style={style.BolaMatch}>
                        <View style={style.BolaIcone}>
                            <MaterialIcons
                                style={style.inputfavorite}
                                name='whatshot'
                                color={'#FEDB41'}
                                size={35}
                            />
                        </View>
                        <View style={style.BolaMatch2}>


                        </View>
                    </View>

                </View>
                <View style={style.ContainerTextoMatch}>
                    <Text style={style.MatchTitulo}>Flechada</Text>
                    <Text style={style.MatchTexto}>(Usuario) quer te encontrar no (LocalIndicado)</Text>
                </View>

                <View>
                <TouchableOpacity style={style.botao}  >
                    <Text style={style.textbotao}>Adicionar</Text>
                </TouchableOpacity>

                <Text style={style.textoquantidadeSacola}>Você ja possui 0 itens na sacola</Text>
                </View>
            </View>


        </View>

    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c1c1',
    },

    imagem: {
        width: '100%',
        height: '100%'
    },

    match: {
        width: '70%',
        height: '50%',
        backgroundColor: '#fff',
        borderRadius: 12,
        elevation: 10,
        marginHorizontal: 50,
        marginVertical: '40%',
        //alignItems:'center',
        //justifyContent:'center'
    },

    BolaMatch: {
        width: 60,
        height: 60,
        backgroundColor: '#c1c1c1',
        borderRadius: 50,
        elevation: 1,
        marginLeft: 62,
    },

    BolaIcone: {
        width: 50,
        height: 50,
        // backgroundColor: '#c1c1c1',
        borderRadius: 50,
        marginLeft: 55,
        paddingTop: 5,
        position: 'absolute'

    },

    BolaMatch2: {
        width: 60,
        height: 60,
        backgroundColor: '#c1c1c1',
        borderRadius: 50,
        elevation: 1,
        marginLeft: 100

    },

    ContainerMatch: {
        marginVertical:40,
        flexDirection: 'row',
        
    },

    inputfavorite: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingRight: 3
    },

    ContainerTextoMatch: {

    },
    MatchTitulo: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom:15
    },
    MatchTexto: {
        textAlign: 'center',
        fontSize: 16,
    },
    imagem:{
        width: '100%',
        height: '100%',
        borderRadius: 12,
        elevation: 1,
        position:'absolute'
    },

    botao: {
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        width: "80%",
        backgroundColor: '#63E1FD',
        paddingTop: 20,
        paddingBottom: 20,
        marginLeft: 35,
        margin: 10,
        marginTop: 25
    },

    textbotao: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'

    },

    textoquantidadeSacola: {
        fontSize: 14,
        color: '#c1c1c1',
        fontWeight: 'bold',
        width: '100%',
        marginHorizontal: 85
    }




})