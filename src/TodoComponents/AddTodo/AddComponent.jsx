import React, { Component, Fragment } from "react";
import GetComponent from "../GetTodo";

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

  removeArrayItem = index => {
    let todo = this.state.todoArray;
    todo.splice(index, 1);
    this.setState({
      todoArray: todo
    });
  };

  editToDoFromState = (index, newText) => {
    let todo = this.state.todoArray;
    todo.splice(index, 1, newText);
    this.setState({
      todoArray: todo
    });
  };

  render() {
    return (
      <div>
        <p>
          <input
            type="text"
            placeholder="Type Something...."
            value={this.state.stringText}
            onChange={e => {
              this.handleChange(e.target.value);
            }}
          />
        </p>
        <p>
          <button onClick={() => this.addTodo()}>Add</button>
        </p>
        <div>
          <GetComponent
            todolist={this.state.todoArray}
            removeItem={this.removeArrayItem}
            editToDoFromState={this.editToDoFromState}
          />
        </div>
      </div>
    );
  }
}

export default AddComponent;
