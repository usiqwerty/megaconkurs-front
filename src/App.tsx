import React from 'react';
import './css/App.css';
import RatingListPage from "./pages/RatingListPage";
import {Route, Routes} from "react-router-dom";
import RatingList from "./widgets/RatingList";
import Homepage from "./pages/Homepage";
import VuzProgramsPage from "./pages/VuzProgramsPage";
import VuzInfoPage from "./pages/VuzInfoPage";
function App() {
    return (

        <Routes>
            <Route path={"/"} element={<Homepage />}/>
            <Route path={"/vuz/:vuz"} element={<VuzInfoPage /> } />
            <Route path={"/rating/:vuz"} element={<VuzProgramsPage /> } />
            <Route path={"/rating/:vuz/:rating_id"} element={<RatingListPage/> } />
            <Route path={"*"} element={ <span>Страница не найдена</span> } />
        </Routes>
    );
}

export default App;
