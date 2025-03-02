import React from "react";
import {
  AppContainer,
  AppTitle,
  Description,
} from "./components/app-style/styles";
import { ShoppingList } from "./components/shopping-list"; // Ajuste para minúsculo

export function App() {
  return (
    <AppContainer>
      <AppTitle>Minha Lista de Compras</AppTitle>
      <ShoppingList />
      <Description>
        Adicione, exclua, edite ou confirme suas compras.
      </Description>
    </AppContainer>
  );
}

export default App;
