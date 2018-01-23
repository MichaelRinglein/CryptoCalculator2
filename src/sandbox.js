import _ from 'lodash'
import React from 'react';
import { Button, Container, Grid, Header, Input, Menu, Segment } from 'semantic-ui-react';

const todos = [
  {id: 1, text: "BTC"},
  {id: 2, text: "ETH"}
];

const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);


export default class Sandbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 5
    };
    this.handleAddColumn = this.handleAddColumn.bind(this);
    this.handleRemoveColumn = this.handleRemoveColumn.bind(this);
  };

  handleAddColumn(){
    this.setState(prevState => ({
      counter: this.state.counter +1,
    }));
  }

  handleRemoveColumn(){
    this.setState(prevState => ({
      counter: this.state.counter -1,
    }));
  }

  render() {
    const columns = _.times((this.state.counter), i => (
      <Grid.Column key={i}>
        <Segment.Group horizontal>
          <Segment>
            <Header as='h4'>Hello</Header>
          </Segment>
          <Segment>
            <Header as='h3'>Input here</Header>
          </Segment>
        </Segment.Group>
      </Grid.Column>
    ));
    return (
      <div>
        <h1>Hello World</h1>
        <Grid columns={3}>
          <Grid.Row>{columns}</Grid.Row>
        </Grid>
        <Button circular icon='plus' onClick={this.handleAddColumn}/>
        <Button circular icon='minus' onClick={this.handleRemoveColumn}/>
      </div>
    );
  }
}
