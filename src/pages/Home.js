import React from 'react';
import {useHistory} from "react-router-dom";

function Home() {
    const history = useHistory()


return(
    <div>hallo
        {history.push(`/countries/${'67'}/${"The Netherlands"}`)}
    </div>
        )
}
export default Home;