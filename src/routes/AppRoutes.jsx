import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../component/Header";
import Home from "../component/Home";
import CardDetails from "../component/CardDetails";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<CardDetails />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
