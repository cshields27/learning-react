import React from "react"
import ReactDOM from "react-dom"
import Email from "./Email"
import LinkedIn from "./LinkedIn"

export default function Info(){
    return (
        <div>
            <Email />
            <LinkedIn />
            <h3 className="name"> Connor Shields </h3>
            <h4 className="title"> Full Stack Developer </h4>
            <p className="website"> github.com/cshields27 </p>
        </div>
    )
}