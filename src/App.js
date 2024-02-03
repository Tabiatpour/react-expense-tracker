import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ExpenseTracker from './pages/ExpenseTracker';
import Login from './pages/Login';
import Others from "./pages/Others";




function App() {
  return (


    <Routes>
      <Route element={<Layout />}>

        <Route index element={<Home />}>
        </Route>

        <Route path="/login" element={<Login />}>
        </Route>

        <Route path="/expenseTracker" element={<ExpenseTracker />}>
        </Route>

      </Route>
      <Route path="/others" element={<Others />}>
      </Route>
    </Routes>


  );
}

export default App;
