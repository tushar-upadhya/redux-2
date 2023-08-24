import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../component/Header";
import Home from "../component/Home";
import CardDetails from "../component/CardDetails";
import Card from "../component/Card";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Card />} />
                <Route path="/cart/:id" element={<CardDetails />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
