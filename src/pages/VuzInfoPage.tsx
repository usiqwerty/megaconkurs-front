import React, {useEffect, useState} from 'react';
import RatingList from "../widgets/RatingList";
import {Link, useParams} from "react-router-dom";
import {get_full_rating, vuz} from "../api";
import {get_vuz_info} from "../api";
import vuz_logo from '../img/spbu_logo.png';
import Loading from "../widgets/Loading";

function RatingListPage() {
    const {vuz_code} = useParams();

    const [info, setInfo] = useState({} as vuz)
    useEffect(() => {
        get_vuz_info(vuz_code!).then((response) => {
            response.json().then((r) => {
                setInfo(r)
            });
        });
    }, [vuz_code]);

    if (!vuz_code)
        return <span>Неверные данные</span>;
    return (
        <>
            <div className={"block header-block"}>
                <div className={"header-block-item"}><img src={vuz_logo} alt={"logo"}/></div>
                <div className={"header-block-item"}>
                    <h2>{info.name}</h2>
                    <p>
                        {info.desc}
                    </p>
                </div>

            </div>
            {info && info.attributes?
                <div id={"tiles_container"}>
                    {JSON.parse(info.attributes).map(([key, val]:[string, string]) => {
                        return <div className={"block vuz-attribute"}>
                            <div className={"attr-name"}>{key}</div>
                            <div className={"divider"}></div>
                            <div className={"attr-value"}>{val}</div>
                        </div>

                    })}
                </div>:
                <Loading />
            }
        </>
    );
}

export default RatingListPage;
