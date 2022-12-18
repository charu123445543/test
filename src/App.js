import React from 'react'
import Header from "./component/Header"
// import ControlledCarousel from "./component/ControlledCarousel"
import "./App.css"
// import MyeffectCube from "./component/MyeffectCube"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './component/About'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Home from './component/Home'
import Login from './component/Login'
import Submit from './component/Submit'

const App = () => {
  return (
    // <div>
    //   <Header />
    //   <ControlledCarousel />
    //   <MyeffectCube />

    // </div>

    <Router>
      <Header />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/submit" element={<Submit />} />

      </Routes>
      <Footer />

    </Router>
  )
}

export default App
