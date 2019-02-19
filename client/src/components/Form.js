import React, { Component } from 'react'
import M from 'materialize-css';


class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            cep: '',
            income: '',
            people: ''
        };

        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault();
        this.props.submit(this.state);
    }

    onChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        M.updateTextFields();

        return (
            <div>
                <div className="row">
                    <form className="col s12" onSubmit={this.submit}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" id="name" className="validate" onChange={this.onChange} />
                                <label htmlFor="name">Nome</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" id="cep" className="validate" onChange={this.onChange} required />
                                <label htmlFor="cep">CEP</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" id="income" className="validate" onChange={this.onChange} required />
                                <label htmlFor="income">Renda</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" id="people" className="validate" onChange={this.onChange} required />
                                <label htmlFor="people">Dependentes</label>
                            </div>
                        </div>
                        <div className="center-align">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;