import React from 'react';
import {Link, useNavigate} from "react-router-dom";


function VuzTile({title, name}: { title: string, name: string }) {
    const navigate = useNavigate();
    return (<div className={"tile"}>
        <span>{title}</span>
        <div>
            <Link to={"/vuz/"+name}>Информация</Link><br/>
            <Link to={"/rating/"+name}>Конкурсные списки</Link>
        </div>

    </div>);
}

export default VuzTile;
