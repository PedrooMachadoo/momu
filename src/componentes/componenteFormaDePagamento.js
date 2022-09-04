import React from 'react';

import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export function ComponenteFormaPagamento() {


    return (
        <TouchableOpacity>

            <View style={style.container2} >


                <MaterialIcons
                    style={style.inputfavorite}
                    name='payment'
                    color={'#333'}
                    size={32}
                />

                <View >
                    <Text style={style.textAddCupom}>*******0506</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({

    container2: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffff',
        borderRadius: 8,
        paddingTop: 20,
        marginBottom: 10,
        flexDirection: 'row',
        elevation:5

    },

    inputfavorite: {

        textAlign: 'center',
        marginBottom: 15,
        paddingHorizontal: 10

    },

    textAddCupom: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 5,
        marginLeft: 10
    },

})