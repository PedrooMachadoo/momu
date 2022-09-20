import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { ComponenteLocaisEncontro } from '../componentes/componenteLocaisEncontro';

export function MatchEncontro({ navigation }) {


    function abrirTela3() {
        navigation.navigate('BemVindo')
    }

    function EsqueciSenha() {
        navigation.navigate('EsqueciSenha')
    }

    return (
        <View style={style.container}>

            <View style={style.boxtitulo}>
                <Text style={style.titulo}>Locais Encontros</Text>
            </View>


            <View>
                <ComponenteLocaisEncontro nome={'Pista'} />
                <ComponenteLocaisEncontro nome={'Pista Premium '} />
                <ComponenteLocaisEncontro nome={'Perto do Palco'} />
                <ComponenteLocaisEncontro nome={'Perto Escadas'} />
                <ComponenteLocaisEncontro nome={'Camarote'} />
                <ComponenteLocaisEncontro nome={'Área Fumantes'} />
                
            </View>


        </View>
    );
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        paddingTop: 40

    },

    arrowBack: {
        width: 24,
        height: 24,
        marginBottom: 20
    },

    botaoBack: {
        paddingHorizontal: 30,

    },

    boxText: {
        alignItems: 'center',
        justifyContent: 'center',

    },

    boxText2: {
        alignItems: 'center',
        justifyContent: 'center',

    },

    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingBottom: 30
    },

    botao: {
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        width: "90%",
        backgroundColor: '#63E1FD',
        paddingTop: 25,
        paddingBottom: 25,
        marginLeft: 20,
        marginTop: 40
    },

    textbotao: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },

    boxText: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },

    subTitulo2: {
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 20,
        fontWeight: 'bold',
        color: '#c1c1c1',
    }

})