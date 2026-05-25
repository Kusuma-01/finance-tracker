import { useState } from "react";

import {
  useNavigate,
  Link
} from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const signupUser = async () => {

    try {

      const response = await fetch(
        "http://127.0.0.1:5000/signup",
        {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({

            name,
            email,
            password

          })

        }
      );

      const data = await response.json();

      if (response.ok) {

        alert(data.message);

        navigate("/");

      } else {

        alert(data.error);

      }

    } catch (error) {

      console.log(error);

      alert("Signup Failed");

    }

  };

  return (

    <div style={containerStyle}>

      <div style={cardStyle}>

        <h1
          style={{
            marginBottom: "30px"
          }}
        >
          Signup
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          style={inputStyle}
        />

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
          onClick={signupUser}
          style={buttonStyle}
        >
          Signup
        </button>

        <p
          style={{
            marginTop: "20px"
          }}
        >
          Already have an account?

          <Link
            to="/"
            style={{
              color: "#2563eb",
              marginLeft: "5px"
            }}
          >
            Login
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

  background: "#16a34a",

  color: "white",

  border: "none",

  borderRadius: "10px",

  cursor: "pointer"

};

export default Signup;