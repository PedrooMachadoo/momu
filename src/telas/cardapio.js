import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { ComponenteBola } from '../componentes/componenteBola';
import { ComponenteQuadrado } from '../componentes/componenteQuadrado';
import { ComponenteRetangulo } from '../componentes/componenteRetangulo';

import { ComponenteTimeline } from '../componentes/componenteTimeline';
import { ComponenteProduto } from '../componentes/componenteProduto';

import { ComponenteCapaEvento } from '../componentes/componenteCapaevento';


export function Cardapio({ navigation }) {

    function AbriListaPessoas() {
        navigation.navigate('ListaPessoas')
    }

    function AbrilTimeline() {
        navigation.navigate('Timeline')
    }

    function VoltarMeuIngresso() {
        navigation.navigate('MeuIngresso')
    }

    function AbriDetalheProduto() {
        navigation.navigate('DetalheProduto')
    }

    return (

        <View style={style.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar style="auto" />


                <View>
                <ComponenteCapaEvento/>
                </View>

                <View style={style.absolutefavorite}>

                    <View style={style.arrowBack}>
                        <MaterialIcons
                            style={style.iconeArrowBaclk}
                            name='arrow-back'
                            color={'black'}
                            size={30}
                            onPress={VoltarMeuIngresso}
                        />
                    </View>

                    <View style={style.bolafavorite}>

                        <MaterialIcons
                            style={style.inputfavorite}
                            name='favorite-border'
                            color={'#fff'}
                            size={35}
                        />

                    </View>

                </View>

                <View style={style.containerBolaPerfil}>
                    <View style={style.BolaEmpresa}>

                    </View>

                    <View style={style.direita}>
                        <Text style={style.nomePerfil}> Nome do evento </Text>
                        <Text style={style.dataPerfil}> alguma coisa do evento</Text>
                    </View>

                </View>


                <View style={style.containerNavegacao}>
                    <TouchableOpacity>
                        <Text style={style.textNavegacao} onPress={AbrilTimeline}>Timeline</Text>
                        <View style={style.tracoInativo}></View>
                    </TouchableOpacity>


                    <TouchableOpacity>
                    <Text style={style.textNavegacao} onPress={AbriListaPessoas}>Lista de pessoas</Text>
                    <View style={style.tracoInativo}></View>
                    </TouchableOpacity>


                    <View>
                        <Text style={style.textNavegacaoAtivo} >Card??pio</Text>
                        <View style={style.tracoAtivo}></View>
                    </View>
                </View>

                <View style={style.barrapesquisa}>

                    <MaterialIcons
                        style={style.input2}
                        name='search'
                        color={'#63E1FD'}
                        size={30}

                    />

                    <TextInput
                        style={style.input}
                        placeholder='pesquisar'
                        autoCorrect={false}
                    />


                </View>


                <View style={style.containerInfos}>
                    <View>
                        <Text style={style.Titulo} onPress={AbriDetalheProduto}>Categoria produto</Text>
                    <View style={style.categoria}>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                        <ComponenteProduto />
                        <ComponenteProduto/>
                        <ComponenteProduto/>
                        <ComponenteProduto/>
                        <ComponenteProduto/>
                        </ScrollView>
                    </View>
                    </View>

                    <View>
                        <Text style={style.Titulo}>Categoria produto</Text>
                    <View style={style.categoria}>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                        <ComponenteProduto/>
                        <ComponenteProduto/>
                        <ComponenteProduto/>
                        <ComponenteProduto/>
                        <ComponenteProduto/>
                        </ScrollView>
                    </View>
                    </View>

                    <View>
                        <Text style={style.Titulo}>Categoria produto</Text>
                    <View style={style.categoria}>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                        <ComponenteProduto/>
                        <ComponenteProduto/>
                        <ComponenteProduto/>
                        <ComponenteProduto/>
                        <ComponenteProduto/>
                        </ScrollView>
                    </View>
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

    headerbackground: {
        width: '100%',
        height: 210,
        backgroundColor: 'yellow',
        borderBottomLeftRadius: 169,
        marginBottom: 50
    },

    absolute: {
        position: 'absolute',
    },


    input3: {

        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8,
        paddingRight: 1
    },
    input4: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8,
        marginLeft: 1
    },

    bola: {
        width: 32,
        height: 32,
        backgroundColor: '#63E1FD',
        borderRadius: 50,
        elevation: 1,
        marginTop: 295,
        marginLeft: 55,
        elevation: 10
    },

    

    containerBolaPerfil: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 30
    },

    direita: {
        marginLeft: 15
    },

    BolaEmpresa: {
        width: 60,
        height: 60,
        backgroundColor: '#c2c2c2',
        borderRadius: 50,
        elevation: 1,
        marginRight: 10
    },

    nomePerfil: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    dataPerfil: {
        fontSize: 14
    },

    containerNavegacao: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 30,
        justifyContent: 'space-around',


    },

    textNavegacaoAtivo: {
        fontSize: 16,
        fontWeight: 'bold',
        //color:'#c1c1c1',

    },

    textNavegacao: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#c1c1c1',

    },

    containerInfos: {
        alignItems: 'center',

    },


    absolutefavorite: {
        position: 'absolute',
    },


    inputfavorite: {

        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 18,
        paddingRight: 3


    },

    bolafavorite: {
        width: 70,
        height: 70,
        backgroundColor: '#63E1FD',
        borderRadius: 50,
        marginTop: 85,
        marginLeft: 270,
        elevation: 10

    },

    arrowBack: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 50,
        marginLeft: 20,
        paddingHorizontal: 15,
        marginTop: 45
    },

    iconeArrowBaclk: {

        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingRight: 1


    },

    barrapesquisa: {
        marginTop:10,
        marginBottom:30,
        flexDirection: 'row',
        width: '90%',
        backgroundColor:'#fff',
        elevation:5,
        borderRadius:10,
        marginLeft:20,
        borderColor:'#63E1FD',
        borderWidth:3
        
        
        
    
      },
    
      input: {
        flex: 1,
        backgroundColor: '#fdfdfd',
        borderBottomRightRadius: 6,
        borderTopRightRadius: 6,
        
        //elevation:5
      },
    
      input2: {
        backgroundColor: '#fdfdfd',
        paddingRight: 10,
        paddingVertical: 10,
        paddingLeft: 15,
        borderBottomLeftRadius: 6,
        borderTopLeftRadius: 6,
       // elevation:5
      },

      categoria:{
        flexDirection: 'row',
        marginBottom:20
      },

      Titulo: {
        fontWeight: 'bold',
        fontSize: 22,
        marginLeft:25,
        marginBottom:20
      },

      tracoAtivo: {
        marginTop:8,
        width:'100%',
        height:5,
        backgroundColor:'#FEDB41',
        borderRadius:10
      },
    
      tracoInativo: {
        marginTop:8,
        width:'100%',
        height:5,
      },



})