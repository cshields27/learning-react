import React from "react"
import Card from "./Card"
import data from "../data"

export default function Locations() {
    const cards = data.map(item =>
        <Card
            key={item.title}
            {...item}
        />
    )
    return (
        <div className="locations">
            {cards}
        </div>
    )
}