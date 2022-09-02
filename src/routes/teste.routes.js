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

import { PerfilSeguindo } from '../telas/PerfilSeguindo';
import { PerfilConquista } from '../telas/PerfilConquista';


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