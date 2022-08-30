import { NavigationContainer } from '@react-navigation/native';

import { StackRoutes } from './stack.routes'
import { TabRoutes } from './tab.routes';
import { DrawerRoutes } from './drawer.routes';
import { TabTesteRoutes } from './teste.routes';



export function Routes() {
    return (
        <NavigationContainer>
            <TabTesteRoutes/>

        </NavigationContainer>
    )
}