import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Contact from './Contact'

const RouterApp = () => {
    return (
        <>
            <Router>
                <Nav/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Contact' element={<Contact/>} />
                </Routes>
            </Router>
        </>
    )
}

export default RouterApp;