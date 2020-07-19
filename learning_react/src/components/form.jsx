import React, { Component } from 'react';

class form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  changehandler(e) {
    this.setState({ value: e.target.value });
  }

  getname(e) {
    e.preventDefault();
    console.log(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.getname.bind(this)}>
        <input
          type="text"
          onChange={this.changehandler.bind(this)}
          name=""
          id=""
        />
        <button type="submit">Get Name</button>
      </form>
    );
  }
}

export default form;
