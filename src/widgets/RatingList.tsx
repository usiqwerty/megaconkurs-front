import React from "react";
import "../css/RatingList.css";
import {rating_entry} from "../api";
import {Link, NavLink} from "react-router-dom";

function RatingList({rating}: { rating: rating_entry[]}) {
    function boolsum(array: boolean[]) {
        let count=0;
        array.map(
            (item) =>
            {count+=Number(item)}
        );
        return count>0;
    }

    return (
        <div id={"table_wrapper"}>
            <table id={"rating_list"}>
                <tbody>
                <tr className={"row"}>
                    <td className={"pos"}>№</td>
                    <td className={"snils"}>СНИЛС</td>
                    <td className={"subject_score"}>Сумма</td>
                    <td>Аттестат здесь</td>
                    <td>Аттестат где-то там</td>
                    <td>Конкурс</td>
                    <td>На других специальностях</td>
                </tr>
                {rating.map((place) => <tr className={"row"}>
                    <td className={"pos"}>{place.pos}</td>
                    <td className={"snils"}>{place.snils}</td>
                    <td className={"subject_score"}>{place.score >0? place.score: "-"}</td>
                    <td>{place.confirmed ? "Да" : "Нет"}</td>
                    <td>{boolsum(place.other.map( (ext)=>{return ext.confirmed}))? "Да":"Нет" }</td>
                    <td>{place.bvi ? "БВИ" : "Общий"}</td>
                    <td>
                        <>
                            {place.other.map((other) =>
                                <span>
                                    <Link to={"/rating/" + other.vuz + "/" + other.code}>
                                        {other.code}: на {other.position} месте {other.confirmed ? "(подтверждён)" : ""}
                                    </Link>
                                    <br/>
                                </span>
                            )}
                        </>
                    </td>
                </tr>)}

                </tbody>
            </table>
        </div>
    );
}

export default RatingList;

