import React from 'react';

import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export function ComponenteTimelineFlechada(props) {

    const fotoBG = '../../assets/timeline-flechada.png'

    return (
        <View style={style.timelineBranca}>
            <View style={style.timelineAmarela}>
                <View style={style.componenteRecomendado}>
                    <TouchableOpacity onPress={() => { props.props.navigation.navigate(props.route) }}>
                        <View style={style.retangulo}>
                            <Image
                                style={style.imagem}
                                source={require(fotoBG)}
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
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={style.containerBolaEmpresa}>
                        <View style={style.BolaEmpresa}>

                        </View>

                        <Text style={style.nomeEmpresa}> Nome usuario </Text>

                        <TouchableOpacity
                            style={style.botao}
                        //onPress={abrirTelaCadastro}
                        >
                            <Text style={style.textbotao}>Confirmar</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        </View>
    )
}


const style = StyleSheet.create({



    componenteRecomendado: {
        marginHorizontal: 8,
        marginBottom: 10
    },

    retangulo: {
        width: 350,
        height: 158,
        backgroundColor: '#c1c1c1',
        borderRadius: 12,
        elevation: 1,
        marginTop: 15
    },

    match: {
        width: '70%',
        height: '85%',
        backgroundColor: '#fff',
        borderRadius: 12,
        elevation: 20,
        marginHorizontal: 50,
        marginVertical: 12,
    },

    TextoQuadrado: {
        paddingTop: 10,
    },

    TextoTitulo: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    TextoLocal: {
        fontSize: 16,
        paddingBottom: 10
    },

    containerBolaEmpresa: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16

    },

    BolaEmpresa: {
        width: 30,
        height: 30,
        backgroundColor: '#c2c2c2',
        borderRadius: 50,
        elevation: 1,
        marginRight: 10
    },

    nomeEmpresa: {
        fontSize: 14,
    },

    timelineAmarela: {

        width: '100%',
        backgroundColor: '#FEDB41',
        borderBottomRightRadius: 56,
        borderTopLeftRadius: 56,
        alignItems: 'center',
        paddingTop: 30
    },
    timelineBranca: {
        width: '100%',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 56,
        alignItems: 'center',
    },

    timelineAzul: {

        width: '100%',
        backgroundColor: '#63E1FD',
        borderBottomRightRadius: 56,
        borderTopLeftRadius: 56,
        paddingTop: 30,
        alignItems: 'center',
    },

    botao: {
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        width: "50%",
        backgroundColor: '#63E1FD',
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 20,
        margin: 10
    },

    textbotao: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },

    BolaMatch: {
        width: 50,
        height: 50,
        backgroundColor: '#c1c1c1',
        borderRadius: 50,
        elevation: 1,
        marginLeft: 45

    },

    BolaIcone: {
        width: 40,
        height: 40,
        // backgroundColor: '#c1c1c1',
        borderRadius: 50,
        marginLeft: 55,
        paddingTop: 5,
        position: 'absolute'

    },

    BolaMatch2: {
        width: 50,
        height: 50,
        backgroundColor: '#c1c1c1',
        borderRadius: 50,
        elevation: 1,
        marginLeft: 100

    },

    ContainerMatch: {
        marginTop: 10,
        flexDirection: 'row'
    },

    inputfavorite: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 3,
        paddingRight: 3
    },

    ContainerTextoMatch: {

    },
    MatchTitulo: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    MatchTexto: {
        textAlign: 'center',
        fontSize: 14,
    },
    imagem:{
        width: '100%',
        height: '100%',
        borderRadius: 12,
        elevation: 1,
        position:'absolute'
    }

})