import React from "react"
import { useHistory } from "react-router-dom"


// Care facts
export const CareFactsList = () => {
    return (
        <div>
            <h1>Care facts</h1>
            <h1>How to keep your bearded dragon healthy, happy, and safe!</h1>
            <section>
                <h3>ALways</h3>
                <ul>
                    <li>
                        Wash your hands before and after handling your beadred dragon or cleaning the enclosure.
                    </li>
                    <li>
                        Quarantine new dragons in a seperate area of the house for 3 - 6 months.
                    </li>
                    <li>
                        Housing dragons together should be avoided to prevent trauma from fighting. If dragons are being kept in the same enclosure they must be of similar size and have plenty of space available.
                    </li>
                    <li>
                        Monitor individuals regulary when multiple dragons are housed together for signs of decreased condition of traumatic injuries.
                    </li>
                    <li>
                        Ensure a gradient of temperatures in their enclosure, from 77 degrees F (25 degrees C) on the cool side to 90 degrees F (32 degrees C) on the warm side with a hot basking spot of around 100 degrees (38 degrees C). At night, the temperature should drop no lower than mid 70 degrees F (23 - 24 degrees C).
                    </li>
                </ul>
            </section>
        </div>
    )
}