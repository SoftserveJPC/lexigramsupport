import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Root = () => {
    return (
        <>
            <main className='root-container'>
                <Navbar />
                <Outlet />
                
            </main>
            <Footer />
        </>
        
    )
}

export default Root