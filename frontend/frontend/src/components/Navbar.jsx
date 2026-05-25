import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav
      style={{
        background: "#020617",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        boxShadow: "0px 4px 15px rgba(0,0,0,0.3)"
      }}
    >
      <Link style={linkStyle} to="/login">
      Login
      </Link>

      <Link style={linkStyle} to="/signup">
      Signup
      </Link>

      <Link style={linkStyle} to="/profile">
      Profile
      </Link>

      <Link style={linkStyle} to="/">
        Dashboard
      </Link>

      <Link style={linkStyle} to="/add">
        Add Expense
      </Link>

      <Link style={linkStyle} to="/analytics">
        Analytics
      </Link>

      <Link style={linkStyle} to="/prediction">
        Prediction
      </Link>

      <Link style={linkStyle} to="/savings">
        Savings
      </Link>
      <Link style={linkStyle} to="/history">
        History
      </Link>

    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "bold"
};

export default Navbar;