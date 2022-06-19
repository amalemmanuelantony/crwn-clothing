import React from "react";
import Directory from "../../components/directory/Directory";
import "./HomePage.scss";

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <Directory />
        </div>
    </div>
);

export default HomePage;