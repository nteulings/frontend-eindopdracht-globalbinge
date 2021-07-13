import React, {useContext} from 'react';
import {authContext} from "../context/AuthContext";
import ExpMovies from "../components/ExpMovies";
import NewMovies from "../components/NewMovies";
import {countryDataContext} from "./Countries";
import {ReactComponent as LoadingSpinner} from "../assets/spinning-circles.svg";

function Home() {
    const { countryName, countryId } = useContext(countryDataContext);
    const authData = useContext(authContext);
    console.log("Wat is authData:", authData);
    console.log("countryName?", countryName);
    console.log("countryID?", countryId);

    return (
        <countryDataContext.Provider
            value={{ countryName, countryId }}
        >
        <div className="page-container">
            <h1>Homepage</h1>

            <LoadingSpinner />
            <ExpMovies />
            <NewMovies />
        </div>
        </countryDataContext.Provider>
    );
}

export default Home;