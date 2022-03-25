import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [url, setUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const urlInputHandler = (e) => {
    setUrl(e.target.value);
  };
  const usernameInputHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  };
  const uploadUrl = () => {
    if (authenticated) {
      Axios.post("https://onlysiam.com/api/resume", {
        username: "onlysiam",
        url: url,
      }).then((response) => {
        if (response.data.rows.affectedRows === 1) {
          setUrl("");
          alert("url changed");
        }
      });
    } else {
      alert("Login First");
    }
  };
  const login = () => {
    const url =
      "https://onlysiam.com/api/login" + "/" + username + "/" + password;
    Axios.get(url, {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.length > 0) {
        setUsername("");
        setPassword("");
        setAuthenticated(true);
      } else {
        alert("wrong username/password");
      }
    });
  };
  return (
    <AdminStyle>
      {authenticated ? (
        <div className="resume">
          <h1>Resume Link</h1>
          <input
            onChange={urlInputHandler}
            value={url}
            type="text"
            placeholder="url"
          />
          <button onClick={uploadUrl}>Submit</button>
        </div>
      ) : (
        <div className="login">
          <h1>Admin Login</h1>
          <input
            onChange={usernameInputHandler}
            value={username}
            type="text"
            placeholder="username"
          />
          <input
            onChange={passwordInputHandler}
            value={password}
            type="password"
            placeholder="password"
          />
          <button onClick={login}>Submit</button>
        </div>
      )}
    </AdminStyle>
  );
};

const AdminStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  .resume {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 25vw;
    height: 60vh;
    padding: 3rem;
    border-radius: 5px;
    background-color: #2c777f;
    gap: 2rem;
  }
  .login {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 25vw;
    height: 60vh;
    padding: 3rem;
    border-radius: 5px;
    background-color: #2c777f;
    gap: 2rem;
  }
  h1 {
    color: white;
  }
  input {
    border: none;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    height: 2rem;
    width: 100%;
  }
  button {
    width: 10vw;
    padding: 1rem;
    border-radius: 5px;
    background-color: #0ec4b0;
    border: none;
    outline: none;
    font-size: 1rem;
    cursor: pointer;
  }
`;
export default Admin;
