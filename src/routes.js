import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './pages/login/login';
import { Registro } from './pages/login/registro';
import { RedefinirSenha } from './pages/login/redefinirSenha';
import { Home } from './pages/perfil/home';

const Stack = createStackNavigator();

export function Routes({sexo}){
    return(        
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Registro"
                component={Registro}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RedefinirSenha"
                component={RedefinirSenha}
                options={{ headerShown: false }}
            />         
            <Stack.Screen
                 name="Home"
                 options={{ headerShown: false }}
               >
                 {() => <Home sexo={sexo} />}
            </Stack.Screen>                   
        </Stack.Navigator>    
    )
}