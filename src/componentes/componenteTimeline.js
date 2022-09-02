import React from 'react';

import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';



export function ComponenteTimeline(props) {
  
    return (
        <View style={style.componenteRecomendado}>
            <TouchableOpacity onPress={() => {props.props.navigation.navigate(props.route)}}>
            <View  style={style.retangulo}>
      
              
            </View>
            </TouchableOpacity>
            <View style={style.containerBolaEmpresa}>
              <View style={style.BolaEmpresa}>

              </View>

              <Text style={style.nomeEmpresa}> Nome usuario </Text>

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
        marginTop:15
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
        marginTop:16
    
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
        fontSize:14,
      },
  
  })