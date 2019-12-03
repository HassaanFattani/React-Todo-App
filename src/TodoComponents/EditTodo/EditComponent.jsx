import React, { Component, Fragment } from "react";
import { Form, Icon, Input, Button, InputNumber } from "antd";
import getSingleData from "../../Network/GetSingleData";
import editData from "../../Network/EditData";

class EditComponent extends Component {
  constructor(props) {
    super(props);
    const { Id } = this.props.match.params;
    this.state = { todoID: Id, title: "", order: "" };
  }
  componentWillMount() {
    getSingleData(this.state.todoID).then(response => {
      console.log(response);
      this.setState({ title: response.data.title, order: response.data.order });
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);

        editData(values, this.state.todoID).then(response => {
          console.log("Editttt", response);
          this.props.history.goBack();
          // if (response.status === 200) {
          // }
        });
      }
    });
  };
  render() {
    console.log(this.state.title);
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="App">
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator(
              "title",
              { initialValue: this.state.title },
              {
                rules: [{ required: true, message: "Please input your title!" }]
              }
            )(<Input placeholder="Title" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator(
              "order",
              { initialValue: this.state.order },
              {
                rules: [
                  {
                    required: true,
                    type: "number",
                    min: 1,
                    message: "Number of people should be atleast 1 !"
                  }
                ]
              }
            )(<InputNumber placeholder="Order" />)}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const EditComponentForm = Form.create({ name: "normal_todo" })(EditComponent);
export default EditComponentForm;
