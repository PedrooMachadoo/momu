import React from 'react';

import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';



export function ComponenteBola(props) {

  const imagem = '../../assets/momu-logo.png'
  
    return (
        <View style={style.componente1}>

        <View style={style.bola}>
        <Image
        style={style.imagem}
        source={require(imagem)}
        />
        </View>

        <View style={style.TextoContainer}>
          <Text style={style.TextoBola}>{props.nome}</Text>
        </View>

        </View>
    )
}


const style = StyleSheet.create({
      
    componente1:{
      marginHorizontal:8

    },
  
    bola:{
      width:80,
      height:80,
      backgroundColor: '#ffff',
      borderRadius:50,
      elevation: 1
    },

    imagem:{
      width: '100%',
      height: '100%',
    },
  
    TextoContainer:{
      paddingTop:10,
    }
    
    
  
  
  })