import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const styleForm = {
  width: 160,
}

const marginTop = {
  marginTop: 30,
}

var apiURL = 'https://api.coinmarketcap.com/v1/ticker/?limit=150';
var xhr = new XMLHttpRequest();
xhr.open('GET', apiURL, false);
xhr.send();
var data = JSON.parse(xhr.responseText);
console.log(xhr.status);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDRGN: '0',
      amountIOTA: '0',
      amountSUB: '0',
      amountDATA: '0',
      rateDRGN: '',
      rateIOTA: '',
      rateSUB: '',
      rateDATA: '',
      valueDRGN: '0',
      valueIOTA: '0',
      valueSUB: '0',
      valueDATA: '0',
      valueAll: '0'
    };

    this.handleChangeDRGN = this.handleChangeDRGN.bind(this);
    this.handleChangeIOTA = this.handleChangeIOTA.bind(this);
    this.handleChangeSUB = this.handleChangeSUB.bind(this);
    this.handleChangeDATA = this.handleChangeDATA.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeDRGN(event) {
    this.setState({amountDRGN: event.target.value});
    console.log('DRGN: ' + this.state.amountDRGN);
  }

  handleChangeIOTA(event) {
    this.setState({amountIOTA: event.target.value});
    console.log('IOTA: ' + this.state.amountIOTA);
  }

  handleChangeSUB(event) {
    this.setState({amountSUB: event.target.value});
    console.log('SUB: ' + this.state.amountSUB);
  }

  handleChangeDATA(event) {
    this.setState({amountDATA: event.target.value});
    console.log('DATA: ' + this.state.amountDATA);
  }

  // handleChangeCustom(event){
  //   this.
  // }

  handleSubmit(event) {
    //calculate DRGN
    for(var i = 0; i < data.length; i++) {
      if(data[i].symbol == 'DRGN') {
        var rateDRGN = data[i].price_usd;
        const resultCalcRawDRGN = parseFloat(rateDRGN) * parseFloat(this.state.amountDRGN);
        const resultCalcDRGN = resultCalcRawDRGN.toFixed(2);
        console.log();
        console.log('DRGN: ' + this.state.amountDRGN + " | Rate: " + rateDRGN + ' | ' + resultCalcRawDRGN);
        console.log("DRGN: You have Dragon's in worth of " + resultCalcDRGN + " Dollar");
        this.setState ( {
          valueDRGN: resultCalcDRGN,
          rateDRGN: rateDRGN
        });
      }
    };
    //calculate IOTA
    for(var i = 0; i < data.length; i++) {
      if(data[i].symbol == 'MIOTA') {
        var rateIOTA = data[i].price_usd;
        const resultCalcRawIOTA = parseFloat(rateIOTA) * parseFloat(this.state.amountIOTA);
        const resultCalcIOTA = resultCalcRawIOTA.toFixed(2);
        console.log('IOTA: ' + this.state.amountIOTA + " | Rate: " + rateIOTA + ' | ' + resultCalcRawIOTA);
        console.log("IOTA: You have IOTA's in worth of " + resultCalcIOTA + " Dollar");
        this.setState ( {
          valueIOTA: resultCalcIOTA,
          rateIOTA: rateIOTA
        });
      }
    };
    //calculate Substratum
    for(var i = 0; i < data.length; i++) {
      if(data[i].symbol == 'SUB') {
        var rateSUB = data[i].price_usd;
        const resultCalcRawSUB = parseFloat(rateSUB) * parseFloat(this.state.amountSUB);
        const resultCalcSUB = resultCalcRawSUB.toFixed(2);
        console.log('SUB: ' + this.state.amountSUB + " | Rate: " + rateSUB + ' | ' + resultCalcRawSUB);
        console.log("SUB: You have SUB's in worth of " + resultCalcSUB + " Dollar");
        this.setState ( {
          valueSUB: resultCalcSUB,
          rateSUB: rateSUB
        });
      }
    };
    //calculate DATA
    for(var i = 0; i < data.length; i++) {
      if(data[i].symbol == 'DATA') {
        var rateDATA = data[i].price_usd;
        const resultCalcRawDATA = parseFloat(rateDATA) * parseFloat(this.state.amountDATA);
        const resultCalcDATA = resultCalcRawDATA.toFixed(2);
        console.log('DATA: ' + this.state.amountDATA + " | Rate: " + rateDATA + ' | ' + resultCalcRawDATA);
        console.log("DATA: You have DATA's in worth of " + resultCalcDATA + " Dollar");
        this.setState ( {
          valueDATA: resultCalcDATA,
          rateDATA: rateDATA
        });
      }
    };

    //sandthis.setState({valueAll: calcAll});
    console.log(this.state.valueAll);
    console.log(this.props.children);

    event.preventDefault();
  }

  render() {
    var calcAll = (
      Number(this.state.valueDRGN) +
      Number(this.state.valueIOTA) +
      Number(this.state.valueSUB) +
      Number(this.state.valueDATA)).toFixed(2);
    return (
      <div className="App">
      <div class="container">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" />
        <h1>Crypto Coin Calculator</h1>
        <form onSubmit={this.handleSubmit} style={marginTop}>
        <div class="row">
          <div class="col-md-3">
              <label><b>Dragonchain</b></label>
              <input type="number" step="0.001" value={this.state.value} onChange={this.handleChangeDRGN} class="form-control"  placeholder="Enter amount"/>
              <b>{this.state.valueDRGN}</b> Dollar<br />
              (Rate: {this.state.rateDRGN} USD)
           </div>
           <div class="col-md-3">
              <label><b>IOTA</b></label>
              <input type="number" step="0.001" value={this.state.value} onChange={this.handleChangeIOTA} class="form-control" placeholder="Enter amount"/>
              IOTA: <b>{this.state.valueIOTA}</b> Dollar<br />
              (Rate: {this.state.rateIOTA} USD)
           </div>
           <div class="col-md-3">
             <label><b>Substratum</b></label>
             <input type="number" step="0.001" value={this.state.value} onChange={this.handleChangeSUB} class="form-control" placeholder="Enter amount"/>
             Substratum: <b>{this.state.valueSUB}</b> Dollar<br />
             (Rate: {this.state.rateSUB} USD)
          </div>
           <div class="col-md-3">
              <label><b>Streamr DATAcoin</b></label>
              <input type="number" step="0.001" value={this.state.value} onChange={this.handleChangeDATA} class="form-control" placeholder="Enter amount"/>
              Streamr DATAcoin: <b>{this.state.valueDATA}</b> Dollar<br />
              (Rate: {this.state.rateDATA} USD)
           </div>
          </div>
        <div class="row" style={marginTop}>
        <div class="col align-self-center">
         <h3>All coins together: {calcAll} Dollar</h3>
         <p><input type="submit" value="Calculate" class="btn btn-primary"/></p>
         </div>
         </div>
       </form>
       </div>
      </div>
    );
  }
}

export default App;
