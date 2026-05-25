import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

import {
  FaHome,
  FaPlusCircle,
  FaChartBar,
  FaWallet,
  FaHistory,
  FaSignOutAlt
} from "react-icons/fa";

function Layout({ children }) {

  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] =
    useState(false);

  const [profileImage, setProfileImage] =
    useState(null);

  const user = JSON.parse(
    localStorage.getItem("user")
    );

  // Logout
  const logout = () => {

  localStorage.removeItem(
    "isLoggedIn"
  );

  navigate("/");

};

  // Upload Profile Image
  const handleImageUpload = (e) => {

    const file = e.target.files[0];

    if (file) {

      setProfileImage(
        URL.createObjectURL(file)
      );

    }

  };

  return (

    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background:
          "linear-gradient(to right,#f8fafc,#e2e8f0)"
      }}
    >

      {/* Sidebar */}

      <div style={sidebarStyle}>

        <h2
          style={{
            color: "white",
            marginBottom: "40px"
          }}
        >
          💰 Finance Tracker
        </h2>

        <Link style={linkStyle} to="/dashboard">
          <FaHome />
          Dashboard
        </Link>

        <Link style={linkStyle} to="/add">
          <FaPlusCircle />
          Add Expense
        </Link>

        <Link style={linkStyle} to="/analytics">
          <FaChartBar />
          Analytics
        </Link>

        <Link style={linkStyle} to="/savings">
          <FaWallet />
          Savings
        </Link>

        <Link style={linkStyle} to="/history">
          <FaHistory />
          History
        </Link>

      </div>

      {/* Main Section */}

      <div
        style={{
          flex: 1
        }}
      >

        {/* Top Navbar */}

        <div style={topbarStyle}>

          <h1
            style={{
              color: "#1e293b"
            }}
          >
            AI Finance Tracker
          </h1>

          {/* Profile */}

          <div
            style={{
              position: "relative"
            }}
          >

            <div
              onClick={() =>
                setShowDropdown(
                  !showDropdown
                )
              }
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer"
              }}
            >

              {

                profileImage ? (

                  <img
                    src={profileImage}
                    alt="Profile"
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border:
                        "2px solid #2563eb"
                    }}
                  />

                ) : (

                  <div
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      background: "#2563eb",
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: "bold",
                      fontSize: "18px"
                    }}
                  >
                    {user?.name?.charAt(0)}
                  </div>

                )

              }

              <span
                style={{
                  fontWeight: "bold",
                  color: "#1e293b"
                }}
              >
                {user?.name}

              </span>

            </div>

            {/* Dropdown */}

            {

              showDropdown && (

                <div style={dropdownStyle}>

                  <Link
                    to="/profile"
                    style={dropdownLink}
                  >
                    👤 Profile
                  </Link>

                  <label
                    style={{
                      cursor: "pointer",
                      padding: "12px",
                      display: "block",
                      color: "#1e293b"
                    }}
                  >
                    📷 Upload Photo

                    <input
                      type="file"
                      accept="image/*"
                      onChange={
                        handleImageUpload
                      }
                      hidden
                    />

                  </label>

                  <div
                    onClick={logout}
                    style={dropdownLink}
                  >
                    <FaSignOutAlt />
                    Logout
                  </div>

                </div>

              )

            }

          </div>

        </div>

        {/* Page Content */}

        <div
          style={{
            padding: "30px"
          }}
        >

          {children}

        </div>

      </div>

    </div>

  );
}

const sidebarStyle = {

  width: "250px",

  background:
    "linear-gradient(to bottom,#2563eb,#1d4ed8)",

  padding: "30px",

  display: "flex",

  flexDirection: "column",

  gap: "25px",

  boxShadow:
    "4px 0px 10px rgba(0,0,0,0.1)"

};

const linkStyle = {

  color: "white",

  textDecoration: "none",

  fontSize: "18px",

  display: "flex",

  alignItems: "center",

  gap: "10px",

  fontWeight: "500",

  padding: "10px",

  borderRadius: "10px",

  transition: "0.3s"

};

const topbarStyle = {

  background: "white",

  padding: "20px 30px",

  display: "flex",

  justifyContent: "space-between",

  alignItems: "center",

  boxShadow:
    "0px 2px 10px rgba(0,0,0,0.08)"

};

const dropdownStyle = {

  position: "absolute",

  top: "60px",

  right: "0",

  background: "white",

  borderRadius: "15px",

  boxShadow:
    "0px 4px 15px rgba(0,0,0,0.1)",

  width: "220px",

  overflow: "hidden",

  zIndex: 100

};

const dropdownLink = {

  display: "flex",

  alignItems: "center",

  gap: "10px",

  padding: "12px",

  textDecoration: "none",

  color: "#1e293b",

  cursor: "pointer"

};

export default Layout;