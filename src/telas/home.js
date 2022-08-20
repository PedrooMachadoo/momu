import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';


export function Home() {
  return (
    <View style={style.container}>

      <StatusBar style="auto" />

      <View style={style.headerbackground}>

        <View style={style.barrapesquisa}>
          
          <MaterialIcons
          style={style.input2}
            name='favorite'
            color={'#63E1FD'}
            size={25}
            
          />

          <TextInput
            style={style.input}
            placeholder='pesquisar'
            autoCorrect={false}
          />

          
        </View>

      </View>

    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',


  },

  headerbackground: {
    width: 450,
    height: 338,
    backgroundColor: '#63E1FD',
    borderBottomLeftRadius: 169
  },

  barrapesquisa: {
    paddingTop:80,
    paddingLeft: 25,
    paddingRight:25,
    flexDirection: 'row',
    justifyContent:'space-between',
  },

  input:{
    flex:1,
    backgroundColor:'white',
    height: 40,
    marginRight:50,
    borderBottomRightRadius:6,
    borderTopRightRadius:6,
    paddingVertical:25,
    fontSize: 20,
    elevation: 5
    
    
  },

  input2:{
    backgroundColor: 'white',
    paddingRight:10,
    paddingVertical:10,
    paddingLeft:15,
    borderBottomLeftRadius:6,
    borderTopLeftRadius:6,
    elevation: 5

  },


})