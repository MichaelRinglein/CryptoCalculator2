import React, { Component } from 'react';
import { Button, Container, Dropdown, Grid, Header, Image, Input, Menu, Segment } from 'semantic-ui-react';
import './App.css';

const marginTop = {
  marginTop: 30,
}

const options = [
  { key: '.com', text: '.com', value: '.com' },
  { key: '.net', text: '.net', value: '.net' },
  { key: '.org', text: '.org', value: '.org' },
]

var apiURL = 'https://api.coinmarketcap.com/v1/ticker/?limit=200';
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
      amountINT: '0',
      rateDRGN: '',
      rateIOTA: '',
      rateSUB: '',
      rateDATA: '',
      rateINT:'',
      rateDRGNPrint: '',
      rateIOTAPrint: '',
      rateSUBPrint: '',
      rateDATAPrint: '',
      rateINTPrint: '',
      valueDRGN: '0',
      valueIOTA: '0',
      valueSUB: '0',
      valueDATA: '0',
      valueINT: '0',
      valueAll: '0'
    };

    this.handleChangeDRGN = this.handleChangeDRGN.bind(this);
    this.handleChangeIOTA = this.handleChangeIOTA.bind(this);
    this.handleChangeSUB = this.handleChangeSUB.bind(this);
    this.handleChangeDATA = this.handleChangeDATA.bind(this);
    this.handleChangeINT = this.handleChangeINT.bind(this);
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

  handleChangeINT(event) {
    this.setState({amountINT: event.target.value});
    console.log('INT: ' + this.state.amountINT);
  }

  // handleChangeCustom(event){
  //   this.
  // }

  handleSubmit(event) {
    //calculate DRGN
    for(var i = 0; i < data.length; i++) {
      if(data[i].symbol === 'DRGN') {
        var rateDRGN = data[i].price_usd;
        var rateDRGNPrint = ('($ ' + rateDRGN + ')');
        const resultCalcRawDRGN = parseFloat(rateDRGN) * parseFloat(this.state.amountDRGN);
        const resultCalcDRGN = resultCalcRawDRGN.toFixed(2);
        console.log('DRGN: ' + this.state.amountDRGN + " | Rate: " + rateDRGN + ' | ' + resultCalcRawDRGN);
        console.log("DRGN: You have Dragon's in worth of " + resultCalcDRGN + " Dollar");
        this.setState ( {
          rateDRGN: rateDRGN,
          rateDRGNPrint: rateDRGNPrint,
          valueDRGN: resultCalcDRGN
        });
      }
    };
    //calculate IOTA
    for(var i = 0; i < data.length; i++) {
      if(data[i].symbol === 'MIOTA') {
        var rateIOTA = data[i].price_usd;
        var rateIOTAPrint = ('($ ' + rateIOTA + ')');
        const resultCalcRawIOTA = parseFloat(rateIOTA) * parseFloat(this.state.amountIOTA);
        const resultCalcIOTA = resultCalcRawIOTA.toFixed(2);
        console.log('IOTA: ' + this.state.amountIOTA + " | Rate: " + rateIOTA + ' | ' + resultCalcRawIOTA);
        console.log("IOTA: You have IOTA's in worth of " + resultCalcIOTA + " Dollar");
        this.setState ( {
          rateIOTA: rateIOTA,
          rateIOTAPrint: rateIOTAPrint,
          valueIOTA: resultCalcIOTA
        });
      }
    };
    //calculate Substratum
    for(var i = 0; i < data.length; i++) {
      if(data[i].symbol === 'SUB') {
        var rateSUB = data[i].price_usd;
        var rateSUBPrint = ('($ ' + rateSUB + ')');
        const resultCalcRawSUB = parseFloat(rateSUB) * parseFloat(this.state.amountSUB);
        const resultCalcSUB = resultCalcRawSUB.toFixed(2);
        console.log('SUB: ' + this.state.amountSUB + " | Rate: " + rateSUB + ' | ' + resultCalcRawSUB);
        console.log("SUB: You have SUB's in worth of " + resultCalcSUB + " Dollar");
        this.setState ( {
          rateSUB: rateSUB,
          rateSUBPrint: rateSUBPrint,
          valueSUB: resultCalcSUB
        });
      }
    };
    //calculate DATA
    for(var i = 0; i < data.length; i++) {
      if(data[i].symbol === 'DATA') {
        var rateDATA = data[i].price_usd;
        var rateDATAPrint = ('($ ' + rateDATA + ')');
        const resultCalcRawDATA = parseFloat(rateDATA) * parseFloat(this.state.amountDATA);
        const resultCalcDATA = resultCalcRawDATA.toFixed(2);
        console.log('DATA: ' + this.state.amountDATA + " | Rate: " + rateDATA + ' | ' + resultCalcRawDATA);
        console.log("DATA: You have DATA's in worth of " + resultCalcDATA + " Dollar");
        this.setState ( {
          rateDATA: rateDATA,
          rateDATAPrint: rateDATAPrint,
          valueDATA: resultCalcDATA
        });
      }
    };
    //calculate INT
    for(var i = 0; i < data.length; i++) {
      if(data[i].symbol === 'INT') {
        var rateINT = data[i].price_usd;
        var rateINTPrint = ('($ ' + rateINT + ')');
        const resultCalcRawINT = parseFloat(rateINT) * parseFloat(this.state.amountINT);
        const resultCalcINT = resultCalcRawINT.toFixed(2);
        console.log('INT: ' + this.state.amountINT + " | Rate: " + rateINT + ' | ' + resultCalcRawINT);
        console.log("INT: You have INT's in worth of " + resultCalcINT + " Dollar");
        this.setState ({
          rateINT: rateINT,
          rateINTPrint: rateINTPrint,
          valueINT: resultCalcINT
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
      Number(this.state.valueDATA) +
      Number(this.state.valueINT)).toFixed(2);
    return (
      <div className="App">
      <Menu pointing>
        <Menu.Item>
          <Header as='h1'>Real Time Crypto Calculator</Header>
        </Menu.Item>
      </Menu>
      <Container>
        <form onSubmit={this.handleSubmit}>
          <Grid stackable columns='equal'>
            <Grid.Row>
              <Grid.Column>
                <Segment.Group horizontal>
                  <Segment>
                    <Image
                      src={require('./icons/drgn@2x.png')}
                      centered
                    />
                    <Header as='h4'>Dragonchain</Header>
                    {this.state.rateDRGNPrint}
                  </Segment>
                  <Segment>
                    <Input type="number" step="0.001" value={this.state.value} onChange={this.handleChangeDRGN} className="form-control"  placeholder="Enter amount"/>
                    <Header as='h3'>$ {this.state.valueDRGN}</Header>
                  </Segment>
                </Segment.Group>
              </Grid.Column>
              <Grid.Column>
                <Segment.Group horizontal>
                  <Segment>
                    <Image
                      src={require('./icons/miota@2x.png')}
                      centered
                    />
                    <Header as='h4'>IOTA</Header>
                    {this.state.rateIOTAPrint}
                  </Segment>
                  <Segment>
                    <Input type="number" step="0.001" value={this.state.value} onChange={this.handleChangeIOTA} className="form-control"  placeholder="Enter amount"/>
                    <Header as='h3'>$ {this.state.valueIOTA}</Header>
                  </Segment>
                </Segment.Group>
              </Grid.Column>
              <Grid.Column>
                <Segment.Group horizontal>
                  <Segment>
                    <Image
                      src={require('./icons/sub@2x.png')}
                      centered
                    />
                    <Header as='h4'>Substratum</Header>
                    {this.state.rateSUBPrint}
                  </Segment>
                  <Segment>
                    <Input type="number" step="0.001" value={this.state.value} onChange={this.handleChangeSUB} className="form-control"  placeholder="Enter amount"/>
                    <Header as='h3'>$ {this.state.valueSUB}</Header>
                  </Segment>
                </Segment.Group>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column>
              <Segment.Group horizontal>
                <Segment>
                  <Image
                    src={require('./icons/data@2x.png')}
                    centered
                  />
                  <Header as='h4'>DATA</Header>
                  {this.state.rateSUBPrint}
                </Segment>
                <Segment>
                  <Input type="number" step="0.001" value={this.state.value} onChange={this.handleChangeDATA} className="form-control"  placeholder="Enter amount"/>
                  <Header as='h3'>$ {this.state.valueDATA}</Header>
                </Segment>
              </Segment.Group>
            </Grid.Column>
            <Grid.Column>
              <Segment.Group horizontal>
                <Segment>
                  <Image
                    src={require('./icons/int@2x.png')}
                    centered
                  />
                  <Header as='h4'>INT</Header>
                  {this.state.rateINTPrint}
                </Segment>
                <Segment>
                  <Input type="number" step="0.001" value={this.state.value} onChange={this.handleChangeINT} className="form-control"  placeholder="Enter amount"/>
                  <Header as='h3'>$ {this.state.valueINT}</Header>
                </Segment>
              </Segment.Group>
            </Grid.Column>
            <Grid.Column>
              <Segment.Group horizontal>
                <Segment>
                  <Image
                    src={require('./icons/int@2x.png')}
                    centered
                  />
                  <Header as='h4'>Custom</Header>
                  {this.state.rateINTPrint}
                </Segment>
                <Segment>
                  <Input type="number" step="0.001" value={this.state.value} onChange={this.handleChangeINT} className="form-control"  placeholder="Enter amount"/>
                  <Header as='h3'>$ {this.state.valueINT}</Header>
                </Segment>
              </Segment.Group>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Header as='h3'>All coins together: $ {calcAll}</Header>
                <input type="submit" value="Calculate" className="ui primary button"/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </form>
      </Container>
    </div>
    );
  }
}

export default App;
