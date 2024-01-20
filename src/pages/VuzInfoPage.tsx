import React from 'react';
import RatingList from "../widgets/RatingList";
import {Link, useParams} from "react-router-dom";
import {get_full_rating} from "../api";
import {get_vuz_info} from "../api";

function RatingListPage() {
    const {vuz} = useParams();
    if (!vuz) return <b>biba</b>;
    const info = get_vuz_info(vuz);
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
