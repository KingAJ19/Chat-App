import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Register } from "./pages/Register";
import './style.css'

function App() {
  return (
    <Register />
    // <Login />
    // <Home />
  );
}

export default App;
