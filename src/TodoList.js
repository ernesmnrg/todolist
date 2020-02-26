import React from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";
let baseUrl = "https://Aneh-sekalian.herokuapp.com/api/v1/tasks";
let token = localStorage.getItem("userData");

class TodoList extends React.Component {
  state = {
    todos: []
  };

  getAllTodos = async () => {
    let res = await fetch(`${baseUrl}?page=1&limit=20`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    });
    let data = await res.json();
    console.log(data);
    this.setState({
      todos: data.data.docs
    });
  };

  handleSubmit = async data => {
    console.log(data);
    let token = localStorage.getItem("userData");
    try {
      let res = await fetch(
        "https://Aneh-sekalian.herokuapp.com/api/v1/tasks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token
          },
          body: JSON.stringify(data)
        }
      );
      const dat = await res.json();
      console.log("dsfs", dat);
      await this.getAllTodos();
    } catch (error) {
      alert("error");
      console.log(error);
    }
  };

  handleDelete = async id => {
    let token = localStorage.getItem("userData");
    try {
      let res = await fetch(
        `https://Aneh-sekalian.herokuapp.com/api/v1/tasks/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: token
          }
        }
      );
      await res.json();
      this.setState({
        todos: this.state.todos.filter(item => item._id !== id)
      });
    } catch (error) {
      alert("error");
      console.log(error);
    }
  };

  componentDidMount() {
    this.getAllTodos();
  }

  render() {
    let lists = this.state.todos.map(item => (
      <li key={item._id}>
        {item.name}
        <button>edit</button>
        <button onClick={() => this.handleDelete(item._id)}>delete</button>
      </li>
    ));
    return (
      <div className="TodoList">
        <h1>TODO LIST</h1>

        <NewTodoForm addNew={this.handleSubmit} />

        <ul>{lists}</ul>
      </div>
    );
  }
}

export default TodoList;
