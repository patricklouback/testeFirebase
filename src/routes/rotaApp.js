import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import {Tela1} from '../screens/tela1'
import {TelaCamera} from '../screens/telaCamera'

export function RotaApp(){

    return (
        <Navigator screenOptions={{
            headerShown: false,
        }}>
            <Screen
                name = 'tela1'
                component={Tela1}
            />
            <Screen
                name = 'telaCamera'
                component={TelaCamera}
            />

        </Navigator>
    )
}