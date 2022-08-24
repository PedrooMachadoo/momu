import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { ComponenteBola } from '../componentes/componenteBola';
import { ComponenteQuadrado } from '../componentes/componenteQuadrado';
import { ComponenteRetangulo } from '../componentes/componenteRetangulo';

export function Explorar() {
  return (
    <View style={style.container}>

      

      <StatusBar style="auto" />


      <View style={style.maps}>

      </View>

      <View style={style.absolute}>

        <View style={style.filtro}>

        {/*<TextInput
            style={style.input}
            placeholder='pesquisar'
            autoCorrect={false}
          />*/}

          <Text style={style.Botaofiltro}>
            Filtro
          </Text>

          <MaterialIcons
            style={style.input2}
            name='tune'
            color={'black'}
            size={24}

          />

        </View>

        <View style={style.bola}>

        <MaterialIcons
            style={style.input3}
            name='my-location'
            color={'black'}
            size={24}

          />

        </View>

      </View>

      <View style={style.containerQuadrado}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <ComponenteQuadrado />
          <ComponenteQuadrado />
          <ComponenteQuadrado />
          <ComponenteQuadrado />
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

  maps: {
    width: '100%',
    height: '60%',
    backgroundColor: '#63E1FD',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
    //marginBottom: 200
  },

  absolute: {
    position: 'absolute',
    flexDirection: 'row',
    //justifyContent: 'space-between'
    
  },

    filtro: {
    marginTop: 80,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: 'row',
    //justifyContent: 'space-between',
    width: '55%',
    alignItems: 'center',
    paddingTop: 280,
    
  },

  Botaofiltro: {
    
    backgroundColor: 'white',
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
    textAlign: 'center',
    fontSize : 20,
    fontWeight: 'bold',
    paddingVertical:9,
    paddingHorizontal:10

  },

  input2: {
    backgroundColor: 'white',
    paddingRight: 10,
    paddingVertical: 10,
    paddingLeft: 15,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
  },

  input3: {
    
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:13

    
  },

  bola:{
    width:50,
    height:50,
    backgroundColor: '#ffff',
    borderRadius:50,
    elevation: 1,
    marginTop: 360,
    marginLeft:100
    
    
    
    
  },

  containerQuadrado: {

    flexDirection: 'row',
    paddingVertical: 30,
    paddingHorizontal: 10
  },

})