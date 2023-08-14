import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SingIn from '../pages/singIn';
import SingOn from '../pages/singOn';
import Splash from '../pages/splash';

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name='Splash'
                component={Splash}
                options={{
                    headerShown: false,
                }}
            />

            <AuthStack.Screen 
                name='SingIn'
                component={SingIn}
                options={{
                    headerShown: false,
                }}
            />

            <AuthStack.Screen 
                name='SingOn'
                component={SingOn}
                options={{
                    headerShown: false,
                }}
            />
        
        </AuthStack.Navigator>
    )
}
