import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { ComponenteBola } from '../componentes/componenteBola';
import { ComponenteQuadrado } from '../componentes/componenteQuadrado';
import { ComponenteRetangulo } from '../componentes/componenteRetangulo';

import { ComponenteTimeline } from '../componentes/componenteTimeline';
import { ComponenteProduto } from '../componentes/componenteProduto';


export function AddProduto({ navigation }) {


    function AbriSacola() {
        navigation.navigate('Sacola')
    }

    return (

        <View style={style.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar style="auto" />


                <View style={style.componenteRecomendado} >

                    <View style={style.BolaSacola} >

                    <MaterialIcons
                            style={style.inputfavorite}
                            name='local-mall'
                            color={'#fff'}
                            size={100}
                        />

                    </View>

                    <View>
                        <Text style={style.textoquantidadeSacola}>Você possui 01 produtos na sacola</Text>
                        <Text style={style.textoValor}>Total de R$13,90</Text>
                    </View>

                </View>

                

                <TouchableOpacity style={style.botao} onPress={AbriSacola}>
                    <Text style={style.textbotao}>Ver sacola</Text>
                </TouchableOpacity>


            </ScrollView>
        </View>

    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    componenteRecomendado: {
        
        backgroundColor: '#fff',
       // elevation: 3,

        marginBottom: 20,
        //marginTop:80

    },

    BolaSacola: {
        flex:1,
        width: 150,
        height: 150,
        backgroundColor: '#FEDB41',
        borderRadius: 100,
        marginHorizontal: 120,
        marginTop:150,
        marginBottom:20

    },

    inputfavorite: {

        textAlign: 'center',
        paddingTop: 18,
        
    },

    TextoQuadrado: {
        paddingTop: 10,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginHorizontal:15


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
        marginTop:25
      },
    
      textbotao: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    
      },
      textoquantidadeSacola:{
        fontSize: 14,
        fontWeight: 'bold',
        width:'100%',
        textAlign:'center',
        marginBottom:8
      },

      textoValor:{
        fontSize: 14,
        color: '#c1c1c1',
        fontWeight: 'bold',
        width:'100%',
        textAlign:'center',
        marginBottom:50
      },




})