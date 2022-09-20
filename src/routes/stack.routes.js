import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';


import { Bemvindo } from "../telas/Bemvindo";
import { Login } from "../telas/Login";
import { Home } from '../telas/home';
import { Cadastro } from '../telas/Cadastro';
import { Teste } from '../telas/teste';
import { EsqueciSenha } from '../telas/esqueciSenha';
import { NovaSenha } from '../telas/novaSenha';


const { Screen, Navigator, Group } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator
            screenOptions={{
                /* tudo que colocar aqui vai para todas as telas */

            }}
        >
            <Screen
                name="BemVindo"
                options={{
                    title: 'tela 1 (Bem vindo)',
                    headerTitleAlign: 'center',
                    headerShown: false,

                }}
                component={Bemvindo}
            />

            <Group>
                <Screen
                    name="Login"
                    options={{
                        title: ' ',
                        headerTitleAlign: 'center',
                        headerStyle: {
                           // backgroundColor: 'green'
                        },
                        //headerTintColor: '#ffff',
                       // headerShown: false,

                    }}
                    component={Login}
                />
            </Group>

            <Screen
                name="Cadastro"
                options={{
                    title: '',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#ffff'


                    },
                    headerTintColor: '#000',
                    //headerShown: false,
                }}
                component={Cadastro}
            />

            <Screen
                name="EsqueciSenha"
                options={{
                    title: ' ',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#ffff',
                        
                        
                    },
                    headerTintColor: '#000',
                    //headerShown: false,
                }}
                component={EsqueciSenha}
            />

            <Screen
                name="NovaSenha"
                options={{
                    title: ' se',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#ffff',
                        
                        
                    },
                    headerTintColor: '#000',
                    //headerShown: false,
                }}
                component={NovaSenha}
            />

            <Screen
                name="teste"
                options={{
                    title: 'tela 2 (Login)',
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: 'green'
                    },
                    headerTintColor: '#ffff',
                    

                }}
                component={Teste}
            />

        </Navigator>
    )
}