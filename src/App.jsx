import React from "react";
import { Route } from "react-router-dom";
import "./styles/common.css";
import "semantic-ui-css/semantic.min.css";
//component
import Timeline from "./pages/Timeline";
import Navigation from "./parts/Navigation";
import Header from "./parts/Header";

const app = () => (
    <div className="wrapper">
        <Header />
        <Route exact path="/" component={Timeline} />
        <Navigation />
    </div>
);

export default app;
