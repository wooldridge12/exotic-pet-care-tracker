import React, { useState, createContext } from "react"

export const BathContext = React.createContext();

export const BathProvider = (props) => {
    const [ baths, setBaths ] = useState([]);

    const getBaths = () => {
        
    }
}