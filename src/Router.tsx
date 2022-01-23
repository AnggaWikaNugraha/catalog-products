import React from 'react';
import {
  Route
} from "react-router-dom";

export default function Router() {
  const Beranda = React.lazy(() => import("./Screens/Beranda"));
  
  return <>
    <Route 
      path="/" 
      element={
        <React.Suspense fallback={false}>
          <Beranda/>
        </React.Suspense>
      }/>
  </>;
}
