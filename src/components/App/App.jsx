import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "../Layout/Layout.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const TruckPage = lazy(() => import("../../pages/TruckPage/TruckPage"));
const TruckFeaures = lazy(() =>
  import("../../components/TruckFeaures/TruckFeaures")
);
const TruckReviews = lazy(() =>
  import("../../components/TruckReviews/TruckReviews")
);
const NotFound = lazy(() => import("../../pages/NotFound/NotFound"));

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:Id" element={<TruckPage />}>
          <Route path="feaures" element={<TruckFeaures />} />
          <Route path="reviews" element={<TruckReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
