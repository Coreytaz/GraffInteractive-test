import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const IndexPage = lazy(() => import("./index/index"));
const ProductPage = lazy(() => import("./product"));

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
    );
};

export default Routing;