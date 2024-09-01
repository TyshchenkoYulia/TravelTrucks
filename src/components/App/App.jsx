import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "../Layout/Layout.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const TruckPage = lazy(() => import("../../pages/TruckPage/TruckPage"));
const TruckFeatures = lazy(() =>
  import("../../components/TruckFeaures/TruckFeaures")
);
const TruckReviews = lazy(() =>
  import("../../components/TruckReviews/TruckReviews")
);
const NotFound = lazy(() => import("../../pages/NotFound/NotFound"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:Id" element={<TruckPage />}>
            <Route path="feaures" element={<TruckFeatures />} />
            <Route path="reviews" element={<TruckReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
