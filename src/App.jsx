import React from "react";
import { Route } from "react-router-dom";
import "./styles/common.css";
import "semantic-ui-css/semantic.min.css";
//component
import Navigation from "./parts/Navigation";
import Header from "./parts/Header";
import Timeline from "./pages/Timeline";
import SignUp from "./pages/SignUp";

const app = () => (
    <div className="wrapper">
        <Header />
        <Route exact path="/" component={SignUp} />
        <Route path="/signup" component={SignUp} />
        <Navigation />
    </div>
);

export default app;
