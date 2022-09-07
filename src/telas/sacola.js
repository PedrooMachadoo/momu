import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { ComponenteBola } from '../componentes/componenteBola';
import { ComponenteQuadrado } from '../componentes/componenteQuadrado';
import { ComponenteRetangulo } from '../componentes/componenteRetangulo';

import { ComponenteTimeline } from '../componentes/componenteTimeline';
import { ComponenteProdutoSacola } from '../componentes/componenteProdutoSacola';


export function Sacola({ navigation }) {

    

    function AbriFormaDePagamento() {
        navigation.navigate('FormaDePagamento')
    }

    return (

        <View style={style.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar style="auto" />


                <View style={style.componenteRecomendado} >

                    <View style={style.container1} >
                        <ComponenteProdutoSacola />
                        <ComponenteProdutoSacola />

                        <TouchableOpacity>
                            <Text style={style.add}>Adicionar mais produtos</Text>
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity>

                        <View style={style.container2} >


                            <MaterialIcons
                                style={style.inputfavorite}
                                name='confirmation-number'
                                color={'#333'}
                                size={32}
                            />


                            <View >
                                <Text style={style.textAddCupom}>Adicionar cupom de desconto</Text>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <View style={style.container3}>
                        <View style={style.linha}>
                            <View style={style.coluna1}>
                                <Text style={style.Produto}>01 produto</Text>
                                <Text style={style.TextTotal}>Total a pagar</Text>
                            </View>
                            <View style={style.coluna2}>
                                <Text style={style.valorProduto}>R$ 00,00</Text>
                                <Text style={style.totalPagar}>R$ 00,00</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={style.botao} onPress={AbriFormaDePagamento} >
                            <Text style={style.textbotao}>Selecionar forma de pagamento</Text>
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
        backgroundColor: '#fff',
    },

    componenteRecomendado: {

        backgroundColor: '#f4f4f4',
        // elevation: 3,

        marginBottom: 20,
        //marginTop:80

    },

    container1: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffff',
        //borderRadius: 100,
        paddingTop: 20,
        marginBottom: 20,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
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
        backgroundColor: '#ffff',
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
        marginVertical:30
    },

    textbotao: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'

    },

    add: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#9B9B9B',
        marginBottom: 20
    },

    textAddCupom: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 5,
        marginLeft: 10
    },

    linha:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginHorizontal:15
    },

    Produto:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333'

    },
    TextTotal:{
        fontSize: 14,
        fontWeight: 'bold',
    },

    valorProduto:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333'

    },
    totalPagar:{
        fontSize: 14,
        fontWeight: 'bold',
    },
    
})