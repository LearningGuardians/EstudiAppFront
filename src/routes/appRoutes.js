import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FirstOperative from "../Pages/FirstOperative";
import CreateOperativeplan from "../Pages/CreateOperativePlan";


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
                        <Route path="/pOperativo/crear" element={<CreateOperativeplan />}/>
                    </Routes>
                </div>
            </main>
        </Router>
    );
}
