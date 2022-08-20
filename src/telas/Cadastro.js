import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';


export function Cadastro({ navigation }) {


    function abrirTela2() {
        navigation.navigate('BemVindo')
    }



    return (
        <View style={style.container}>

            {/*<View style={style.titulo} onPress={abrirTela2}>
                <Image
                    style={style.arrowBack}
                    
                    source={require('../../assets/arrow.png')}
                />

            </View>*/}
            <View style={style.titulo}>
                <MaterialIcons
                    name='favorite'
                    color={'black'}
                    size={40}
                    onPress={abrirTela2}
                />

            </View>

            <View style={style.boxtitulo}>
                <Text style={style.titulo}>Preencha as informações para efetuar o seu cadastro</Text>
            </View>

            <View style={style.boxForm}>

                <View style={style.form}>
                    <Text style={style.tituloForm}>Nome</Text>
                    <TextInput style={style.inputForm} placeholder='Insira seu nome...' keyboardType='default'></TextInput>
                </View>

                <View style={style.form}>
                    <Text style={style.tituloForm}>E-mail</Text>
                    <TextInput style={style.inputForm} placeholder='Ex. momu@gmail.com...' keyboardType='email-address'></TextInput>
                </View>

                <Text style={style.tituloForm}>Senha</Text>
                <TextInput style={style.inputForm} placeholder='Insira sua senha...' keyboardType='visible-password'></TextInput>
            </View>

            <TouchableOpacity
                style={style.botao}

            >
                <Text style={style.textbotao}>Finalizar cadastro</Text>
            </TouchableOpacity>

            {/*<Button title=' voltar' onPress={() => navigation.goBack()} /> const navigation = useNavigation();*/}

        </View>
    );
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        paddingTop: 60

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
        padding: 30,
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
        margin: 10,
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

})