import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FirstOperative from "../Pages/FirstOperative";
<<<<<<< HEAD
import LandingPage from "../Pages/LandingPage";
=======
import CreateOperativePlan from "../Pages/CreateOperativePlan";
import Login from "../Pages/Login";

>>>>>>> 09f41ee1aafae643608f17b2088fd1e7f564f871


export default function AppRoutes() {

    return (
        <Router>
            <header>
            </header>
|
            <main>
                <div className='container'>
                    <Routes>
                        <Route path="/pOperativo" element={<FirstOperative />} />
<<<<<<< HEAD
                        <Route path="/landing" element ={<LandingPage/>}/>
=======
                        <Route path="/pOperativo/create" element={<CreateOperativePlan />} />
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
>>>>>>> 09f41ee1aafae643608f17b2088fd1e7f564f871
                    </Routes>
                </div>
            </main>
        </Router>
    );
}
