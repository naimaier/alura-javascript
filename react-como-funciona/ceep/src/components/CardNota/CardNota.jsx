import { Component } from "react";
import "./estilo.css"

class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header className="card_nota__cabecalho">
          <h3 className="card-nota__titulo">Título</h3>
        </header>
        <p className="card-nota__texto">Conteúdo da nota</p>
      </section>
    );
  }
}

export default CardNota;