import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './error-page';

function App() {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;