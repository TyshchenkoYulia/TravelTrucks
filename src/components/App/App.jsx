import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";
import HomePage from "../../pages/HomePage/HomePage.jsx";
import CatalogPage from "../../pages/CatalogPage/CatalogPage.jsx";
import TruckPage from "../../pages/TruckPage/TruckPage.jsx";
import NotFound from "../../pages/NotFound/NotFound.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:Id" element={<TruckPage />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
