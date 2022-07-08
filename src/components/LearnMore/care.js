import React from "react"
import { useHistory } from "react-router-dom"


// Care facts
export const CareFactsList = () => {
    return (
        <div>
            <h1>Care facts</h1>
            <h1>How to keep your bearded dragon healthy, happy, and safe!</h1>
            <section>
                <h3>Always</h3>
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
                    <li>
                        Provide captive bearded dragons with approximately 12 hours of UVB lighting in their enclosures each day. Talk to your reptile veterinarian for the best current recommendations in UV bulbs. Fluorescent UVB bulbs should be replaced every 6 months to ensure proper UVB output. It is ideal to provide direct sunlight when possible (note that UVB rays are blocked by glass or plexiglass). 
                    </li>
                    <li>
                        Allow supervised time outdoors to bask when the temperature is above 70 degrees F (20 degrees C) (only in secure enclosures that will not overheat with access to shade and water).
                    </li>
                    <li>
                        Consult with your exotic animal veterinarian about supplementaion of calcium and vitamins (generally should include regular calcium carbonate with mixed vitamins every 1 - 2 weeks).
                    </li>
                </ul>

                <hr />

                <h3>Housing your Bearded dragon Should:</h3>
                <ul>
                    <li>
                        Be spacious and easy to clean with smooth sides to prevent rostral (nose) abrasions.
                    </li>
                    <li>
                        Be the size of a 10 - gallon tank for baby dragon; adults need large enclosures that have a square footage of at least four times the length of the bearded dragon [a 2 foot bearded dragon would need an enclosure of atleast 4 x 2 ft (1.2 x0.6 m)].
                    </li>
                    <li>
                        Be large enough for climbing, exploration, and basking.
                    </li>
                    <li>
                        Contain thick climbing branches or rocks to support heavy-bodied dragons.
                    </li>
                    <li>
                        Have access to food and water containers for frequent cleaning.
                    </li>
                    <li>
                        Provide a hiding area, such as a cardboard box or clay plant pot.
                    </li>
                    <li>
                        Include non-particulate substrates such as reptile carpet (consult with you exotic animal veterinarian about other substrate recommendations for adults).
                    </li>
                    <li>
                        Dragon babies less than 6 months old should be housed on paper towels.
                    </li>
                </ul>

                <hr />

                <h3>It is important to avoid:</h3>
                <ul>
                    <li>
                        gravel, corn cob bedding, sand (including calcium sand), walnut shavings as substrates (to avoid possible gastrointinal impaction)
                    </li>
                    <li>
                        potentially toxic live plants
                    </li>
                    <li>
                        free roam of the house (to prevent chilling, trauma, ingestion of foreign materials and escape)
                    </li>
                    <li>
                        shared housing between any two or more dragons of different sizes
                    </li>
                    <li>
                        potential for direct contact with heating elements (including hot rocks)
                    </li>
                    <li>
                        over - supplementaion of vitamins or minerals
                    </li>
                    <li>
                        feeding lightning bugs (which are toxic) or wild insects that might contain insecticide toxins
                    </li>
                </ul>
            </section>
        </div>
    )
}