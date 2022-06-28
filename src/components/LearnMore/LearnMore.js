import React from "react"
import { useHistory } from "react-router-dom"
import "./LearnMore.css"


// This will just return facts about bearded dragon care.
export const LearnMorePage = () => {
    const history = useHistory()
    return (
        <div className="factsChoices">
        <div>Bearded Dragon!!!</div>

        <button onClick={() => {
            history.push({pathname:"/care"})
        }}>Care</button>

        <button onClick={() => {
            history.push({pathname:"/funFacts"})
        }}>Fun Facts</button>
        </div>
    )
}