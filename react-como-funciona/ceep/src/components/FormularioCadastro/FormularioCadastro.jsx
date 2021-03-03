import { Component } from "react";
import "./estilo.css"

class FormularioCadastro extends Component {
    render() {
        return (
          <form className="form-cadastro">
            <input 
              type="text" 
              placeholder="Título" 
              className="form-cadastro__input"/>
            <textarea 
              rows="15" 
              placeholder="Escreva a sua nota..." 
              className="form-cadastro__input"/>
            <button className="form-cadastro__input form-cadastro__submit">
              Criar Nota
            </button>
          </form>
        );
    }
}

export default FormularioCadastro;