import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./index.css";


function App() {
    return (
        <>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="container">
                <Card />
            </div>
        </>
    )

}





export default App;