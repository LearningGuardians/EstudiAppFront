import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FirstOperative from "../Pages/FirstOperative";
import LandingPage from "../Pages/LandingPage";


export default function AppRoutes() {

    return (
        <Router>
            <header>
            </header>

            <main>
                <div className='container'>
                    <Routes>
                        <Route path="/pOperativo" element={<FirstOperative />} />
                        <Route path="/landing" element ={<LandingPage/>}/>
                    </Routes>
                </div>
            </main>
        </Router>
    );
}
