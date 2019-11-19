import React, { Component, Fragment } from "react";
import GetComponent from "./GetComponent";

class AddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { stringText: "", todoArray: [] };
  }

  handleChange(value) {
    this.setState({ stringText: value });
  }

  addTodo() {
    let todo = this.state.todoArray;
    todo.push(this.state.stringText);
    this.setState({
      todoArray: todo
    });
  }

  render() {
    return (
      <div>
        <p>
          <input
            type="text"
            placeholder="Type Something...."
            onChange={e => this.handleChange(e.target.value)}
          />
        </p>
        <p>
          <button onClick={() => this.addTodo()}>Add</button>
        </p>
        <div>
          <GetComponent todolist={this.state.todoArray} />
        </div>
      </div>
    );
  }
}

export default AddComponent;
