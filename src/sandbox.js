import React from 'react';
import { Button, Container, Dropdown, Grid, Header, Input, Menu, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const options = [
  { key: '.com', text: '.com', value: '.com' },
  { key: '.net', text: '.net', value: '.net' },
  { key: '.org', text: '.org', value: '.org' },
]

export default class Sandbox extends React.Component {
  render() {
    return (
      <div>
      <Menu pointing>
        <Menu.Item>
          <Header as='h1'>Real Time Crypto Calculator</Header>
        </Menu.Item>
      </Menu>
        <Container>
          <Grid columns='equal'>
            <Grid.Row>
              <Grid.Column>
                <Input
                  label={<Dropdown defaultValue='.com' options={options} />}
                  labelPosition='right'
                  placeholder='Find domain'
                  type='numeric'
                />
              </Grid.Column>
              <Grid.Column>
                <Segment>2</Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>3</Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Container>
          <Grid columns='equal'>
            <Grid.Row>
              <Grid.Column>
                <Button primary>Primary</Button>
                <Button secondary>Secondary</Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                Save this for me
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
