import React, {useEffect, useState} from 'react';
import RatingList from "../widgets/RatingList";
import {Link, useParams} from "react-router-dom";
import {get_full_rating, rating_entry} from "../api";
import {program_full_name, vuz_short_name} from "../code_translator";
import Loading from "../widgets/Loading";

function RatingListPage() {
    const {vuz_code, rating_id} = useParams();
    const [data, setData] = useState({} as { vuz: string, code: string, rating: rating_entry[] })
    useEffect(() => {
        get_full_rating(vuz_code!, rating_id!).then((response) => {
            response.json().then((r) => setData(r))
        })

    }, [vuz_code, rating_id]);
    return (
        <>
            <div className={"block header-block"}>
            <span id={"header-content"}>
                <Link to={'/vuz/' + data.vuz}>Конкурсные списки: {vuz_short_name(vuz_code!)}</Link> - {data.code} {program_full_name(data.code)}
            </span>
            </div>
            {data && data.rating && data.rating.length > 0 ?
                <RatingList rating={data.rating}/>
                : <Loading/>
            }

        </>
    )
        ;
}

export default RatingListPage;
