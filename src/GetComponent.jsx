import React, { Component, Fragment } from "react";

class GetComponent extends Component {
  constructor(props) {
    super(props);
  }

  delete = index => {
    this.props.removeItem(index);
  };

  render() {
    return (
      <div>
        {this.props.todolist.map((data, index) => {
          return (
            <h1 key={index}>
              {data}
              <button onClick={() => this.delete(index)}>Delete</button>
            </h1>
          );
        })}
      </div>
    );
  }
}

export default GetComponent;
