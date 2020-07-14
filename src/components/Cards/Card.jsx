import React, { Component } from "react";
import { Container, Typography } from "@material-ui/core";

class Card extends Component {
  render() {
    return (
      <Container>
        <Typography variant="h4">{this.props.dados.titulo}</Typography>
        <Typography variant="body1">{this.props.dados.conteudo}</Typography>
      </Container>
    );
  }
}

export default Card;
