import React, { Component } from "react";
import { TextField, Button, Typography } from "@material-ui/core";

class Conexao extends Component {
  constructor(props) {
    super(props);
    this.state = { url: "", error: "teste" };
  }

  tentarConexao(event) {
    event.preventDefault();
    this.conectar();
  }

  async conectar() {
    try {
      await this.props.conectar(this.state.url);
    } catch (e) {
      let estado = { ...this.state };
      estado.error = e.message;
      this.setState(estado);
    }
  }

  atribuirUrl(event) {
    this.setState({ url: event.target.value });
  }
  render() {
    return (
      <>
        <form onSubmit={this.tentarConexao.bind(this)}>
          <TextField
            onChange={this.atribuirUrl.bind(this)}
            value={this.state.url}
            variant="outlined"
            label="URL Conexão"
          />
          <Button type="submit" variant="contained" color="primary">
            Conectar ao servidor
          </Button>
        </form>
        <Typography variant="h6" color="error">
          {this.state.error}
        </Typography>
      </>
    );
  }
}

export default Conexao;
