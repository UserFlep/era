import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Index from "../pages/MainPage";
import SearchPage from "../pages/SearchPage";
import RootLayout from "../layout";

const Router: FC = () => {
    return (
        <Routes>
            <Route element={<RootLayout/>}>
                <Route path="/" element={<Index />}/>
                <Route path="search" element={<SearchPage />}/>
            </Route>
        </Routes>
);
};

export default Router;