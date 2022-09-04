import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { ComponenteBola } from '../componentes/componenteBola';
import { ComponenteQuadrado } from '../componentes/componenteQuadrado';
import { ComponenteRetangulo } from '../componentes/componenteRetangulo';

import { ComponenteTimeline } from '../componentes/componenteTimeline';
import { ComponenteProdutoSacola } from '../componentes/componenteProdutoSacola';
import { ComponenteFormaPagamento } from '../componentes/componenteFormaDePagamento';


export function FormaDePagamento({ navigation }) {


    function AbriFinalizarCompra() {
        navigation.navigate('FinalizarCompra')
    }

    return (

        <View style={style.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar style="auto" />


                <View style={style.componenteRecomendado} >

                    <Text style={style.Titulo}>Escolha seu cartão</Text>

                    <View>
                        <ComponenteFormaPagamento />
                        <ComponenteFormaPagamento />
                        <ComponenteFormaPagamento />
                        <ComponenteFormaPagamento />
                    </View>


                    <View style={style.container3}>

                        <TouchableOpacity>
                            <Text style={style.addCartao}> Adicionar cartão</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.botao} onPress={AbriFinalizarCompra} >
                            <Text style={style.textbotao}>Finalizar compra</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>
        </View>

    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },

    componenteRecomendado: {

        backgroundColor: '#f4f4f4',
        // elevation: 3,

        marginBottom: 20,
        //marginTop:80

    },

    container2: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffff',
        borderRadius: 8,
        paddingTop: 20,
        marginBottom: 20,
        flexDirection: 'row'

    },

    container3: {
        flex: 1,
        width: '100%',
        
        backgroundColor: '#f4f4f4',
        borderRadius: 8,
        paddingTop: 20,
        marginBottom: 20,

    },

    inputfavorite: {

        textAlign: 'center',
        marginBottom: 15,
        paddingHorizontal: 10

    },

    TextoQuadrado: {
        paddingTop: 10,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginHorizontal: 15


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
        marginVertical: 20
    },

    textbotao: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },

    linha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15
    },
    
    Titulo: {
        fontWeight: 'bold',
        fontSize: 22,
        marginLeft: 15,
        marginVertical: 20
    },

    addCartao:{
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#333'
    }

})