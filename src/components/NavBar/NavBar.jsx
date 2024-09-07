import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './NavBar.module.css'





export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false);
  return <>



<header className="bg-blue-100 bg-opacity-50 backdrop-blur-lg  shadow-sm shadow-green-200 fixed top-0 z-50 w-full">
  <div className="mx-auto flex justify-between h-16 w-full items-center gap-8  px-4 sm:px-6 lg:px-8">
    <div className='flex  w-full items-center justify-start gap-16 mx-8 lg:text-xl'>
    <Link className="flex items-center text-gray-950 text-xl xl:text-2xl font-bold me-5"  to="">
   
     
  
    <img src="/logo.png" className='w-16  inline-block  px-2' alt="Elbatel Logo" />
    <span className='text-green-600 mx-3'>الباتل</span>
    </Link>

    <div className="">
      <nav aria-label="Global" className="hidden lg:block">
        <ul className="flex items-center gap-8 lg:gap-4 xl:gap-9 font-semibold">
        
            <li>
          <NavLink className='p-2 text-gray-500 linkStyle' to="">الرئيسية</NavLink>
          </li>
            <li>
          <NavLink className='p-2 text-gray-500 linkStyle' to="about">من نحن</NavLink>
          </li>
            <li>
          <NavLink className='p-2 text-gray-500 linkStyle' to="services">خدماتنا</NavLink>
          </li>
            <li>
          <NavLink className='p-2 text-gray-500 linkStyle' to="team">فريقنا</NavLink>
          </li>
        
            <li>
          <NavLink className='p-2 text-gray-500 linkStyle' to="partners">شركاء النجاح</NavLink>
          </li>
            <li>
          <NavLink className='p-2 text-gray-500 linkStyle' to="contact">تواصل معنا</NavLink>
          </li>
        
    


        
        </ul>
      </nav>

    
    </div>




    </div>

    <div className="flex items-center gap-4">
      
        
        <button
        onClick={() => setIsOpen(!isOpen)}
          className="block rounded bg-gray-300  p-2.5 text-gray-600 transition hover:text-gray-600/75 lg:hidden"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

  </div>

  <div className={`${isOpen ? 'max-h-screen' : 'max-h-0'} lg:hidden overflow-hidden text-center transition-max-height duration-700 ease-in-out`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col ">
       
         <NavLink className='p-2 linkStyle' to="">الرئيسية</NavLink>
         <NavLink className='p-2 linkStyle' to="about">من نحن</NavLink>
         
        
          
         <NavLink className='p-2 linkStyle' to="services">خدماتنا</NavLink>
         <NavLink className='p-2 linkStyle' to="team">فريقنا</NavLink>
         <NavLink className='p-2 linkStyle' to="partners">شركاء النجاح</NavLink>
         <NavLink className='p-2 linkStyle' to="contact">تواصل معنا</NavLink>
        
      
        </div>
      </div>


</header>

  </>
}
