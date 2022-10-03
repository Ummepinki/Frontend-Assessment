import { Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './Component/nav/Nav';
import * as React from "react";
import Home from "./Component/Home/Home";
import AddDetails from "./Component/AddDetails/AddDetails";
import FromDetails from "./Component/FromDetails/FromDetails";
import ToolsBar from "./Component/ToolsBar/ToolsBar";

function App() {
  return (
    <div className="App">
        <Nav></Nav>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addDetails" element={<AddDetails/>}/>
        <Route path="/fromDetails" element={<FromDetails/>}/>
      </Routes>
       <ToolsBar></ToolsBar>
    
      
    </div>
  );
}

export default App;
