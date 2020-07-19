import React, { Component } from 'react';
import '../index.css';
class data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'Change class color components',
      color: 'red',
      change: 'heading',
    };
  }

  changecolor() {
    this.setState({ data: 'color change', color: 'green', change: 'green' });
  }

  render() {
    return (
      <>
        <h1>{this.props.info}</h1>
        <h3 style={{ color: `${this.state.color}` }}>
          Using inline css {this.state.data}
        </h3>
        <h3 className={this.state.change}>Unsing css class{this.state.data}</h3>

        <button onClick={this.changecolor.bind(this)}>Click</button>
      </>
    );
  }
}

export default data;
