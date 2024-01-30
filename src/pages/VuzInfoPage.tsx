import React, {useEffect, useState} from 'react';
import RatingList from "../widgets/RatingList";
import {Link, useParams} from "react-router-dom";
import {get_full_rating, vuz} from "../api";
import {get_vuz_info} from "../api";
import vuz_logo from '../img/spbu_logo.png';

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
    const vuz_attributes = [
        {key: "Место в рейтинге XXX", val: 10},
        {key: "Место в рейтинге YYY", val: 8},
        {key: "Место в рейтинге ZZZ", val: 15},
        {key: "Количество амогусов", val: 3529},
        {key: "Стоимость бибы в год", val: 130000},
    ];
    if (!vuz) return <b>biba</b>;
    //const info = ;
    if (!info)
        return <span>Неверные данные</span>
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
            <div id={"tiles_container"}>
                {vuz_attributes.map((vuz_attr) => {
                    return <div className={"tile vuz-attribute"}>
                        <div className={"attr-name"}>{vuz_attr.key}</div>
                        <div className={"divider"}>{}</div>
                        <div className={"attr-value"}>{vuz_attr.val}</div>
                    </div>

                })}
            </div>

        </>
    );
}

export default RatingListPage;
