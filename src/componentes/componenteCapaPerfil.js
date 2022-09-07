import React from 'react';

import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export function ComponenteCapaPerfil(props) {

    const fotoCapaPerfil = '../../assets/capa-perfil.png'

    return (
        <View style={style.headerbackground}>
            <Image
                style={style.imagem}
                source={require(fotoCapaPerfil)}
            />
        </View>
    )
}


const style = StyleSheet.create({

    headerbackground: {
        width: '100%',
        height: 210,
        backgroundColor: 'yellow',
        borderBottomLeftRadius: 169,
        marginBottom: 50
    },

    imagem:{
        width: '100%',
        height: 210,
        borderBottomLeftRadius: 169,
        marginBottom: 50
    }
})