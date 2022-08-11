import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Bemvindo } from "../telas/Bemvindo";
import { Login } from "../telas/Login";


const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes(){
    return(
       <Navigator>
        <Screen
            name="BemVindo"
            component={Bemvindo}
        />
       
        <Screen
            name="Login"
            component={Login}
        />
       
       
       </Navigator> 
    )
}