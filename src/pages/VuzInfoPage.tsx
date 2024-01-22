import React, {useEffect, useState} from 'react';
import RatingList from "../widgets/RatingList";
import {Link, useParams} from "react-router-dom";
import {get_full_rating, vuz} from "../api";
import {get_vuz_info} from "../api";

function RatingListPage() {
    const {vuz} = useParams();

    const [info, setInfo] = useState({} as vuz)
    useEffect(() => {
        get_vuz_info(vuz!).then((response)=>{
            response.json().then((r)=>{setInfo(r)});
        });
    }, []);
    if (!vuz) return <b>biba</b>;
    //const info = ;
    if (!info)
        return <span>Неверные данные</span>
    return (
        <>
            <div>
                <span>{info.name}</span>
                <p>
                    тыщ пыщ пыщ информация<br/>
                    офигенный вуз<br/>
                    какой он крутой<br/>
                    хочу тут учиться<br/>
                    не хочу тут учиться<br/>
                </p>

            </div>

        </>
    );
}

export default RatingListPage;
