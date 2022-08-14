import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Bemvindo } from "../telas/Bemvindo";
import { Home } from '../telas/home';
import { Login } from "../telas/Login";


const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes(){
    return(
       <Navigator
        screenOptions={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'pink',
            headerShown: false,
            

        }}
       >
        <Screen
            name="BemVindo"
            component={Bemvindo}
            options={{
                tabBarLabel: 'tela 1',
                
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons
                        name='home'
                        color={color}
                        size={size}
                    />
                )
                
            }}
        />
       
       
        <Screen
            name="Login"
            component={Login}
            options={{
                tabBarLabel: 'Login',
                tabBarIcon: ({color, size}) => (
                    <MaterialIcons
                        name='add'
                        color={color}
                        size={size}
                    />
                )
            }}
        />
       
       <Screen
            name="Home"
            component={Home}
        />
       

       </Navigator> 
    )
}