import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FirstOperative from "../Pages/FirstOperative";


export default function appRoutes() {

    return (
        <Router>
            <header>
                <NavBar />
            </header>

            <main>
                <div className='container'>
                    <Routes>
                        <Route path="/pOperativo" element={<FirstOperative />} />
                    </Routes>
                </div>
            </main>
        </Router>
    );
}
