import React from 'react';

import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';



export function ComponenteProduto() {

  const fotoProduto = '../../assets/produto.png'
  
    return (
      <TouchableOpacity >
        
        <View style={style.componenteRecomendado} >

            <View style={style.quadrado} >
            <Image
                style={style.imagem}
                source={require(fotoProduto)}
            />

            </View>

            <View style={style.TextoQuadrado}>
              <Text style={style.TextoTitulo} > Descrição produto </Text>
              <Text style={style.Preco}> R$ 00,00</Text>
            </View>

          </View>
      </TouchableOpacity>
    )
}


const style = StyleSheet.create({
      
   
    
      componenteRecomendado: {
        marginHorizontal: 8,
        backgroundColor: '#fff',
        elevation: 8,
        borderRadius:12,
        marginBottom:20
      },
    
      quadrado: {
        width: '100%',
        height: 98,
        backgroundColor: '#c1c1c1',
        borderTopLeftRadius:12,
        borderTopRightRadius:12
      },

      imagem:{
        width: '100%',
        height: 98,
        
        borderTopLeftRadius:12,
        borderTopRightRadius:12
      },
    
      TextoQuadrado: {
        paddingTop: 10,
        backgroundColor: '#fff',
        borderBottomLeftRadius:12,
        borderBottomRightRadius:12,
        
        
      },
    
      TextoTitulo: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#8D8D8D'
      },
    
      Preco: {
        fontSize: 14,
        fontWeight:'bold',
        marginVertical:10
      },
    
    
  
  })