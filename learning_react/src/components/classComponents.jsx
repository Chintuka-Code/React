import React, { Component } from 'react';

class Comp extends Component {
  data = [{ name: 'sabban' }, { name: 'rahul' }];

  constructor(props) {
    super(props);
    this.state = { greet: 'hello', counter: 0 };
  }

  getclick() {
    this.setState({ greet: 'bye', counter: this.state.counter + 1 });
  }

  render() {
    return (
      <>
        {/* HOw to access props in class components */}
        <h1>Hello Class Components</h1>
        <h1>{`Class Props  ${this.props.name}`}</h1>
        <br />

        {/* How to loop in class */}
        <h1>THis is how we call loop inside clas components</h1>
        {this.data.map((info, index) => {
          return (
            <>
              <h1 id={index}>{info.name}</h1>
            </>
          );
        })}
        <br />

        {/* HOw to apply events */}
        <h1>Event Handler</h1>
        <button onClick={this.getclick.bind(this)}>Click ME</button>
        <br />

        {/* HOw to change states in class components */}
        <h1>{this.state.greet}</h1>
        <h1>{`counter${this.state.counter}`}</h1>
      </>
    );
  }
}

export default Comp;
