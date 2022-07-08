import React from "react";
import { Route } from "react-router-dom";
import { CareFactsList } from "./LearnMore/care";
import { LearnMorePage } from "./LearnMore/LearnMore";
import { MainPageIntro } from "./MainPageIntro/MainPageIntroList";
import { CareTracker } from "./CareTracker/CareTracker";

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <MainPageIntro />
            </Route>

            <Route exact path="/careTracker">
                <CareTracker />
            </Route>

            <Route exact path="/learnMore">
                <LearnMorePage />
            </Route>

            <Route exact path="/care">
                <CareFactsList />
            </Route>
        </>
    )
}
