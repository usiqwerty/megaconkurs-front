import React from 'react';
import {get_all_vuzes} from "../api";
import VuzTile from "../widgets/VuzTile";
function Homepage() {
    const vuzes= get_all_vuzes();
    return (
        <>
        <h1>Главная</h1>
        <div id={"tiles_container"}>

            {vuzes.map((vuz)=>
                <VuzTile title={vuz} name={vuz.toLowerCase()}/>
            )}
        </div>
        </>
    );
}

export default Homepage;
