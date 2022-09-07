import React from 'react';

import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';



export function ComponenteRetangulo(props) {

  const capaEvento = '../../assets/capa-evento.png'

  return (
    <View style={style.componenteRecomendado}>
      <TouchableOpacity onPress={() => { props.props.navigation.navigate(props.route) }}>
        <View style={style.retangulo}>
          <Image
            style={style.imagem}
            source={require(capaEvento)}
          />
        </View>
      </TouchableOpacity>

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
    elevation: 1,
    marginTop: 15
  },

  imagem: {
    width: '100%',
    height: '100%',
    backgroundColor: '#c1c1c1',
    borderRadius: 12,
    
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

  nomeEmpresa: {
    fontSize: 14
  },

})