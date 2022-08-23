import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';


import { Home } from '../telas/home';
import { Teste } from '../telas/teste';
import { Explorar } from '../telas/explorar';
import { Ingresso } from '../telas/Ingresso';
import { Favorito } from '../telas/Favorito';
import { Perfil } from '../telas/perfil';

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: '#63E1FD',
                tabBarInactiveTintColor: '#c5c5c5',
                headerShown: false,
            }}
        >
            <Screen
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


            <Screen
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

            <Screen
                name="Ingresso"
                component={Ingresso}
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

            <Screen
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

            <Screen
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

            { /* <Screen
            name="Ingresso"
            component={}
        />*/}


        </Navigator>
    )
}