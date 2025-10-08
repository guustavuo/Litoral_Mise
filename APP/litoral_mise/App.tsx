import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CategoriasScreen from "./src/screens/CategoriasScreen";
import CadastroScreen from "./src/screens/CadastroScreen";
import EventoDetalhesScreen from "./src/screens/EventoDetalhesScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Categorias" component={CategoriasScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="EventoDetalhes" component={EventoDetalhesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
