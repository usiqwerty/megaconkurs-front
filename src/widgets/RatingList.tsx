import React from "react";
import "../css/RatingList.css";
import {rating_entry} from "../api";
import {Link} from "react-router-dom";

function RatingList({rating}: { rating: rating_entry[] }) {
    return (
        <div id={"table_wrapper"}>
            <table id={"rating_list"}>
                <tbody>
                <tr className={"row"}>
                    <td className={"pos"}>№</td>
                    <td className={"snils"}>СНИЛС</td>
                    <td className={"subject_score"}>Предмет 1</td>

                    <td>Аттестат</td>
                    <td>Конкурс</td>
                    <td>На других специальностях</td>
                </tr>
                {rating.map((place) => <tr className={"row"}>
                    <td className={"pos"}>{place.pos}</td>
                    <td className={"snils"}>{place.snils}</td>
                    <td className={"subject_score"}>{place.score}</td>
                    {/*place.score.map((score)=>))*/}
                    <td>{place.confirmed ? "Да" : "Нет"}</td>
                    <td>{place.bvi ? "БВИ" : "Общий"}</td>
                    <td>
                        <>{place.other.map((other) => <span><Link
                            to={"/rating/" + other.vuz + "/" + other.code}>{other.code}: на {other.position} месте {other.confirmed ? "(подтверждёт)" : ""}</Link><br/></span>)}</>
                    </td>
                </tr>)}

                </tbody>
            </table>
        </div>
    );
}

export default RatingList;

