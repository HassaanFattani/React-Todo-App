import React, { Component, Fragment } from "react";
import GetComponent from "../GetTodo";
import { withRouter } from "react-router-dom";
import { Form, Icon, Input, Button, InputNumber } from "antd";
import addData from "../../Network/SaveData";
import getData from "../../Network/GetData";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class AddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { stringText: "", todoArray: [] };
  }
  componentWillMount() {
    getData().then(response => {
      var newArray = response.data.filter(function(el) {
        return el.completed == true
          ? (el.completed = "Completed")
          : (el.completed = "Incomplete");
      });
      this.setState({ todoArray: newArray });
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);

        addData(values).then(response => {
          if (response.status === 200) {
            this.props.form.resetFields();
            getData().then(response => {
              var newArray = response.data.filter(function(el) {
                return el.completed == true
                  ? (el.completed = "Completed")
                  : (el.completed = "Incomplete");
              });
              this.setState({ todoArray: newArray });
            });
          }
        });
      }
    });
  };

  render() {
    console.log(this.props);
    const { getFieldDecorator } = this.props.form;
    // const {
    //   getFieldDecorator,
    //   getFieldsError,
    //   getFieldError,
    //   isFieldTouched
    // } = this.props.form;

    // Only show error after a field is touched.
    // const usernameError =
    //   isFieldTouched("username") && getFieldError("username");
    // const passwordError =
    //   isFieldTouched("password") && getFieldError("password");
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator("title", {
              rules: [{ required: true, message: "Please input your title!" }]
            })(<Input placeholder="Title" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("order", {
              rules: [
                {
                  required: true,
                  type: "number",
                  min: 1,
                  message: "Number of people should be atleast 1 !"
                }
              ]
            })(<InputNumber placeholder="Order" />)}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
        <GetComponent
          todolist={this.state.todoArray}
          // removeItem={this.removeArrayItem}
          // editToDoFromState={this.editToDoFromState}
        />
      </div>
    );
  }
}
const AddComponentForm = Form.create({ name: "normal_todo" })(AddComponent);
export default AddComponentForm;
