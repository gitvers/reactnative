
import React from 'react';
import type { PropsWithChildren } from 'react';

//Navigation
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

//screens
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import App from './App';

export type RootStackParamList = {
    App: any
    Screen1: any
    Screen2: any
};
const Stack = createNativeStackNavigator<RootStackParamList>()

function Nav() {


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='App'>

                <Stack.Screen
                    name='App'
                    component={App}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name='Screen1'
                    component={Screen1}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name='Screen2'
                    component={Screen2}
                    options={{
                        title: 'Movie Details'
                    }}
                />


            </Stack.Navigator>
        </NavigationContainer>
    );
}



export default Nav;