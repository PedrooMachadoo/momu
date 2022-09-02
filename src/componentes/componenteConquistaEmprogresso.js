import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';



export function ComponenteConquistaEmProgresso(props) {
    return (
        <View style={style.containerBolaPerfil}>
          <View style={style.BolaEmpresa}>

          </View>

          <View style={style.direita}>
            <Text style={style.nomeConquista}> Titulo Conquista </Text>
            <Text style={style.resumo}> Vá em 3 festas usando nosso....</Text>
            
          </View>

          <View>
              <Text> 01/03</Text>
            </View>

        </View>
    )
}


const style = StyleSheet.create({
      
    direita: {
        marginLeft: 1
      },
    
      containerBolaPerfil: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        marginBottom:20 
      },

      BolaEmpresa: {
        width: 60,
        height: 60,
        backgroundColor: '#c2c2c2',
        borderRadius: 50,
        elevation: 1,
        marginRight: 1
      },
    
      nomeConquista: {
        fontSize: 16,
        fontWeight:'bold',
       
        
      },

      resumo: {
        fontSize: 12,
        
      },
    

      input4: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 8,
        marginLeft: 1
      },
  })