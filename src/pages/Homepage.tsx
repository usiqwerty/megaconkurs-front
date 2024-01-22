import React, {useEffect, useState} from 'react';
import {get_all_vuzes, vuz} from "../api";
import VuzTile from "../widgets/VuzTile";

function Homepage() {
    const [vuzes, setVuzes] = useState([] as vuz[])
    useEffect(() => {
        get_all_vuzes().then((response) => {
            response.json().then((r) => setVuzes(r));
        })
    }, []);
    return (
        <>
            <header><h1>Главная</h1></header>


            <div id={"tiles_container"}>

                {vuzes.map((vuz) =>
                    <VuzTile title={vuz.name} name={vuz.code} key={vuz.name}/>
                )}
            </div>


        </>
    );
}

export default Homepage;
