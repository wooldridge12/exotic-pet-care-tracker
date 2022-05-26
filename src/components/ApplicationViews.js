import React from "react";
import { Route } from "react-router-dom";
import { LearnMorePage } from "./LearnMore/LearnMore";
import { MainPageIntro } from "./MainPageIntro/MainPageIntroList";

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <MainPageIntro />
            </Route>

            <Route exact path="/careTracker">It Worked!</Route>

            <Route exact path="/learnMore">
                <LearnMorePage />
            </Route>
        </>
    )
}