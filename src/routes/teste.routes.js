import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';


import { Home } from '../telas/home';
import { Explorar } from '../telas/explorar';
import { Ingresso } from '../telas/Ingresso';
import { Favorito } from '../telas/Favorito';
import { Perfil } from '../telas/perfil';

import {MeuIngresso} from '../telas/meuIngresso'


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
                name="Perfil"
                component={Perfil}
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