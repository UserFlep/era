import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import RootLayout from "../layout";

const Router: FC = () => {
    return (
        <Routes>
            <Route element={<RootLayout/>}>
                <Route path="/" element={<MainPage />}/>
                <Route path="search" element={<SearchPage />}/>
            </Route>
        </Routes>
);
};

export default Router;