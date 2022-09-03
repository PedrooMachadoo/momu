import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';



export function ComponenteListaPessoas(props) {
    return (
        <View style={style.containerBolaPerfil}>
            <View style={style.BolaEmpresa}>

            </View>

            <View style={style.direita}>
                <Text style={style.nomePerfil}> Nome pessoa </Text>

            </View>

            <View style={style.icones}>
                <TouchableOpacity>
                    <MaterialIcons
                        style={style.input4}
                        name='alternate-email'
                        color={'#63E1FD'}
                        size={30}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <MaterialIcons
                        style={style.input4}
                        name='alternate-email'
                        color={'#63E1FD'}
                        size={30}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <MaterialIcons
                        style={style.input4}
                        name='whatshot'
                        color={'#FEDB41'}
                        size={30}
                    />
                </TouchableOpacity>
            </View>

        </View>
    )
}


const style = StyleSheet.create({

    direita: {
        marginLeft: 15
    },

    containerBolaPerfil: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        marginBottom: 20
    },

    BolaEmpresa: {
        width: 60,
        height: 60,
        backgroundColor: '#c2c2c2',
        borderRadius: 50,
        elevation: 1,
        marginRight: 1
    },

    nomePerfil: {
        fontSize: 16,
        marginRight: 30

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