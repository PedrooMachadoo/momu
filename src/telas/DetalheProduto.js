import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { ComponenteBola } from '../componentes/componenteBola';
import { ComponenteQuadrado } from '../componentes/componenteQuadrado';
import { ComponenteRetangulo } from '../componentes/componenteRetangulo';

import { ComponenteTimeline } from '../componentes/componenteTimeline';
import { ComponenteProduto } from '../componentes/componenteProduto';


export function DetalheProduto({ navigation }) {

    const fotoDetalheProduto = '../../assets/produto.png'

    function AbriAddProduto() {
        navigation.navigate('AddProduto')
    }

    return (

        <View style={style.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar style="auto" />


                <View style={style.componenteRecomendado} >

                    <View style={style.quadrado} >
                        <Image
                            style={style.imagem}
                            source={require(fotoDetalheProduto)}
                        />
                    </View>

                    <View style={style.TextoQuadrado}>
                        <Text style={style.TextoTitulo} > Descrição produto </Text>
                        <Text style={style.Preco}> R$ 00,00</Text>
                    </View>

                </View>

                <View style={style.barraAdicionar}>
                    <TouchableOpacity>
                        <Text style={style.Adicionar}>-</Text>
                    </TouchableOpacity>

                    <Text style={style.quantidade}>01</Text>

                    <TouchableOpacity>
                        <Text style={style.Adicionar}>+</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={style.botao} onPress={AbriAddProduto} >
                    <Text style={style.textbotao}>Adicionar</Text>
                </TouchableOpacity>

                <Text style={style.textoquantidadeSacola}>Você ja possui 0 itens na sacola</Text>





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

    quadrado: {
        width: '100%',
        height: 300,
        backgroundColor: '#c1c1c1',

    },

    imagem: {
        width: '100%',
        height: 300,
    },

    TextoQuadrado: {
        paddingTop: 10,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginHorizontal: 15


    },

    TextoTitulo: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#8D8D8D'
    },

    Preco: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 10
    },

    barraAdicionar: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '90%',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginLeft: 20,
        borderColor: '#63E1FD',
        borderWidth: 2,
        paddingVertical: 10,
        paddingHorizontal: 10
    },

    Adicionar: {
        fontSize: 22,
        fontWeight: 'bold'
    },

    quantidade: {
        fontSize: 20,
        fontWeight: 'bold',
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