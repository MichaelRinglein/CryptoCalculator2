import React from 'react';

export default class Sandbox extends React.Component {
  constructor(props){
    super();
    this.state = {
      age: props.initialAge,
      status : 0
    }
    setTimeout(() => {
      this.setState({
        status: 1
      })
    },3000)
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    });
  }

  render() {
    return (
      <div>
        <h3>Hello World</h3>
        <p>Your name is {this.props.name}, your age is {this.state.age}</p>
        <p>Status {this.state.status}</p>
        {this.props.children}
        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older</button>
      </div>
    );
  }
}
