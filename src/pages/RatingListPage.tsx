import React, {useEffect, useState} from 'react';
import RatingList from "../widgets/RatingList";
import {Link, useParams} from "react-router-dom";
import {get_full_rating, rating_entry} from "../api";
import {program_full_name, vuz_short_name} from "../code_translator";

function RatingListPage() {
    const {vuz_code, rating_id}= useParams();
    const [data, setData] = useState({} as {vuz:string, code:string, rating:rating_entry[]})
    useEffect(() => {
        get_full_rating(vuz_code!, rating_id!).then((response)=>{
            response.json().then((r)=>setData(r))
        })

    }, [vuz_code, rating_id]);
    if (!data.rating)
        return <span>Загрузка...</span>
    return (
    <>
        <div className={"block header-block"}>
            <span id={"header-content"}>
                <Link to={'/vuz/'+data.vuz}>{vuz_short_name(data.vuz)}</Link> - {data.code}  {program_full_name(data.code)}
            </span>
        </div>
        <RatingList rating={data.rating} set_data={setData}/>
    </>
)
    ;
}

export default RatingListPage;
