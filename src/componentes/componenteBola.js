import React from 'react';

import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';



export function ComponenteBola(props) {
    return (
        <View style={style.componente1}>

        <View style={style.bola}>

        </View>

        <View style={style.TextoBola}>
          <Text>{props.nome}</Text>
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
  
    TextoBola:{
      paddingTop:10,
      fontSize:12
    }
    
    
  
  
  })