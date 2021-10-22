import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './main/screens/Login';
import Home from './main/screens/Home';
import Detail from './main/screens/Detail';
import Cart from './main/screens/Cart';
import API from './main/context/API';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <API>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
          <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
          <Stack.Screen options={{ headerShown: false }} name="Detail" component={Detail} />
          <Stack.Screen options={{ headerShown: false }} name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </API>
  );
}
export default App;
