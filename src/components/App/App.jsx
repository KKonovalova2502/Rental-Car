import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../Layout/Layout';
import { Toaster } from 'react-hot-toast';
import Loader from '../Loader/Loader.jsx';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() =>
  import('../../pages/CatalogPage/CatalogPage.jsx'),
);
const CarDetailsPage = lazy(() =>
  import('../../pages/CarDetailsPage/CarDetailsPage.jsx'),
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage.jsx'),
);

export default function App() {
  return (
    <Layout>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{ duration: 3000 }}
      />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<CatalogPage />} />
          <Route path="/cars/:id" element={<CarDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
