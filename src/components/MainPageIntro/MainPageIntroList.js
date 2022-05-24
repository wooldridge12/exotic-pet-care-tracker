import React from "react";
import { useHistory } from "react-router-dom";
import "./MainPageIntroList.css"


export const MainPageIntro = () => {
    const history = useHistory()

    return (
        <div className="introPage">
            <div className="introSentence">Welcome To Exotic Pet Care Tracker!</div>
            <button className="getStartedBtn"
                onClick={() => {
                    history.push({pathname:"/caretracker"})}}>Lets Get Started!</button>
        </div>
    )
}