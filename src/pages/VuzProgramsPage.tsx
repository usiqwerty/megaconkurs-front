import React from 'react';
import {get_all_vuzes} from "../api";
import {get_vuz_programs} from "../api";
import ProgramTile from "../widgets/ProgramTile";
import {useParams} from "react-router-dom";
function VuzProgramsPage() {
    const {vuz}= useParams();
    if (!vuz) return <b>biba</b>;
    const programs = get_vuz_programs(vuz);
    return (
        <>
            <h1>Конкурсные списки для {vuz}</h1>
            <div id={"tiles_container"}>
                {programs.map((program)=>
                    <ProgramTile code={program} vuz_name={vuz} title={program}/>
                )}
            </div>

        </>
    );
}

export default VuzProgramsPage;
