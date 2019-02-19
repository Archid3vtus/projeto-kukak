import React, { Component } from 'react';
import M from 'materialize-css';
import axios from 'axios';

import Navbar from './components/Navbar';
import Form from './components/Form';
import Modal from './components/Modal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      percapita: ''
    }
  }

  submit = (data) => {
    axios.post('/api/correios/calculate', data)
      .then(response => {
        this.setState(response.data);
      })
  }

  render() {
    return (
      <div>
        <Navbar color="blue" title="Kukak correios" />
        <div className="container">
          <Form submit={this.submit} />
          <Modal name={this.state.name} address={this.state.address} percapita={this.state.percapita} visibility={this.state.visibility}/>
        </div>
      </div>
    );
  }
}

export default App;
