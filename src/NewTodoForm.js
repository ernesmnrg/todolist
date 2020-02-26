import React from "react";
import "./NewTodoForm.css";

class NewTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      deadline: new Date(),
      owner: "",
      editingMode: false,
      completed: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("input");
    const newTodo = {
      name: this.state.name,
      description: "this is description",
      deadLine: this.state.deadline
    };

    this.props.addNew(newTodo);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="NewTodoForm">
        <form onSubmit={this.handleSubmit}>
          {!this.props.editingMode && <label htmlFor="name"> </label>}
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <button>{this.props.editingMode ? "SAVE" : "ADD NEW"}</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
