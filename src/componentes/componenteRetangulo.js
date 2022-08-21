import React from 'react';

import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';



export function ComponenteRetangulo() {
    return (
        <View style={style.componenteRecomendado}>

            <View style={style.retangulo}>

            </View>

            <View style={style.TextoQuadrado}>
              <Text style={style.TextoTitulo}> Titulo evento </Text>
              <Text style={style.TextoLocal}> Local evento</Text>
            </View>

            <View style={style.containerBolaEmpresa}>
              <View style={style.BolaEmpresa}>

              </View>

              <Text style={style.nomeEmpresa}> Nome empresa </Text>

            </View>

          </View>
    )
}


const style = StyleSheet.create({
      
   
    
      componenteRecomendado: {
        marginHorizontal: 8
    
    
      },
    
      retangulo: {
        width: 350,
        height: 158,
        backgroundColor: '#c1c1c1',
        borderRadius: 12,
        elevation: 1
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
    
      },
    
      BolaEmpresa: {
        width: 30,
        height: 30,
        backgroundColor: '#c2c2c2',
        borderRadius: 50,
        elevation: 1,
        marginRight: 10
      },
    
      nomeEmpresa:{
        fontSize:14
      },
  
  })