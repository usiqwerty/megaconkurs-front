import React from 'react';
import {get_all_vuzes} from "../api";
import VuzTile from "../widgets/VuzTile";

function Homepage() {
    const vuzes = get_all_vuzes();
    return (
        <>
            <header><h1>Главная</h1></header>

            <div id={"tiles_container"}>

                {vuzes.map((vuz) =>
                    <VuzTile title={vuz.name} name={vuz.code}/>
                )}
            </div>
        </>
    );
}

export default Homepage;
