import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { ComponenteBola } from '../componentes/componenteBola';
import { ComponenteQuadrado } from '../componentes/componenteQuadrado';
import { ComponenteRetangulo } from '../componentes/componenteRetangulo';

import { ComponenteTimeline } from '../componentes/componenteTimeline';
import { ComponenteProduto } from '../componentes/componenteProduto';


export function FinalizarCompra({ navigation }) {


    function AbriTimeline() {
        navigation.navigate('Timeline')
    }

    return (

        <View style={style.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar style="auto" />


                <View style={style.componenteRecomendado} >

                    <View style={style.Qrcode} >

                    <MaterialIcons
                            style={style.inputfavorite}
                            name='qr-code'
                            color={'#000'}
                            size={180}
                        />

                    </View>

                    <View>
                        <Text style={style.textoQrcodeBarman}>Mostre esse QR Code para o barman</Text>
                        <Text style={style.textoValor}>Total de R$00,00</Text>
                    </View>

                </View>

                <View style={style.container3}>
                        <View style={style.linha}>
                            <View style={style.coluna1}>
                                <Text style={style.Produto}>01 produto</Text>
                                <Text style={style.Produto}>02 produto</Text>
                                
                            </View>
                            <View style={style.coluna2}>
                                <Text style={style.valorProduto}>R$ 00,00</Text>
                                <Text style={style.valorProduto}>R$ 00,00</Text>
                                
                            </View>
                        </View>

                        <TouchableOpacity style={style.botao} onPress={AbriTimeline} >
                            <Text style={style.textbotao}>Voltar para o menu</Text>
                        </TouchableOpacity>
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
        
        backgroundColor: '#fff',
       // elevation: 3,

        marginBottom: 20,
        //marginTop:80

    },

    Qrcode: {
        flex:1,
        width: 200,
        height: 200,
        backgroundColor: '#fff',
       // borderRadius: 100,
        marginHorizontal: 95,
        marginTop:50,
        marginBottom:20,
        elevation:15

    },

    inputfavorite: {

        textAlign: 'center',
        paddingTop: 10,
        
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
      textoQrcodeBarman:{
        fontSize: 14,
        fontWeight: 'bold',
        width:'100%',
        textAlign:'center',
        marginBottom:8
      },

      textoValor:{
        fontSize: 25,
        color: '#c1c1c1',
        fontWeight: 'bold',
        width:'100%',
        textAlign:'center',
        marginBottom:30,
        marginTop:10
      },

      container3: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffff',
        borderRadius: 8,
        paddingTop: 20,
        marginBottom: 20,

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