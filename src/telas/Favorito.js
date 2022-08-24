import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { ComponenteBola } from '../componentes/componenteBola';
import { ComponenteQuadrado } from '../componentes/componenteQuadrado';
import { ComponenteRetangulo } from '../componentes/componenteRetangulo';


export function Favorito() {
  return (

    <View style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />


        <View style={style.headerbackground}>

        </View>

        <View style={style.absolute}>
         

          <View style={style.bola}>

        <MaterialIcons
            style={style.input3}
            name='favorite'
            color={'#fff'}
            size={35}
          />

        </View>

        </View>

        <View style={style.containerTitulo}>

          <Text style={style.Titulo}>Favoritos </Text>

        </View>

        <View style={style.containerRetangulo}>

          <ComponenteRetangulo />
          <ComponenteRetangulo />
          <ComponenteRetangulo />
          <ComponenteRetangulo />
          <ComponenteRetangulo />
          <ComponenteRetangulo />
          <ComponenteRetangulo />

        </View>

      </ScrollView>
    </View>

  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headerbackground: {
    width: '100%',
    height: 210,
    backgroundColor: 'yellow',
    borderBottomLeftRadius: 169,
    marginBottom: 50
  },

  absolute: {
    position: 'absolute',
  },

 
  input3: {
    
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:18,
    paddingRight:3

    
  },

  bola:{
    width:70,
    height:70,
    backgroundColor: '#63E1FD',
    borderRadius:50,
    elevation: 1,
    marginTop: 170,
    marginLeft:270,
    elevation:10
    
  },

  containerTitulo: {
    paddingHorizontal: 20,
    paddingTop: 5

  },

  Titulo: {
    fontWeight: 'bold',
    fontSize: 22

  },

  containerRetangulo: {
    paddingVertical: 15,
    paddingHorizontal: 10
  }



})