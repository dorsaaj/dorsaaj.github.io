import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import ContactMe from './components/contact-me/contactMe';
import Footer from './components/footer /Footer';
import './App.css';
import Try from './components/try /Try';


const App = () => {
  return (
    <Router>
      
      <Navbar /> {/* Navbar component */}
      <Routes>
        <Route path="/" element={<Header />} /> {/* Default route */}
        <Route path="/contactMe" element={<ContactMe/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App

