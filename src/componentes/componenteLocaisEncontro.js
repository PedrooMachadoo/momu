import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';



export function ComponenteLocaisEncontro(props) {
    
    return (
        
        <View style={style.containerBolaPerfil}>
            
            <View style={style.espaco}>
                <Text style={style.nomeLocal}>{props.nome}</Text>
            </View>

            <View style={style.icones}>

                <TouchableOpacity >
                    <MaterialIcons
                        style={style.input4}
                        name='arrow-forward'
                        color={'#63E1FD'}
                        size={30}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const style = StyleSheet.create({

    containerBolaPerfil: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        marginBottom: 20,
        borderBottomWidth:1,
        paddingBottom:15,
        borderColor: '#c1c1c1'
    },

    nomeLocal: {
        fontSize: 16,
    },

    input4: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8,
        paddingHorizontal:5,
        marginLeft: 1
    },

    icones: {
        flexDirection: 'row',
    }

    
})