import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';


export function Login({ navigation }) {


  function abrirHome() {
    navigation.navigate('Home')
  }

  function EsqueciSenha() {
    navigation.navigate('EsqueciSenha')
  }

  return (
    <View style={style.container}>

      <View style={style.boxtitulo}>
        <Text style={style.titulo}>Insira suas informações para realizar o login</Text>
      </View>

      <View style={style.boxForm}>


        <View style={style.form}>
          <Text style={style.tituloForm}>E-mail</Text>
          <TextInput style={style.inputForm} placeholder='Ex. momu@gmail.com...' keyboardType='email-address'></TextInput>
        </View>

        <Text style={style.tituloForm}>Senha</Text>
        <TextInput style={style.inputForm} placeholder='Insira sua senha...' keyboardType='visible-password'></TextInput>
      </View>

      <TouchableOpacity style={style.botao} onPress={abrirHome}>
        <Text style={style.textbotao}>Entrar</Text>
      </TouchableOpacity>

      {/*<Button title=' voltar' onPress={() => navigation.goBack()} /> const navigation = useNavigation();*/}

      <View style={style.boxText}>
        <Text style={style.subTitulo2} onPress={EsqueciSenha} >Esqueci minha senha</Text>
      </View>

    </View>
  );
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingTop: 40

  },

  arrowBack: {
    width: 24,
    height: 24,
    marginBottom: 20
  },

  botaoBack: {
    paddingHorizontal: 30,

  },

  boxText: {
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  boxText2: {
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 30
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
    marginTop: 40
  },

  textbotao: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },

  boxForm: {
    width: "100%",
    height: "auto",
    marginTop: 15,
    padding: 25,
  },

  tituloForm: {
    color: "#000",
    fontSize: 14,
    opacity: 0.2,
    marginTop: 10,
  },

  form: {
    marginBottom: 15,
  },

  inputForm: {
    fontSize: 18,
    width: "90%",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#fff",


  },

  boxText: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },

  subTitulo2: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: 'bold',
    color: '#c1c1c1',
  }

})