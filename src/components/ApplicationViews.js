import React from "react";
import { Route } from "react-router-dom";
import { MainPageIntro } from "./MainPageIntro/MainPageIntroList";

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <MainPageIntro />
            </Route>

            <Route exact path="/careTracker">It Worked!</Route>
        </>
    )
}