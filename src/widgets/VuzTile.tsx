import React from 'react';
import {Link, useNavigate} from "react-router-dom";


function VuzTile({title, name}: { title: string, name: string }) {
    return (<div className={"tile block"}>
        <span className={"block_title"}>{title}</span>
        <div className={"block"}>
            <Link to={"/vuz/"+name}>Информация</Link><br/>
            <Link to={"/rating/"+name}>Конкурсные списки</Link>
        </div>

    </div>);
}

export default VuzTile;
