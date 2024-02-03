// src/App.js

import AuthContext from "./AuthContext";
import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import DataTablePage from "./DataTablePage";

const App = () => {
  return (
    <AuthContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/data-table" element={<DataTablePage />} />
          <Route path="/:placeholder" element={<></>} />
        </Routes>
      </BrowserRouter>
    </AuthContext>
  );
};

export default App;
