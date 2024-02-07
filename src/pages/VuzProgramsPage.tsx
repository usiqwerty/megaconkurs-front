import React, {useEffect, useMemo, useState} from 'react';
import {get_all_vuzes} from "../api";
import {get_vuz_programs} from "../api";
import ProgramTile from "../widgets/ProgramTile";
import {useParams} from "react-router-dom";
function VuzProgramsPage() {
    const {vuz}= useParams();
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        get_vuz_programs(vuz!).then((response)=>{
            response.json().then((r)=>{setPrograms(r)});

        })
    }, []);
    if (!vuz) return <><h1>Конкурсные списки</h1><div id={"tiles_container"}>Загрузка...</div></>;


    return (
        <>
            <div className={"block header-block"}>
                <span>Конкурсные списки для {vuz}</span>
            </div>
            <div id={"tiles_container"}>
                {programs.map((program)=>
                    <ProgramTile code={program} vuz_name={vuz} title={program} key={program}/>
                )}
            </div>

        </>
    );
}

export default VuzProgramsPage;
