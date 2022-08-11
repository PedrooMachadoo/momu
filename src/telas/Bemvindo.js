import { View, Button } from 'react-native';
import React from 'react';


export function Bemvindo() {

  function abrirTela(){

  }

  return (
    <View style={{ flex:1, backgroundColor: 'blue', justifyContent:'center'}}>
        
        <Button
          title='ir pra login' 
          onPress={abrirTela} 
        />

    </View>
  );
}