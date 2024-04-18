import React from 'react'
import Navbar from '../Components/Navbar'
import SearchBar from '../Components/SearchBar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
export default function Home() {
    return (
        <div>
            <div className='fixed w-full top-0'>
                <Navbar />
            </div>
            <div className='mt-20'>
                <Outlet />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
