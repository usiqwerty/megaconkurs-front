import React from 'react';
import RatingList from "../widgets/RatingList";
import {Link, useParams} from "react-router-dom";
import {get_full_rating} from "../api";
function RatingListPage() {
    const {rating_id}= useParams();
    const {vuz, code, rating} = get_full_rating(rating_id!);
    return (
    <>
        <div>
            <span>{vuz} - program {code}</span>
        </div>
        <RatingList rating={rating}/>
    </>
)
    ;
}

export default RatingListPage;
