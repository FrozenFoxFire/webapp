import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { DevSupport } from '@react-buddy/ide-toolbox';
import { Dashboard, Login, Validating } from './routes';
import { ComponentPreviews, useInitial } from './dev';
import App from './App.tsx';
import '../index.css';

// Create React App
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      {/* Dash Route */}
      <Route
        id="app-path"
        path="/"
        element={
          <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
            <App debug={true} />
          </DevSupport>
        }
      >
        {/* Auth */}
        <Route id="login-path" path="login" element={<Login />} />
        <Route id="logout-path" path="logout" element={null} />

        {/* Dashboard */}
        <Route id="dashboard-path" path="/dashboard/:id" element={<Dashboard />} />

        {/* Validate Session */}
        <Route id="validate-session-path" element={<Validating />} />

        {/* Bad Route */}
        <Route id="default-path" path="*" element={<Navigate to={`/validate-session-path`} replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
