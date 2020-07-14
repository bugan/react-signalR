import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import { conectar, conexao } from "./Models/Conexao";
import { criarCard, deletarCard, cards } from "./Models/Card";
import "./App.css";
import Conexao from "./components/Conexao";
import Card from "./components/Cards";

function App() {
  const [contador, setCount] = useState(0);
  return (
    <>
      <AppBar position="relative" color="primary">
        <Toolbar>
          <Typography variant="h6">SignalR</Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3} margin="normal">
        <Grid item xs>
          <Conexao conectar={conectar} />
        </Grid>
        <Grid item>
          <Button
            onClick={() => {
              criarCard();
              setCount(contador + 1);
            }}
            variant="contained"
            color="primary"
          >
            Criar Card
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => {
              deletarCard(contador);
              setCount(contador - 1);
            }}
            variant="contained"
            color="secondary"
          >
            Deletar Card
          </Button>
        </Grid>
        <Grid item xs={12}>
          {cards.map((dados, index) => {
            console.log(dados);
            return <Card dados={dados} key={index} />;
          })}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
