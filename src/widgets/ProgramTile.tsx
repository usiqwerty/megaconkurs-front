import React from 'react';
import {Link} from "react-router-dom";


function ProgramTile({title, code, vuz_name}: { title: string, code: string, vuz_name: string }) {
    return (<div className={"tile block"}>
        <span className={"block_title"}>Программа {title}</span>
        <div className={"block"}>
            <Link to={"/rating/" + vuz_name + "/" + code}>Конкурсный список</Link><br/>
        </div>

    </div>);
}

export default ProgramTile;
