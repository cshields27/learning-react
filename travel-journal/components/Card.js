import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img className="location-image" src={props.imageUrl} />
            <div className="location-info">
                <div className="location-maps">
                    <img className="location-pin" src="./images/pin.png" />
                    <p className="location-name"> {props.location} </p>
                    <a href={props.googleMapsUrl} className="location-google"> View on Google Maps </a>
                </div>
                <h1 className="location-title"> {props.title} </h1>
                <p className="location-date"> {`${props.startDate} - ${props.endDate}`} </p>
                <p className="location-description"> {props.description} </p>
            </div>
        </div>
    )
}