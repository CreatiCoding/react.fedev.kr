import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const appStyle = {
  position: "relative"
};
const mobileStyle = {
  width: "375px",
  margin: "0 auto"
};
const pcStyle = {};
const headerStyle = {
  position: "absolute",
  display: "flex"
};

export default function() {
  const [mode, setMode] = useState("PC");
  const pcModeOn = () => setMode("PC");
  const mobileModeOn = () => setMode("Mobile");

  return (
    <div
      className="App"
      style={
        mode === "PC"
          ? { ...appStyle, ...pcStyle }
          : { ...appStyle, ...mobileStyle }
      }
    >
      <div style={headerStyle}>
        <div onClick={pcModeOn}>pc</div>
        <div onClick={mobileModeOn}>mobile</div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{mode}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
