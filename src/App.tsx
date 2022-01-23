import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from './Screens/Layout';

function App() {
  const Beranda = React.lazy(() => import("./Screens/Beranda"));
  const Categories = React.lazy(() => import("./Screens/Categories"));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <React.Suspense fallback={false}>
              <Beranda />
            </React.Suspense>
          } />
          <Route path='/kategori' element={
            <React.Suspense fallback={false}>
              <Categories />
            </React.Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
