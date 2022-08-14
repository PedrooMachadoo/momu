import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';




export function Bemvindo({ navigation }) {

  function abrirTela() {
    navigation.navigate('Login')
  }

  function abrirTelaCadastro() {
    navigation.navigate('Cadastro')
  }

  return (

    <View style={style.container}>

      <StatusBar style="auto" />

      <View style={style.boxlogo}>
        <Image
        style={style.logo}
        source={require('../../assets/momu-logo.png')}
        />

      </View>

      <View style={style.boxText}>
        <Text style={style.titulo}>Bem-vindo</Text>

        <Text style={style.subTitulo}>Bem-vindo ao MOMU, o maior APP para seu final de semana</Text>
      </View>


      <TouchableOpacity
        style={style.botao}
        onPress={abrirTelaCadastro}
      >
        <Text style={style.textbotao}>Sou novo</Text>
      </TouchableOpacity>

      <View style={style.boxText}>
        <Text style={style.subTitulo2} onPress={abrirTela} >Já tenho conta</Text>
      </View>

    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingTop: 80

  },

  boxlogo: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingTop: 60 

  },

  logo:{
    width: 220,
    height: 220,
  },

  boxText: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 16

  },

  subTitulo: {
    fontSize: 16,
    
    textAlign: 'center',
    paddingHorizontal: 20,

  },

  subTitulo2: {
    fontSize: 16,
    paddingBottom: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: 'bold'

  },

  botao: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: "90%",
    backgroundColor: '#63E1FD',
    paddingTop: 25,
    paddingBottom: 25,
    marginLeft: 20,
    margin: 10
  },

  textbotao: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'

  },

})