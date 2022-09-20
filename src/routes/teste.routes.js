import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet } from 'react-native';


import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';


import { Home } from '../telas/home';
import { Explorar } from '../telas/explorar';
import { Ingresso } from '../telas/Ingresso';
import { Favorito } from '../telas/Favorito';
import { Perfil } from '../telas/perfil';

import {MeuIngresso} from '../telas/meuIngresso'
import { Timeline } from '../telas/Timeline';
import { ListaPessoas } from '../telas/ListaPesooas';
import { Cardapio } from '../telas/cardapio';
import { DetalheProduto } from '../telas/DetalheProduto';
import { AddProduto } from '../telas/addProduto';
import { Sacola } from '../telas/sacola';
import { FormaDePagamento } from '../telas/formaDePagamento';
import { FinalizarCompra } from '../telas/FinalizarCompra';
import { DeuMatch } from '../telas/DeuMatch';

import { PerfilSeguindo } from '../telas/PerfilSeguindo';
import { PerfilConquista } from '../telas/PerfilConquista';
import { MatchEncontro } from '../telas/MatchEncontro';


const TesteStack = createNativeStackNavigator();
const TesteTab = createBottomTabNavigator();

function MeuIngressoStack () {
    return (
        <TesteStack.Navigator>
             <TesteStack.Screen
                name="Ingresso"
                component={Ingresso}
                options={{
                    
                    headerShown: false,
                }}
                
            />

            <TesteStack.Screen
                name="MeuIngresso"
                options={{
                    title: 'Pedido: Nº0000000',
                    headerTitleAlign: 'center',
                }}
                component={MeuIngresso}
            />

            <TesteStack.Screen
                name="Timeline"
                options={{
                   // title: 'time line',
                   // headerTitleAlign: 'center',
                   headerShown: false,
                }}
                component={Timeline}
            />

            <TesteStack.Screen
                name="ListaPessoas"
                options={{
                   // title: 'Listapessoas',
                   // headerTitleAlign: 'center',
                   headerShown: false,
                }}
                component={ListaPessoas}
            />

            <TesteStack.Screen
                name="Cardapio"
                options={{
                   // title: 'Cardapio',
                   // headerTitleAlign: 'center',
                   headerShown: false,
                }}
                component={Cardapio}
            />

            <TesteStack.Screen
                name="DetalheProduto"
                options={{
                    title: '',
                   // headerTitleAlign: 'center',
                   //headerShown: false,
                }}
                component={DetalheProduto}
            />

            <TesteStack.Screen
                name="AddProduto"
                options={{
                    title: '',
                   // headerTitleAlign: 'center',
                   //headerShown: false,
                }}
                component={AddProduto}
            />

            <TesteStack.Screen
                name="Sacola"
                options={{
                    title: 'Sacola',
                    headerTitleAlign: 'center',
                   //headerShown: false,
                }}
                component={Sacola}
            />

            <TesteStack.Screen
                name="FormaDePagamento"
                options={{
                    title: 'Forma de pagamento',
                    headerTitleAlign: 'center',
                   //headerShown: false,
                }}
                component={FormaDePagamento}
            />

            <TesteStack.Screen
                name="FinalizarCompra"
                options={{
                    title: 'Finalizar Compra',
                    headerTitleAlign: 'center',
                   //headerShown: false,
                }}
                component={FinalizarCompra}
            />

            <TesteStack.Screen
                name="DeuMatch"
                options={{
                    title: 'match',
                    headerTitleAlign: 'center',
                   //headerShown: false,
                }}
                component={DeuMatch}
            />

            <TesteStack.Screen
                name="MatchEncontro"
                options={{
                    title: '',
                   // headerTitleAlign: 'center',
                   //headerShown: false,
                }}
                component={MatchEncontro}
            />
        </TesteStack.Navigator>
    )
}

function PerfilStack () {
    return (
        <TesteStack.Navigator>
             <TesteStack.Screen
                name="Perfil"
                component={Perfil}
                options={{
                headerShown: false,
                }}
                
            />

            <TesteStack.Screen
                name="PerfilSeguindo"
                options={{
                    title: 'Perfilseguindo',
                    headerTitleAlign: 'center',
                    headerShown: false,
                }}
                component={PerfilSeguindo}
            />

            <TesteStack.Screen
                name="PerfilConquista"
                options={{
                    title: 'PerfilConquista',
                    headerTitleAlign: 'center',
                    headerShown: false,
                }}
                component={PerfilConquista}
            />
        </TesteStack.Navigator>
    )
}

function TabRoutes(){
    return (
        <TesteTab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#63E1FD',
                tabBarInactiveTintColor: 'black',
                headerShown: false,
                tabBarShowLabel: false
            }}
        >
            <TesteTab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name='home'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />


            <TesteTab.Screen
                name="Explorar"
                component={Explorar}
                options={{
                    tabBarLabel: 'Explorar',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name='explore'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />

            <TesteTab.Screen
                //style={style.iconeIngresso}
                name="Ingresso"
                component={MeuIngressoStack}
                options={{
                    tabBarLabel: 'Ingresso',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name='confirmation-number'
                            color={color}
                            size={40}
                        />
                    )
                }}
            />
        
            

            <TesteTab.Screen
                name="Favorito"
                component={Favorito}
                options={{
                    tabBarLabel: 'Favorito',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name='favorite'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />

            <TesteTab.Screen
                name="PerfilAtivo"
                component={PerfilStack}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name='person'
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </TesteTab.Navigator>
    )
}

export function TabTesteRoutes() {
   

    

    return (
        <TabRoutes/>
        
       
    )
}

{/*const style = StyleSheet.create({
   
    iconeIngresso:{
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        shadowColor: '#9C27B0',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    }
  })*/}