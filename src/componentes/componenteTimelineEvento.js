import React from 'react';

import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';



export function ComponenteTimelineEvento(props) {

    const fotoEvento = '../../assets/timeline-evento.png'

    return (
        <View style={style.timelineBranca}>
            <View style={style.timelineAzul}>
                <View style={style.componenteRecomendado}>
                    <TouchableOpacity onPress={() => { props.props.navigation.navigate(props.route) }}>
                        <View style={style.retangulo}>
                            <Image
                                style={style.imagem}
                                source={require(fotoEvento)}
                            />

                        </View>
                    </TouchableOpacity>
                    <View style={style.containerBolaEmpresa}>
                        <View style={style.BolaEmpresa}>

                        </View>

                        <Text style={style.nomeEmpresa}> Nome usuario </Text>

                    </View>

                </View>
            </View>
        </View>
    )
}


const style = StyleSheet.create({



    componenteRecomendado: {
        marginHorizontal: 8,
        marginBottom: 30
    },

    retangulo: {
        width: 350,
        height: 158,
        backgroundColor: '#c1c1c1',
        borderRadius: 12,
        elevation: 1,
        marginTop: 15
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
    imagem:{
        width: '100%',
        height: '100%',
        borderRadius: 12,
        
    }

})