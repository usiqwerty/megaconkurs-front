import React, {useEffect, useState} from 'react';
import RatingList from "../widgets/RatingList";
import {Link, useParams} from "react-router-dom";
import {get_full_rating, rating_entry} from "../api";
function RatingListPage() {
    const {vuz_code, rating_id}= useParams();
    const [data, setData] = useState({} as {vuz:string, code:string, rating:rating_entry[]})
    useEffect(() => {
        get_full_rating(vuz_code!, rating_id!).then((response)=>{
            response.json().then((r)=>setData(r))
        })

    }, []);
    if (!data.rating)
        return <span>Loading</span>
    return (
    <>
        <div>
            <span>{data.vuz} - program {data.code}</span>
        </div>
        <RatingList rating={data.rating}/>
    </>
)
    ;
}

export default RatingListPage;
