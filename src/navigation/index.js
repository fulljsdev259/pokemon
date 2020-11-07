import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Dashboard from '../screens/DashBoard';

const Stack = createStackNavigator();

const routes = [
    {
        component:Login,
        name:'Login'
    },
    {
        component:Dashboard,
        name:'Dashboard'
    }
]

export default function Navigation() {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login"  >
            {
              routes.map((route)=>{
                return(
                  <Stack.Screen
                    key={route.name} 
                    name={route.name} 
                    component={route.component} 
                    options={{ headerShown: false }} 
                  />
                )
              })
            }
          </Stack.Navigator>
        </NavigationContainer>
    )
}
