import React from "react";

class RegisterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  submitRegister = async e => {
    e.preventDefault();
    const newData = {
      name: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    try {
      let res = await fetch(
        "https://Aneh-sekalian.herokuapp.com/api/v1/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newData)
        }
      );
      let data = await res.json();
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="inner-container">
        <div className="header">Register</div>
        <div class="box">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="username"
              onChange={e => {
                this.setState({ username: e.target.value });
              }}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Email</label>
            <input
              type="email"
              name="email"
              className="login-input"
              placeholder="email"
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
            className="register-btn"
            onClick={this.submitRegister.bind(this)}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default RegisterBox;
