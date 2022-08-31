import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { ComponenteBola } from '../componentes/componenteBola';
import { ComponenteQuadrado } from '../componentes/componenteQuadrado';
import { ComponenteRetangulo } from '../componentes/componenteRetangulo';


export function MeuIngresso() {
  return (

    <View style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />


        <View style={style.containerRetangulo}>
          <ComponenteRetangulo />
        </View>

        <View style={style.containerDataLocal}>
          <View>
            <Text style={style.textoData}>Data</Text>
            <Text style={style.conteudo1}> Sex, 7 Set -2021 - 19:00</Text>
          </View>

          <View>
            <TouchableOpacity style={style.botao}>
              <Text style={style.textbotao}>Calendário</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.containerDataLocal}>
          <View>
            <Text style={style.conteudo2}> Estelita - Recife - PE</Text>
          </View>

          <View>
            <TouchableOpacity style={style.botao}>
              <Text style={style.textbotao}>Ver Local</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.containerGeral}>
          <View style={style.esqueda}>

            <Text style={style.codigo}>RPYXKJGE0Q</Text>
            <View style={style.qrCode}></View>

          </View>

          <View style={style.direita}>
            <Text style={style.textoData}>Ingresso</Text>
            <Text style={style.textIngresso}>Nome da Festa</Text>
            <Text style={style.textoData}>Nome</Text>
            <Text style={style.textIngresso}>Nome Pessoa</Text>

            <TouchableOpacity style={style.botao1}>
              <Text style={style.textbotao1}>Entrar</Text>
            </TouchableOpacity>
          </View>
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

  containerRetangulo: {
    paddingHorizontal: 10
  },

  botao: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: "90%",
    backgroundColor: '#63E1FD',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 20,
    margin: 10,
    paddingHorizontal: 10

  },

  textbotao: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'

  },

  botao1: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    
    backgroundColor: '#63E1FD',
    paddingTop: 10,
    paddingBottom: 10,
    margin: 10,
    paddingHorizontal: 30

  },

  textbotao1: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'

  },

  containerDataLocal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10

  },

  conteudo1: {
   // fontWeight: 'bold',
    fontSize: 16
  },

  conteudo2: {
    //fontWeight: 'bold',
    fontSize: 16,
    marginRight: 25,
    marginTop: 15
  },

  textoData: {
    color: '#c1c1c1',
    fontSize: 14,
    marginLeft: 5
  },

  containerGeral: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },

  qrCode: {
    width: 140,
    height: 140,
    backgroundColor: '#c1c1c1',
    borderRadius: 3,
    elevation: 2
  },

  direita: {
    marginTop: 40,
    marginRight: 80

  },

  esqueda: {
    marginLeft: 30
  },

  textIngresso:{
    
    fontSize: 16,
    marginLeft:5
  },

  codigo:{
    fontSize: 22,
    fontWeight:'bold',
    marginBottom:10
  },






})