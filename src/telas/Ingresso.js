import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { ComponenteBola } from '../componentes/componenteBola';
import { ComponenteQuadrado } from '../componentes/componenteQuadrado';
import { ComponenteRetangulo } from '../componentes/componenteRetangulo';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export function Ingresso(props) {

  return (
    <View style={style.container}>

      <StatusBar style="auto" />


      <View style={style.headerbackground}>

      </View>

      <View style={style.absolute}>


        <View style={style.containerTitulo}>

          <Text style={style.Titulo}>Meus Ingressos</Text>



          <MaterialIcons
            style={style.input3}
            name='help'
            color={'#63E1FD'}
            size={35}

          />



        </View>

        <View style={style.containerAbas}>

          <View style={style.abas}>

            <View>
              <Text style={style.textoAtivo}>Próximos eventos</Text>
              <View style={style.tracoAtivo}></View>
            </View>
            

            <TouchableOpacity>
              <Text style={style.texto2}>Encerrados</Text>
              <View style={style.tracoInativo}></View>
            </TouchableOpacity>
          </View>

        </View>

      </View>



      <View style={style.containerRetangulo}>
        <ScrollView style={{ marginTop: 120 }} showsVerticalScrollIndicator={false}>
          <ComponenteRetangulo props={props} route={'MeuIngresso'} />
          <ComponenteRetangulo />
          <ComponenteRetangulo />
          <ComponenteRetangulo />
          <ComponenteRetangulo />
          <ComponenteRetangulo />
          <ComponenteRetangulo />
          <ComponenteRetangulo />
        </ScrollView>
      </View>


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
    height: '8%',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 1,

  },

  absolute: {
    position: 'absolute',

  },

  containerTitulo: {
    paddingHorizontal: 20,
    paddingTop: 5,
    marginTop: 80,
    flexDirection: 'row'

  },

  Titulo: {
    fontWeight: 'bold',
    fontSize: 22
  },

  containerAbas: {
    paddingHorizontal: 20,
    paddingTop: 23,
  },

  abas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },

  texto2: {
    // paddingLeft: 120,
    fontSize: 16,
    color: '#c1c1c1',
    fontWeight: 'bold',

  },

  textoAtivo: {

    fontSize: 16,
    fontWeight: 'bold'
  },

  tracoAtivo: {
    marginTop:8,
    width:'100%',
    height:5,
    backgroundColor:'#FEDB41',
    borderRadius:10
  },

  tracoInativo: {
    marginTop:8,
    width:'100%',
    height:5,
    
  },

  input3: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 150



  },

  containerRetangulo: {
    paddingVertical: 15,
    paddingHorizontal: 10
  }

})