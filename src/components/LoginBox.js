import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style.scss";

class LoginBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      Redirect: false
    };
  }

  submitLogin = async e => {
    const newData = {
      email: this.state.email,
      password: this.state.password
    };

    try {
      let res = await fetch(
        "https://Aneh-sekalian.herokuapp.com/api/v1/users",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newData)
        }
      );
      let data = await res.json();
      console.log(data);
      if (data.status === true) {
        localStorage.setItem("userData", data.data);
        alert("login success");
        this.setState({ Redirect: true });
      }
      console.log("data", data);
    } catch (error) {
      alert("login error");
      console.log(error);
    }
  };

  render() {
    if (this.state.Redirect) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="inner-container">
        <div className="header">Login</div>
        <div class="box">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="username"
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="password"
              onChange={e => {
                this.setState({ password: e.target.value });
              }}
            />
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this.submitLogin.bind(this)}
          >
            button
          </button>
        </div>
      </div>
    );
  }
}

export default LoginBox;
