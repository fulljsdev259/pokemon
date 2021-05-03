import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pokemons from '../screens/Pokemons';
import PokemonDetails from '../screens/PokemonDetails';

const Stack = createStackNavigator();

const routes = [
    {
        component:Pokemons,
        name:'Pokemons'
    },
    {
        component:PokemonDetails,
        name:'PokemonDetails'
    }
]

export default function Navigation() {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Pokemons"  >
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
