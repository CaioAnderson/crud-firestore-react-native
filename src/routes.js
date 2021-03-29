import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

//Screens
import Main from './screens/Main';
import EditScreen from './screens/EditScreen';
import AddScreen from './screens/AddScreen';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator>

                <Screen name='Main' component={Main}
                    options={{ headerShown: false }} />

                <Screen name='Edit' component={EditScreen}
                    options={{ title: 'Editar usuário', headerTransparent: true }} />

                <Screen name='Add' component={AddScreen}
                    options={{ title: 'Adicionar usuário', headerTransparent: true }} />



            </Navigator>
        </NavigationContainer>
    )
}