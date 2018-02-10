import _ from 'lodash'
import React, { Component } from 'react';
import { Button, Container, Dropdown, Grid, Header, Image, Input, Menu, Segment } from 'semantic-ui-react';
import './App.css';
import coinOptions from '../src/coinOptions';

const marginTop = {
  marginTop: 30,
}

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
      amountCustom1: '0',
      amountCustom2: '0',
      amountCustom3: '0',
      amountCustom4: '0',
      amountCustom5: '0',
      amountCustom6: '0',
      selection1: 'CUSTOM',
      selection2: 'CUSTOM',
      selection3: 'CUSTOM',
      selection4: 'CUSTOM',
      selection5: 'CUSTOM',
      selection6: 'CUSTOM',
      rateCustom1: '',
      rateCustom2: '',
      rateCustom3: '',
      rateCustom4: '',
      rateCustom5: '',
      rateCustom6: '',
      rateCustomPrint1: '',
      rateCustomPrint2: '',
      rateCustomPrint3: '',
      rateCustomPrint4: '',
      rateCustomPrint5: '',
      rateCustomPrint6: '',
      valueCustom1: '0',
      valueCustom2: '0',
      valueCustom3: '0',
      valueCustom4: '0',
      valueCustom5: '0',
      valueCustom6: '0',
      Coin1: true,
      Coin2: false,
      Coin3: false,
      Coin4: false,
      Coin5: false,
      Coin6: false,
    };

    this.handleChangeCustomAmount1 = this.handleChangeCustomAmount1.bind(this);
    this.handleChangeCustomAmount2 = this.handleChangeCustomAmount2.bind(this);
    this.handleChangeCustomAmount3 = this.handleChangeCustomAmount3.bind(this);
    this.handleChangeCustomAmount4 = this.handleChangeCustomAmount4.bind(this);
    this.handleChangeCustomAmount5 = this.handleChangeCustomAmount5.bind(this);
    this.handleChangeCustomAmount6 = this.handleChangeCustomAmount6.bind(this);

    this.handleChangeSelection1 = this.handleChangeSelection1.bind(this);
    this.handleChangeSelection2 = this.handleChangeSelection2.bind(this);
    this.handleChangeSelection3 = this.handleChangeSelection3.bind(this);
    this.handleChangeSelection4 = this.handleChangeSelection4.bind(this);
    this.handleChangeSelection5 = this.handleChangeSelection5.bind(this);
    this.handleChangeSelection6 = this.handleChangeSelection6.bind(this);

    this.handleAddCoin2 = this.handleAddCoin2.bind(this);
    this.handleAddCoin3 = this.handleAddCoin3.bind(this);
    this.handleAddCoin4 = this.handleAddCoin4.bind(this);
    this.handleAddCoin5 = this.handleAddCoin5.bind(this);
    this.handleAddCoin6 = this.handleAddCoin6.bind(this);


    this.handleRemoveCoin2 = this.handleRemoveCoin2.bind(this);
    this.handleRemoveCoin3 = this.handleRemoveCoin3.bind(this);
    this.handleRemoveCoin4 = this.handleRemoveCoin4.bind(this);
    this.handleRemoveCoin5 = this.handleRemoveCoin5.bind(this);
    this.handleRemoveCoin6 = this.handleRemoveCoin6.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //handleChangeCustomAmount... are handling the user input of the number of coins
  handleChangeCustomAmount1(event) {
    if (event.target.value == '') {
      event.target.value = 0
    }
    this.setState({amountCustom1: event.target.value});
  }

  handleChangeCustomAmount2(event) {
    if(event.target.value == '') {
      event.target.value = 0
    }
    this.setState({amountCustom2: event.target.value});
  }

  handleChangeCustomAmount3(event){
    if(event.target.value == '') {
      event.target.value = 0
    }
    this.setState({amountCustom3: event.target.value});
  }

  handleChangeCustomAmount4(event){
    if(event.target.value == '') {
      event.target.value = 0
    }
    this.setState({amountCustom4: event.target.value});
  }

  handleChangeCustomAmount5(event){
    if(event.target.value == '') {
      event.target.value = 0
    }
    this.setState({amountCustom5: event.target.value});
  }

  handleChangeCustomAmount6(event){
    if(event.target.value == '') {
      event.target.value = 0
    }
    this.setState({amountCustom6: event.target.value});
  }

  //handleChangeSelection... are handling the selected crypto currency
  handleChangeSelection1(e, {value}) {
    this.setState({selection1: value});
    console.log('this.state.selection is: ' + this.state.selection1);
  }

  handleChangeSelection2(e, {value}) {
    this.setState({selection2: value});
    console.log('this.state.selection2 is: ' + this.state.selection2);
  }

  handleChangeSelection3(e, {value}){
    this.setState({selection3: value});
    console.log('this.state.selection3 is: ' + this.state.selection3);
  }

  handleChangeSelection4(e, {value}){
    this.setState({selection4: value});
  }

  handleChangeSelection5(e, {value}){
    this.setState({selection5: value});
  }

  handleChangeSelection6(e, {value}){
    this.setState({selection6: value});
  }

  //handleAddCoin... are handling adding coins. We start at 2 because the first one is always displayed
  handleAddCoin2() {
    this.setState(prevState => ({
      Coin2: true,
    }));
  }

  handleAddCoin3() {
    this.setState(prevState => ({
      Coin3: true
    }));
  }

  handleAddCoin4() {
    this.setState(prevState => ({
      Coin4: true
    }));
  }

  handleAddCoin5() {
    this.setState(prevState => ({
      Coin5: true
    }));
  }

  handleAddCoin6() {
    this.setState(prevState => ({
      Coin6: true
    }));
  }

  //handleRemoveCoin... are handling removing the coins. We start at 2 because the first one is always displayed cand can't be removed
  handleRemoveCoin2() {
    this.setState(prevState => ({
      Coin2: false
    }));
  }

  handleRemoveCoin3() {
    this.setState(prevState => ({
      Coin3: false
    }));
  }

  handleRemoveCoin4() {
    this.setState(prevState => ({
      Coin4: false
    }));
  }

  handleRemoveCoin5() {
    this.setState(prevState => ({
      Coin5: false
    }));
  }

  handleRemoveCoin6() {
    this.setState(prevState => ({
      Coin6: false
    }));
  }

  //executed when Button "Calculate" is pressed
  handleSubmit(event) {
    //calculate Custom1
    for(var i = 0; i < data.length; i++) {
      if(data[i].symbol == this.state.selection1) {
        var rateCustom1 = data[i].price_usd;
        var rateCustomPrint1 = ('($' + rateCustom1 + ')');
        const resultCalcRawCustom1 = parseFloat(rateCustom1) * parseFloat(this.state.amountCustom1);
        const resultCalcCustom1 = resultCalcRawCustom1.toFixed(2);
        console.log('Custom choice is ' + this.state.selection1 + " | Rate: " + rateCustom1 + " | " + resultCalcRawCustom1 + " | You have " + this.state.selection1 + " in worth of " + resultCalcCustom1 + "Dollar");
        this.setState({
          rateCustom1: rateCustom1,
          rateCustomPrint1: rateCustomPrint1,
          valueCustom1: resultCalcCustom1
        });
      }
    };
    //calculate Custom2
    for(var i = 0; i < data.length; i++) {
      if(data[i].symbol == this.state.selection2) {
        var rateCustom2 = data[i].price_usd;
        var rateCustomPrint2 = ('($' + rateCustom2 + ')');
        const resultCalcRawCustom2 = parseFloat(rateCustom2) * parseFloat(this.state.amountCustom2);
        const resultCalcCustom2 = resultCalcRawCustom2.toFixed(2);
        console.log('Custom choice is ' + this.state.selection2 + " | Rate: " + rateCustom2 + " | " + resultCalcRawCustom2 + " | You have " + this.state.selection2 + " in worth of " + resultCalcCustom2 + "Dollar");
        this.setState({
          rateCustom2: rateCustom2,
          rateCustomPrint2: rateCustomPrint2,
          valueCustom2: resultCalcCustom2
        });
      }
    };
    //calculate Custom3
    for(var i = 0; i < data.length; i++) {
      if(data[i].symbol == this.state.selection3) {
        var rateCustom3 = data[i].price_usd;
        var rateCustomPrint3 = ('($' + rateCustom3 + ')');
        const resultCalcRawCustom3 = parseFloat(rateCustom3) * parseFloat(this.state.amountCustom3);
        const resultCalcCustom3 = resultCalcRawCustom3.toFixed(2);
        console.log('Custom choice is ' + this.state.selection3 + " | Rate: " + rateCustom3 + " | " + resultCalcRawCustom3 + " | You have " + this.state.selection3 + " in worth of " + resultCalcCustom3 + "Dollar");
        this.setState({
          rateCustom3: rateCustom3,
          rateCustomPrint3: rateCustomPrint3,
          valueCustom3: resultCalcCustom3
        });
      }
    };
    //calculate Custom4
    for(var i = 0; i < data.length; i++) {
      if(data[i].symbol == this.state.selection4) {
        var rateCustom4 = data[i].price_usd;
        var rateCustomPrint4 = ('($' + rateCustom4 + ')');
        const resultCalcRawCustom4 = parseFloat(rateCustom4) * parseFloat(this.state.amountCustom4);
        const resultCalcCustom4 = resultCalcRawCustom4.toFixed(2);
        console.log('Custom choice is ' + this.state.selection4 + " | Rate: " + rateCustom4 + " | " + resultCalcRawCustom4 + " | You have " + this.state.selection4 + " in worth of " + resultCalcCustom4 + "Dollar");
        this.setState({
          rateCustom4: rateCustom4,
          rateCustomPrint4: rateCustomPrint4,
          valueCustom4: resultCalcCustom4
        });
      }
    };
    //calculate Custom5
    for(var i = 0; i < data.length; i++) {
      if(data[i].symbol == this.state.selection4) {
        var rateCustom5 = data[i].price_usd;
        var rateCustomPrint5 = ('($' + rateCustom5 + ')');
        const resultCalcRawCustom5 = parseFloat(rateCustom5) * parseFloat(this.state.amountCustom5);
        const resultCalcCustom5 = resultCalcRawCustom5.toFixed(2);
        console.log('Custom choice is ' + this.state.selection5 + " | Rate: " + rateCustom5 + " | " + resultCalcRawCustom5 + " | You have " + this.state.selection5 + " in worth of " + resultCalcCustom5 + "Dollar");
        this.setState({
          rateCustom5: rateCustom5,
          rateCustomPrint5: rateCustomPrint5,
          valueCustom5: resultCalcCustom5
        });
      }
    };
    //calculate Custom6
    for(var i = 0; i < data.length; i++) {
      if(data[i].symbol == this.state.selection4) {
        var rateCustom6 = data[i].price_usd;
        var rateCustomPrint6 = ('($' + rateCustom6 + ')');
        const resultCalcRawCustom6 = parseFloat(rateCustom6) * parseFloat(this.state.amountCustom6);
        const resultCalcCustom6 = resultCalcRawCustom6.toFixed(2);
        console.log('Custom choice is ' + this.state.selection6 + " | Rate: " + rateCustom6 + " | " + resultCalcRawCustom6 + " | You have " + this.state.selection6 + " in worth of " + resultCalcCustom6 + "Dollar");
        this.setState({
          rateCustom6: rateCustom6,
          rateCustomPrint6: rateCustomPrint6,
          valueCustom6: resultCalcCustom6
        });
      }
    };
    event.preventDefault();
  }

  render() {
    var calcAll = (
      Number(this.state.valueCustom1) +
      Number(this.state.valueCustom2) +
      Number(this.state.valueCustom3) +
      Number(this.state.valueCustom4) +
      Number(this.state.valueCustom5) +
      Number(this.state.valueCustom6)).toFixed(2);
    return (
      <div className="App">
      <Menu pointing>
        <Menu.Item>
          <Header as='h1'>Crypto Calculator</Header>
        </Menu.Item>
      </Menu>
      <Container>
        <form onSubmit={this.handleSubmit}>
          <Grid stackable columns={3}>
            <Grid.Row>
            {
              this.state.Coin1?
                <Grid.Column>
                  <Segment.Group horizontal>
                    <Segment>
                      <Image
                        src={require('./icons/' + this.state.selection1 + '@2X.PNG')}
                        centered
                      />
                      <Header as='h4'>
                        <Dropdown inline options={coinOptions} value={this.state.value} onChange={this.handleChangeSelection1} defaultValue={coinOptions[0].value} />
                      </Header>
                      {this.state.rateCustomPrint1}
                    </Segment>
                    <Segment>
                      <Input type="number" step="0.0001" value={this.state.value} onChange={this.handleChangeCustomAmount1} className="form-control"  placeholder="Enter amount"/>
                      <Header as='h3'>$ {this.state.valueCustom1}</Header>
                    </Segment>
                  </Segment.Group>
                  {
                    !this.state.Coin2?
                      <Button primary circular icon='plus' floated='right' onClick={this.handleAddCoin2}/>
                      :
                      <div></div>
                    }
                </Grid.Column>
              :
              <div></div>
            }
            {
              this.state.Coin2?
                <Grid.Column>
                  <Segment.Group horizontal>
                    <Segment>
                      <Image
                        src={require('./icons/' + this.state.selection2 + '@2X.PNG')}
                        centered
                      />
                      <Header as='h4'>
                        <Dropdown inline options={coinOptions} value={this.state.value} onChange={this.handleChangeSelection2} defaultValue={coinOptions[0].value} />
                      </Header>
                      {this.state.rateCustomPrint2}
                    </Segment>
                    <Segment>
                      <Input type="number" step="0.0001" value={this.state.value} onChange={this.handleChangeCustomAmount2} className="form-control"  placeholder="Enter amount"/>
                      <Header as='h3'>$ {this.state.valueCustom2}</Header>
                    </Segment>
                  </Segment.Group>
                  {
                    !this.state.Coin3?
                      <Button primary circular icon='plus' floated='right' onClick={this.handleAddCoin3}/>
                      :
                      <div></div>
                  }
                  {
                    !this.state.Coin3?
                      <Button primary circular icon='minus' floated='right' onClick={this.handleRemoveCoin2}/>
                      :
                      <div></div>
                  }
                </Grid.Column>
              :
              <div></div>
            }
            {
              this.state.Coin3?
                <Grid.Column>
                  <Segment.Group horizontal>
                    <Segment>
                      <Image
                        src={require('./icons/' + this.state.selection3 + '@2X.PNG')}
                        centered
                      />
                      <Header as='h4'>
                        <Dropdown inline options={coinOptions} value={this.state.value} onChange={this.handleChangeSelection3} defaultValue={coinOptions[0].value} />
                      </Header>
                      {this.state.rateCustomPrint3}
                    </Segment>
                    <Segment>
                      <Input type="number" step="0.0001" value={this.state.value} onChange={this.handleChangeCustomAmount3} className="form-control"  placeholder="Enter amount"/>
                      <Header as='h3'>$ {this.state.valueCustom3}</Header>
                    </Segment>
                  </Segment.Group>
                  {
                    !this.state.Coin4?
                      <Button primary circular icon='plus' floated='right' onClick={this.handleAddCoin4}/>
                      :
                      <div></div>
                  }
                  {
                    !this.state.Coin4?
                      <Button primary circular icon='minus' floated='right' onClick={this.handleRemoveCoin3}/>
                      :
                      <div></div>
                  }
                </Grid.Column>
              :
              <div></div>
              }
              {
                this.state.Coin4?
                  <Grid.Column>
                    <Segment.Group horizontal>
                      <Segment>
                        <Image
                          src={require('./icons/' + this.state.selection4 + '@2X.PNG')}
                          centered
                        />
                        <Header as='h4'>
                          <Dropdown inline options={coinOptions} value={this.state.value} onChange={this.handleChangeSelection4} defaultValue={coinOptions[0].value} />
                        </Header>
                        {this.state.rateCustomPrint4}
                      </Segment>
                      <Segment>
                        <Input type="number" step="0.0001" value={this.state.value} onChange={this.handleChangeCustomAmount4} className="form-control"  placeholder="Enter amount"/>
                        <Header as='h3'>$ {this.state.valueCustom4}</Header>
                      </Segment>
                    </Segment.Group>
                    {
                      !this.state.Coin5?
                        <Button primary circular icon='plus' floated='right' onClick={this.handleAddCoin5}/>
                        :
                        <div></div>
                    }
                    {
                      !this.state.Coin5?
                        <Button primary circular icon='minus' floated='right' onClick={this.handleRemoveCoin4}/>
                        :
                        <div></div>
                    }
                  </Grid.Column>
                :
                <div></div>
              }
              {
                this.state.Coin5?
                  <Grid.Column>
                    <Segment.Group horizontal>
                      <Segment>
                        <Image
                          src={require('./icons/' + this.state.selection5 + '@2X.PNG')}
                          centered
                        />
                        <Header as='h4'>
                          <Dropdown inline options={coinOptions} value={this.state.value} onChange={this.handleChangeSelection5} defaultValue={coinOptions[0].value} />
                        </Header>
                        {this.state.rateCustomPrint5}
                      </Segment>
                      <Segment>
                        <Input type="number" step="0.0001" value={this.state.value} onChange={this.handleChangeCustomAmount5} className="form-control"  placeholder="Enter amount"/>
                        <Header as='h3'>$ {this.state.valueCustom5}</Header>
                      </Segment>
                    </Segment.Group>
                    {
                      !this.state.Coin6?
                        <Button primary circular icon='plus' floated='right' onClick={this.handleAddCoin6}/>
                        :
                        <div></div>
                    }
                    {
                      !this.state.Coin6?
                        <Button primary circular icon='minus' floated='right' onClick={this.handleRemoveCoin5}/>
                        :
                        <div></div>
                    }
                  </Grid.Column>
                :
                <div></div>
              }
              {
                this.state.Coin6?
                  <Grid.Column>
                    <Segment.Group horizontal>
                      <Segment>
                        <Image
                          src={require('./icons/' + this.state.selection6 + '@2X.PNG')}
                          centered
                        />
                        <Header as='h4'>
                          <Dropdown inline options={coinOptions} value={this.state.value} onChange={this.handleChangeSelection6} defaultValue={coinOptions[0].value} />
                        </Header>
                        {this.state.rateCustomPrint6}
                      </Segment>
                      <Segment>
                        <Input type="number" step="0.0001" value={this.state.value} onChange={this.handleChangeCustomAmount6} className="form-control"  placeholder="Enter amount"/>
                        <Header as='h3'>$ {this.state.valueCustom6}</Header>
                      </Segment>
                    </Segment.Group>
                    {
                      this.state.Coin6?
                        <Button primary circular icon='minus' floated='right' onClick={this.handleRemoveCoin6}/>
                        :
                        <div></div>
                    }
                  </Grid.Column>
                :
                <div></div>
              }
            </Grid.Row>
          </Grid>
          <Grid>
            <Grid.Row>
               <Grid.Column floated='right'>

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
