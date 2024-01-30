import React, {useEffect, useState} from 'react';
import RatingList from "../widgets/RatingList";
import {Link, useParams} from "react-router-dom";
import {get_full_rating, vuz} from "../api";
import {get_vuz_info} from "../api";

function RatingListPage() {
    const {vuz} = useParams();

    const [info, setInfo] = useState({} as vuz)
    useEffect(() => {
        get_vuz_info(vuz!).then((response) => {
            response.json().then((r) => {
                setInfo(r)
            });
        });
    }, []);
    if (!vuz) return <b>biba</b>;
    //const info = ;
    if (!info)
        return <span>Неверные данные</span>
    return (
        <>
            <div className={"block header-block"}>
                <div className={"header-block-item"}><img alt={"logo"}/></div>
                <div className={"header-block-item"}>
                    <h2>{info.name}</h2>
                    <p>
                        {info.desc}
                    </p>
                </div>

            </div>
        </>
    );
}

export default RatingListPage;
