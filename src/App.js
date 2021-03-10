import React from 'react'
import About from './components/About/About';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import "./components/styles.css";

const App = () => {

    return (
        <>
            <Navbar />
            <Header />
            <About />
        </>
    )
}

export default App
