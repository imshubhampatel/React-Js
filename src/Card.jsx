import React from "react";
import userData from "./UserData";
import "./index.css"

export default function Card(props) {

    return (
        <>
            {userData.map((item) => {
                return (
                    <>
                        <div className="cards">
                            <div className="card">
                                <div className="card-image">
                                    <img src={item.imgsrc} alt="Movie-image" />
                                </div>
                                <div className="card-category">

                                </div>
                                <div className="card-title">
                                    <h2>{item.series}</h2>
                                </div>
                                <div className="card-button">
                                    <button><a href={item.link}>Watch Now</a></button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
};

// <>

// </>