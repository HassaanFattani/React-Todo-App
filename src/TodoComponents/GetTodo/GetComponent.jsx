import React, { Component, Fragment } from "react";
import { Button, Input, Form, Table, Popconfirm } from "antd";
import DeleteTodo from "../../Network/DeleteData";

class GetComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      index: 0
    };
    this.columns = [
      { title: "ID", dataIndex: "id", key: "id" },
      { title: "Title", dataIndex: "title", key: "title" },
      { title: "Completed", dataIndex: "completed", key: "completed" },
      {
        title: "DELETE",
        key: "delete",
        render: (text, record) => (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => {
              DeleteTodo(text.id);
            }}
          >
            <a href="#">Delete</a>
          </Popconfirm>
        )
      },
      {
        title: "Edit",
        key: "edit",
        render: (text, record) => (
          <a
            onClick={() => {
              this.EditToDo(text.id);
            }}
          >
            Edit
          </a>
        )
      }
    ];
  }

  EditToDo = id => {
    this.props.propers.history.push("/MainPage/" + id);
  };
  // toggleEditing = index => {
  //   this.setState({
  //     isEditing: !this.state.isEditing,
  //     index: index
  //   });
  // };

  // delete = index => {
  //   this.props.removeItem(index);
  // };

  // editTodoHandler = event => {
  //   event.preventDefault();
  //   console.log("Index", this.state.index);
  //   console.log("Value", this.newText.value);
  //   this.props.editToDoFromState(this.state.index, this.newText.value);
  //   this.toggleEditing(this.state.index);
  // };

  render() {
    // console.log(this.props.todolist);
    // const textboxStyle = {
    //   width: "20%",
    //   margin: "0 auto"
    // };
    console.log("Render", this.props);
    return (
      <div>
        {/* {this.props.todolist.map((data, index) => {
          if (this.state.isEditing && this.state.index == index) {
            return (
              <Form onSubmit={this.editTodoHandler} key={index}>
                <input
                  type="text"
                  style={textboxStyle}
                  defaultValue={data}
                  ref={node => {
                    this.newText = node;
                  }}
                  className="ant-input"
                />
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
                <Button onClick={() => this.toggleEditing(index)}>
                  Cancel
                </Button>
              </Form>
            );
          } else {
            return (
              <h1 key={index}>
                {data}

                <Button
                  type="primary"
                  onClick={() => this.toggleEditing(index)}
                >
                  Edit
                </Button>
                <Button type="danger" onClick={() => this.delete(index)}>
                  Delete
                </Button>
              </h1>
            );
          }
        })} */}
        <Table
          columns={this.columns}
          dataSource={this.props.todolist}
          rowKey="id"
        />
      </div>
    );
  }
}

export default GetComponent;
