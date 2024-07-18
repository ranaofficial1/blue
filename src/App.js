import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { Routes, Route, useLocation } from "react-router-dom";
// import { useEffect } from 'react';
import HomePage from './pages/HomePage.jsx';
import About from './pages/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/about",
    element: <About />
  }
])

function App() {
  return (
    // <HomePage />
    <RouterProvider router={router}/>
  );
}

export default App;
