import React from 'react';

import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export function ComponenteCapaEvento(props) {

    const fotoCapaevento = '../../assets/capa-evento.png'

    return (
        <View style={style.headerbackground}>
            <Image
                style={style.imagem}
                source={require(fotoCapaevento)}
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