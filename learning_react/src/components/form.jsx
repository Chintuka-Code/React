import React, { Component } from 'react';

class form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', age: '', message: '' };
  }

  changehandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  getname(e) {
    e.preventDefault();
    console.log(e.target[1].name);
    this.setState({ message: 'not ok' });
  }

  render() {
    return (
      //   <form onSubmit={this.getname.bind(this)}>
      //     <input
      //       type="text"
      //       onChange={this.changehandler.bind(this)}
      //       name=""
      //       id=""
      //     />
      //     <button type="submit">Get Name</button>
      //   </form>

      //   Multiple input
      <form onSubmit={this.getname.bind(this)}>
        <input
          type="text"
          onChange={this.changehandler.bind(this)}
          name="name"
          id=""
        />
        <h1>{this.state.message}</h1>
        <input
          type="text"
          onChange={this.changehandler.bind(this)}
          name="age"
          id=""
        />
        <button type="submit">Get Name</button>
      </form>
    );
  }
}

export default form;
