import React from 'react';

import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export function ComponenteProdutoSacola() {

    const fotoProduto = '../../assets/produto.png'

    return (
        

            <View style={style.componenteRecomendado} >

                <View style={style.quadrado} >
                <Image
                style={style.imagem}
                source={require(fotoProduto)}
            />
                </View>

                <View style={style.TextoQuadrado}>
                    <Text style={style.TextoTitulo} > Descrição produto </Text>
                    <Text style={style.Preco}> R$ 00,00</Text>

                    <View style={style.barraAdicionar}>
                        <TouchableOpacity>
                            <Text style={style.Adicionar}>-</Text>
                        </TouchableOpacity>

                        <Text style={style.quantidade}>01</Text>

                        <TouchableOpacity>
                            <Text style={style.Adicionar}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity>
                    <MaterialIcons
                        style={style.inputfavorite}
                        name='delete'
                        color={'#333'}
                        size={20}
                    />
                </TouchableOpacity>

            </View>
        
    )
}


const style = StyleSheet.create({



    componenteRecomendado: {
        marginHorizontal: 8,
        backgroundColor: '#fff',
        elevation: 8,
        borderRadius: 12,
        marginBottom: 20,
        flexDirection: 'row',
        marginBottom:25
    },

    quadrado: {
        width: '20%',
        height: '100%',
        backgroundColor: '#c1c1c1',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,

    },
    imagem: {
        width: '100%',
        height: 125,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,

    },

    TextoQuadrado: {
        paddingTop: 10,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,


    },

    TextoTitulo: {
        fontSize: 16,
        //fontWeight: 'bold',
        color: '#8D8D8D',
        marginLeft: 20
    },

    Preco: {
        fontSize: 14,
        fontWeight: 'bold',
        marginVertical: 10,
        marginLeft: 20
    },

    barraAdicionar: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: '50%',
        justifyContent: 'space-between',
        borderRadius: 15,
        marginLeft: 20,
        borderColor: '#63E1FD',
        borderWidth: 2,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },

    Adicionar: {
        fontSize: 22,
        fontWeight: 'bold'
    },

    quantidade: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 4
    },
    inputfavorite: {

        paddingTop: 10,
        paddingRight:50
        
    },



})