import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Bemvindo } from "../telas/Bemvindo";
import { Home } from '../telas/home';
import { Login } from "../telas/Login";


const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes(){
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
       
       <Screen
            name="Home"
            component={Home}
        />
       

       </Navigator> 
    )
}