import React from "react"
import ReactDOM from "react-dom"

import Picture from "./components/Picture"
import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="container">
            <Picture />
            <div className="general-container"></div>
            <Info />
            <About />
            <Interests />
            <Footer />        
        </div>
    )
}