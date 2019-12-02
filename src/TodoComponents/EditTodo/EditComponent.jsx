import React, { Component, Fragment } from "react";

class EditComponent extends Component {
  constructor(props) {
    super(props);
    const { Id } = this.props.match.params;
    console.log(Id);
  }
  render() {
    console.log(this.props.match.params);
    return (
      <div className="App">
        <h1>Edit</h1>
      </div>
    );
  }
}

export default EditComponent;
