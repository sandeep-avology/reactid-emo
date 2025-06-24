import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Layout from './components/layout/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import AboutUs from './pages/About/AboutUs';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
