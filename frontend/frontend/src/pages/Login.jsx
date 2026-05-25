import { useState } from "react";

import {
  useNavigate,
  Link
} from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const loginUser = async () => {

    try {

      const response = await fetch(
        "http://127.0.0.1:5000/login",
        {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({

            email,
            password

          })

        }
      );

      const data = await response.json();

      if (response.ok) {

       localStorage.setItem(
        "user",
        JSON.stringify(data.user)
        );

        alert(data.message);

        navigate("/dashboard");

      } else {

        alert(data.error);

      }

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div style={containerStyle}>

      <div style={cardStyle}>

        <h1>Login</h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={inputStyle}
        />

        <button
          onClick={loginUser}
          style={buttonStyle}
        >
          Login
        </button>

        <p
          style={{
            marginTop: "20px"
          }}
        >
          Don't have an account?

          <Link
            to="/signup"
            style={{
              color: "#2563eb",
              marginLeft: "5px"
            }}
          >
            Signup
          </Link>

        </p>

      </div>

    </div>

  );
}

const containerStyle = {

  minHeight: "100vh",

  background:
    "linear-gradient(to right,#dbeafe,#eff6ff)",

  display: "flex",

  justifyContent: "center",

  alignItems: "center"

};

const cardStyle = {

  background: "white",

  padding: "40px",

  borderRadius: "20px",

  width: "400px",

  boxShadow:
    "0px 4px 15px rgba(0,0,0,0.1)"

};

const inputStyle = {

  width: "100%",

  padding: "15px",

  marginBottom: "20px",

  borderRadius: "10px",

  border: "1px solid #cbd5e1"

};

const buttonStyle = {

  width: "100%",

  padding: "15px",

  background: "#2563eb",

  color: "white",

  border: "none",

  borderRadius: "10px",

  cursor: "pointer"

};

export default Login;