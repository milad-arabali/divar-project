import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/homePage.jsx";
import AuthPage from "../pages/AuthPage.jsx";
import DashboardPage from "../pages/dashboardPage.jsx";
import AdminPage from "../pages/adminPage.jsx";
import NotFoundPage from "../pages/404.jsx";

function Router(props) {
    return (
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path={'/auth'} element={<AuthPage/>}/>
            <Route path={'/dashboard'} element={<DashboardPage/>}/>
            <Route path={'/admin'} element={<AdminPage/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    );
}

export default Router;
