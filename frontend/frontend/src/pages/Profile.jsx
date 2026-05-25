import { useEffect, useState } from "react";

import Layout from "../components/Layout";

function Profile() {

  const [profile, setProfile] = useState({

    name: "",

    email: "",

    income: ""

  });

  useEffect(() => {

    fetchProfile();

  }, []);

  const fetchProfile = async () => {

    try {

      const user = JSON.parse(
        localStorage.getItem("user")
      );

      const response = await fetch(
        `https://finance-backend-cwm9.onrender.com`
      );

      const data = await response.json();

      setProfile(data);

    } catch (error) {

      console.log(error);

    }

  };

  const updateProfile = async () => {

  try {

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    const response = await fetch(
      `https://finance-backend-cwm9.onrender.com/update-profile/${user.id}`,
      {

        method: "PUT",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify(profile)

      }
    );

    const data = await response.json();

    if (response.ok) {

      alert(data.message);

      // Update localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({

          ...user,

          ...profile

        })
      );

    } else {

      alert(data.error);

    }

  } catch (error) {

    console.log(error);

  }

};

  return (

    <Layout>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh"
        }}
      >

        <div style={cardStyle}>

          {/* Profile Image */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "25px"
            }}
          >

            <div style={avatarStyle}>

              {
                profile.name
                ?.charAt(0)
                ?.toUpperCase()
              }

            </div>

          </div>

          <h1
            style={{
              textAlign: "center",
              marginBottom: "30px",
              color: "#1e293b"
            }}
          >
            Profile Settings
          </h1>

          {/* Name */}

          <label style={labelStyle}>
            Full Name
          </label>

          <input
            type="text"
            value={profile.name}
            onChange={(e) =>
              setProfile({

                ...profile,

                name: e.target.value

              })
            }
            style={inputStyle}
          />

          {/* Email */}

          <label style={labelStyle}>
            Email
          </label>

          <input
            type="email"
            value={profile.email}
            onChange={(e) =>
              setProfile({

                ...profile,

                email: e.target.value

              })
            }
            style={inputStyle}
          />

          {/* Income */}

          <label style={labelStyle}>
            Monthly Income
          </label>

          <input
            type="number"
            value={profile.income}
            onChange={(e) =>
              setProfile({

                ...profile,

                income: e.target.value

              })
            }
            style={inputStyle}
          />

          {/* Button */}

          <button
            onClick={updateProfile}
            style={buttonStyle}
          >
            Update Profile
          </button>

        </div>

      </div>

    </Layout>

  );
}

const cardStyle = {

  background: "white",

  padding: "40px",

  borderRadius: "25px",

  width: "450px",

  boxShadow:
    "0px 4px 20px rgba(0,0,0,0.08)"

};

const avatarStyle = {

  width: "90px",

  height: "90px",

  borderRadius: "50%",

  background:
    "linear-gradient(to right,#2563eb,#3b82f6)",

  color: "white",

  display: "flex",

  justifyContent: "center",

  alignItems: "center",

  fontSize: "35px",

  fontWeight: "bold"

};

const labelStyle = {

  display: "block",

  marginBottom: "8px",

  marginTop: "15px",

  color: "#475569",

  fontWeight: "600"

};

const inputStyle = {

  width: "100%",

  padding: "15px",

  borderRadius: "12px",

  border: "1px solid #cbd5e1",

  marginBottom: "10px",

  fontSize: "16px",

  background: "#f8fafc"

};

const buttonStyle = {

  width: "100%",

  padding: "15px",

  background:
    "linear-gradient(to right,#2563eb,#3b82f6)",

  color: "white",

  border: "none",

  borderRadius: "12px",

  marginTop: "25px",

  fontSize: "18px",

  cursor: "pointer",

  fontWeight: "bold"

};

export default Profile;