import React from 'react';
import './css/App.css';
import RatingListPage from "./pages/RatingListPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RatingList from "./widgets/RatingList";
import Homepage from "./pages/Homepage";
import VuzProgramsPage from "./pages/VuzProgramsPage";
import VuzInfoPage from "./pages/VuzInfoPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Homepage/>}/>
                <Route path={"/vuz/:vuz_code"} element={<VuzInfoPage/>}/>
                <Route path={"/rating/:vuz"} element={<VuzProgramsPage/>}/>
                <Route path={"/rating/:vuz_code/:rating_id"} element={<RatingListPage/>}/>
            </Routes>

        </BrowserRouter>

    );
    //<Route path={"*"} element={ <span>Страница не найдена</span> } />
}

export default App;
