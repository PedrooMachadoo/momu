import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { ComponenteBola } from '../componentes/componenteBola';
import { ComponenteQuadrado } from '../componentes/componenteQuadrado';
import { ComponenteRetangulo } from '../componentes/componenteRetangulo';


export function Home() {
  return (

    <View style={style.container}>
      <ScrollView>
        <StatusBar style="auto" />


        <View style={style.headerbackground}>

        </View>

        <View style={style.absolute}>
          <View style={style.barrapesquisa}>

            <MaterialIcons
              style={style.input2}
              name='search'
              color={'#63E1FD'}
              size={30}

            />

            <TextInput
              style={style.input}
              placeholder='pesquisar'
              autoCorrect={false}
            />


          </View>

          <View style={style.containerBola}>
            <ScrollView horizontal={true}>
              <ComponenteBola nome={'teste 1'}/>
              <ComponenteBola nome={'teste 1'}/>
              <ComponenteBola nome={'teste 1'}/>
              <ComponenteBola nome={'teste 1'}/>
              <ComponenteBola nome={'teste 1'}/>
              <ComponenteBola nome={'teste 1'}/>
              <ComponenteBola nome={'teste 1'}/>
            </ScrollView>
          </View>

          <View style={style.containerTitulo}>

            <Text style={style.Titulo}>Sugestão para você</Text>

          </View>

          <View style={style.containerQuadrado}>

            <ComponenteQuadrado />
            <ComponenteQuadrado />

          </View>



        </View>

        <View style={style.containerTitulo}>

          <Text style={style.Titulo}>Perto de você</Text>

        </View>

        <View style={style.containerRetangulo}>

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
    width: 450,
    height: 450,
    backgroundColor: '#63E1FD',
    borderBottomLeftRadius: 169,
    marginBottom: 200
  },

  absolute: {
    position: 'absolute',



  },

  barrapesquisa: {
    paddingTop: 80,
    paddingLeft: 25,
    paddingRight: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },

  input: {
    flex: 1,
    backgroundColor: 'white',
    height: 40,
    marginRight: 50,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
    paddingVertical: 25,
    fontSize: 20,
    elevation: 4


  },

  input2: {
    backgroundColor: 'white',
    paddingRight: 10,
    paddingVertical: 10,
    paddingLeft: 15,
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
    elevation: 4

  },

  containerBola: {

    flexDirection: 'row',
    paddingVertical: 30,
    paddingHorizontal: 10,

  },

  containerTitulo: {
    paddingHorizontal: 20,
    paddingTop: 5

  },

  Titulo: {
    fontWeight: 'bold',
    fontSize: 22

  },

  containerQuadrado: {

    flexDirection: 'row',
    paddingVertical: 30,
    paddingHorizontal: 10
  },

  containerRetangulo: {
    paddingVertical: 15,
    paddingHorizontal: 10
  }



})