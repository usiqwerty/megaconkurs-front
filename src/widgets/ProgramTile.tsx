import React from 'react';
import {Link, useNavigate} from "react-router-dom";


function ProgramTile({title, code, vuz_name}: { title: string, code: string, vuz_name: string }) {
    return (<div className={"tile"}>
        <span>Программа {title}</span>
        <div>
            <Link to={"/rating/" + vuz_name + "/" + code}>Конкурсный список</Link><br/>
        </div>

    </div>);
}

export default ProgramTile;
