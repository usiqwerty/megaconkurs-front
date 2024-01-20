import React from "react";
import "../css/RatingList.css";
import {rating_entry} from "../api";
function RatingList({rating}:{rating: rating_entry[]}) {
    return (
        <div id={"table_wrapper"}>
        <table id={"rating_list"}>
            <tbody>
            <tr className={"row"}>
                <td className={"pos"}>№</td>
                <td className={"snils"}>СНИЛС</td>
                <td className={"subject_score"}>Предмет 1</td>
                <td className={"subject_score"}>Предмет 2</td>
                <td className={"subject_score"}>Предмет 3</td>
                <td>Аттестат</td>
                <td>Конкурс</td>
                <td>На других специальностях</td>
            </tr>
            {rating.map((place) => <tr className={"row"}>
                <td className={"pos"}>{place.pos}</td>
                <td className={"snils"}>{place.snils}</td>
                {place.score.map((score)=><td className={"subject_score"}>{score}</td>)}
                <td>{place.confirmed? "Да": "Нет"}</td>
                <td>{place.bvi? "БВИ" : "Общий"}</td>
                <td>
                    <>{place.other.map((other)=><span><a>{other.code}: на {other.position} месте {other.confirmed? "(подтверждёт)":""}</a><br/></span>)}</>
                </td>
            </tr>)}

            </tbody>
        </table>
        </div>
    );
}

export default RatingList;

