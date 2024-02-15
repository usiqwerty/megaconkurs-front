import React, {useEffect, useState} from 'react';
import {get_all_vuzes, vuz} from "../api";
import VuzTile from "../widgets/VuzTile";
import '../css/Homepage.css';
import Loading from '../widgets/Loading';

function Homepage() {
    const [vuzes, setVuzes] = useState([] as vuz[])
    useEffect(() => {
        get_all_vuzes().then((response) => {
            response.json().then((r) => setVuzes(r));
        })
    }, []);

    return (
        <>

            <div id={"large-header"}><h1>Главная</h1></div>
            {vuzes.length <= 0 ? <Loading/> :
                <div id={"tiles_container"}>

                    {vuzes.map((vuz) =>
                        <VuzTile title={vuz.name} name={vuz.code} key={vuz.name}/>
                    )}
                </div>
            }


        </>


    );
}

export default Homepage;
