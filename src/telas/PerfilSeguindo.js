import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { ComponenteBola } from '../componentes/componenteBola';
import { ComponenteQuadrado } from '../componentes/componenteQuadrado';
import { ComponenteRetangulo } from '../componentes/componenteRetangulo';
import { ComponentePerfilSeguindo } from '../componentes/componentePerfilSeguindo';

import { ComponenteCapaPerfil } from '../componentes/componenteCapaPerfil';


export function PerfilSeguindo({navigation}) {
  

    function AbrilPerfil() {
        navigation.navigate('Perfil')
      }

      function AbrilPerfilConquista() {
        navigation.navigate('PerfilConquista')
      }

  return (

    <View style={style.container}>
     
        <StatusBar style="auto" />


        <View>
          <ComponenteCapaPerfil />
        </View>

        <View style={style.containerBolaPerfil}>
          <View style={style.BolaEmpresa}>

          </View>

          <View style={style.direita}>
            <Text style={style.nomePerfil}> Nome pessoa </Text>
            <Text style={style.dataPerfil}> membro desde Setembro 2000 </Text>
          </View>

        </View>

        <View style={style.absolute}>


          <View style={style.bola}>

            <MaterialIcons
              style={style.input3}
              name='edit'
              color={'#fff'}
              size={16}
            />

          </View>

        </View>

        <View style={style.containerNavegacao}>
          <TouchableOpacity>
            <Text style={style.textNavegacao} onPress={AbrilPerfil} >Infos</Text>
            <View style={style.tracoInativo}></View>
          </TouchableOpacity>

          <View>
            <Text style={style.textNavegacaoAtivo}>Seguindo</Text>
            <View style={style.tracoAtivo}></View>
          </View>

          <TouchableOpacity>
            <Text style={style.textNavegacao} onPress={AbrilPerfilConquista}>Conquista</Text>
            <View style={style.tracoInativo}></View>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.containerInfos}>
          <ComponentePerfilSeguindo/>
          <ComponentePerfilSeguindo/>
          <ComponentePerfilSeguindo/>
          <ComponentePerfilSeguindo/>
          <ComponentePerfilSeguindo/>
          <ComponentePerfilSeguindo/>
          <ComponentePerfilSeguindo/>
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

    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    paddingRight: 1
  },
  input4: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    marginLeft: 1
  },

  bola: {
    width: 32,
    height: 32,
    backgroundColor: '#63E1FD',
    borderRadius: 50,
    elevation: 1,
    marginTop: 295,
    marginLeft: 55,
    elevation: 10

  },

  containerTitulo: {
    paddingHorizontal: 20,
    paddingTop: 5

  },

  tituloInfos: {
    fontSize: 14,
    color: '#c1c1c1'
  },

  nome: {
    fontSize: 16,

  },

  containerRetangulo: {
    paddingVertical: 15,
    paddingHorizontal: 10
  },

  containerBolaPerfil: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20
  },

  direita: {
    marginLeft: 15
  },

  BolaEmpresa: {
    width: 60,
    height: 60,
    backgroundColor: '#c2c2c2',
    borderRadius: 50,
    elevation: 1,
    marginRight: 10
  },

  nomePerfil: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  dataPerfil: {
    fontSize: 14
  },

  containerNavegacao: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginVertical: 30,
    justifyContent: 'space-around'
  },

  textNavegacaoAtivo: {
    fontSize: 16,
    fontWeight: 'bold',
    //color:'#c1c1c1',

  },

  textNavegacao: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#c1c1c1',

  },

  containerInfos: {
    marginHorizontal: 20
  },

  linha: {
    flexDirection: 'row',
    marginBottom: 36,
    justifyContent: 'space-between'
  },

  containerEspecifico: {

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
})