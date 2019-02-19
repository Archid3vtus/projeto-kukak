import React, { Component } from 'react'
import M from 'materialize-css';

class Modal extends Component {
    componentDidMount() {
        M.Modal.init(this.Modal);
    }

    componentWillReceiveProps() {
        M.Modal.getInstance(this.Modal).open();
    }

    render() {
        return (
            <div>
                <div ref={Modal => { this.Modal = Modal }} id="modal1" className="modal">
                    <div className="modal-content">
                        <h4>Sucesso!</h4>
                        <p>{this.props.name ? "Seu nome: " + this.props.name : ""}</p>
                        <p>Renda per capita: {this.props.percapita}</p>
                        <p>Endereço: {this.props.address.logradouro}, {this.props.address.complemento} - {this.props.address.bairro}, {this.props.address.localidade} - {this.props.address.uf}, {this.props.address.cep}</p>
                    </div>
                    <div className="modal-footer">
                        <a href="./" className="modal-close waves-effect waves-green btn-flat">Fechar</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;