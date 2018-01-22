import React, { Component } from 'react';
import { Button, Container, Dropdown, Grid, Header, Image, Input, Menu, Segment } from 'semantic-ui-react';
import './App.css';

const marginTop = {
  marginTop: 30,
}

var apiURL = 'https://api.coinmarketcap.com/v1/ticker/?limit=200';
var xhr = new XMLHttpRequest();
xhr.open('GET', apiURL, false);
xhr.send();
var data = JSON.parse(xhr.responseText);
console.log(xhr.status);

const coinOptions = [
  {
    key: 'Choose...',
    text: 'Choose...',
    value: 'custom',
  },
  {
    key: 'BTC',
    text: 'BTC',
    value: 'BTC',
  },
  {
    key: 'ETH',
    text: 'ETH',
    value: 'ETH',
  },
  {
    key: 'XRP',
    text: 'XRP',
    value: 'XRP',
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDRGN: '0',
      amountIOTA: '0',
      amountSUB: '0',
      amountDATA: '0',
      amountINT: '0',
      amountCustom: '0',
      selection: 'custom',
      rateDRGN: '',
      rateIOTA: '',
      rateSUB: '',
      rateDATA: '',
      rateINT:'',
      rateCustom: '',
      rateDRGNPrint: '',
      rateIOTAPrint: '',
      rateSUBPrint: '',
      rateDATAPrint: '',
      rateINTPrint: '',
      rateCustomPrint: '',
      valueDRGN: '0',
      valueIOTA: '0',
      valueSUB: '0',
      valueDATA: '0',
      valueINT: '0',
      valueCustom: '0',
      valueAll: '0'
    };

    this.handleChangeDRGN = this.handleChangeDRGN.bind(this);
    this.handleChangeIOTA = this.handleChangeIOTA.bind(this);
    this.handleChangeSUB = this.handleChangeSUB.bind(this);
    this.handleChangeDATA = this.handleChangeDATA.bind(this);
    this.handleChangeINT = this.handleChangeINT.bind(this);
    this.handleChangeCustomAmount = this.handleChangeCustomAmount.bind(this);
    this.handleChangeSelection = this.handleChangeSelection.bind(this);
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

  handleChangeCustomAmount(event) {
    this.setState({amountCustom: event.target.value});
    console.log('Cusom selected: ' + this.state.amountCustom);
  }

  handleChangeSelection(e, {value}) {
    this.setState({selection: value});
  }

  handleSubmit(event) {
    //calculate DRGN
    for(var i = 0; i < data.length; i++) {
      if(data[i].symbol === 'DRGN') {
        var rateDRGN = data[i].price_usd;
        var rateDRGNPrint = ('($ ' + rateDRGN + ')');
        const resultCalcRawDRGN = parseFloat(rateDRGN) * parseFloat(this.state.amountDRGN);
        const resultCalcDRGN = resultCalcRawDRGN.toFixed(2);
        console.log('DRGN: ' + this.state.amountDRGN + " | Rate: " + rateDRGN + ' | ' + resultCalcRawDRGN + " | You have Dragon's in worth of " + resultCalcDRGN + " Dollar");
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
        console.log('IOTA: ' + this.state.amountIOTA + " | Rate: " + rateIOTA + ' | ' + resultCalcRawIOTA + " | You have IOTA's in worth of " + resultCalcIOTA + " Dollar");
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
        console.log('SUB: ' + this.state.amountSUB + " | Rate: " + rateSUB + ' | ' + resultCalcRawSUB + " | You have SUB's in worth of " + resultCalcSUB + " Dollar");
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
        console.log('DATA: ' + this.state.amountDATA + " | Rate: " + rateDATA + ' | ' + resultCalcRawDATA + " | You have DATA's in worth of " + resultCalcDATA + " Dollar");
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
        console.log('INT: ' + this.state.amountINT + " | Rate: " + rateINT + ' | ' + resultCalcRawINT + " | You have INT's in worth of " + resultCalcINT + " Dollar");
        this.setState ({
          rateINT: rateINT,
          rateINTPrint: rateINTPrint,
          valueINT: resultCalcINT
        });
      }
    };
    //calculate Custom
    for(var i = 0; i < data.length; i++) {
      if(data[i].symbol === this.state.selection) {
        var rateCustom = data[i].price_usd;
        var rateCustomPrint = ('($' + rateCustom + ')');
        const resultCalcRawCustom = parseFloat(rateCustom) * parseFloat(this.state.amountCustom);
        const resultCalcCustom = resultCalcRawCustom.toFixed(2);
        console.log('Custom choice is ' + this.state.selection + " | Rate: " + rateCustom + " | " + resultCalcRawCustom + " | You have " + this.state.selection + " in worth of " + resultCalcCustom + "Dollar");
        this.setState({
          rateCustom: rateCustom,
          rateCustomPrint: rateCustomPrint,
          valueCustom: resultCalcCustom
        });
      }
    };

    //sandthis.setState({valueAll: calcAll});
    console.log(this.state.valueAll);
    console.log(this.props.children);

    event.preventDefault();
  }

  render() {
    console.log(this.state.selection);
    var calcAll = (
      Number(this.state.valueDRGN) +
      Number(this.state.valueIOTA) +
      Number(this.state.valueSUB) +
      Number(this.state.valueDATA) +
      Number(this.state.valueINT)+
      Number(this.state.valueCustom)).toFixed(2);
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
                    src={require('./icons/' + this.state.selection + '@2x.png')}
                    centered
                  />
                  <Header as='h4'>
                    <Dropdown inline options={coinOptions} value={this.state.value} onChange={this.handleChangeSelection} defaultValue={coinOptions[0].value} />
                  </Header>
                  {this.state.rateCustom}
                </Segment>
                <Segment>
                  <Input type="number" step="0.001" value={this.state.value} onChange={this.handleChangeCustomAmount} className="form-control"  placeholder="Enter amount"/>
                  <Header as='h3'>$ {this.state.valueCustom}</Header>
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
