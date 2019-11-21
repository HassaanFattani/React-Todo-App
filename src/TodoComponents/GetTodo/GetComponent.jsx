import React, { Component, Fragment } from "react";

class GetComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      index: 0
    };
  }

  toggleEditing = index => {
    this.setState({
      isEditing: !this.state.isEditing,
      index: index
    });
  };

  delete = index => {
    this.props.removeItem(index);
  };

  editTodoHandler = event => {
    event.preventDefault();
    this.props.editToDoFromState(this.state.index, this.newText.value);
    this.toggleEditing(this.state.index);
  };

  render() {
    return (
      <div>
        {this.props.todolist.map((data, index) => {
          if (this.state.isEditing && this.state.index == index) {
            return (
              <form onSubmit={this.editTodoHandler} key={index}>
                <input
                  type="text"
                  defaultValue={data}
                  ref={node => {
                    this.newText = node;
                  }}
                />
                <button type="Submit">Save</button>
                <button onClick={() => this.toggleEditing(index)}>
                  Cancel
                </button>
              </form>
            );
          } else {
            return (
              <h1 key={index}>
                {data}

                <button onClick={() => this.toggleEditing(index)}>Edit</button>
                <button onClick={() => this.delete(index)}>Delete</button>
              </h1>
            );
          }
        })}
      </div>
    );
  }
}

export default GetComponent;
