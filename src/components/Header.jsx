import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoSearchSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { GrMenu } from "react-icons/gr";
import { IoClose } from "react-icons/io5";

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/categories' },
    { name: 'Deals', path: '/deals' },
    { name: 'About', path: '/about' }
]

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className='w-full border-b border-gray-200 bg-white'>
            <nav className='max-w-7xl mx-auto px-4'>

                {/* Top row */}
                <div className='flex items-center justify-between py-4 gap-4'>

                    {/* Mobile menu icon + Logo */}
                    <div className='flex items-center gap-3'>
                        <button
                            className='md:hidden text-gray-700'
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <IoClose size={24} /> : <GrMenu size={22} />}
                        </button>

                        <Link to="/">
                            <img
                                src="/navlogo.png"
                                alt="logo"
                                className='h-8 w-auto'
                            />
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <ul className='hidden md:flex gap-6'>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className='cursor-pointer text-gray-700 hover:text-black'
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop search */}
                    <div className='relative hidden md:block w-72'>
                        <IoSearchSharp
                            size={16}
                            className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
                        />
                        <input
                            placeholder='Search products...'
                            className='w-full h-10 pl-9 pr-4 border border-gray-200 rounded-lg outline-none placeholder:text-gray-400 text-sm'
                            type='text'
                        />
                    </div>

                    {/* Cart + Login/Register */}
                    <div className='flex items-center gap-4'>
                        <Link
                            to="/cart"
                            aria-label="Shopping Cart"
                            className='text-gray-700 hover:text-black'
                        >
                            <IoCart size={22} />
                        </Link>

                        <Link
                            to="/login"
                            aria-label="Login or Register"
                            title="Login / Register"
                            className='text-gray-700 hover:text-black'
                        >
                            <FaUser size={20} />
                        </Link>
                    </div>

                </div>

                {/* Mobile search */}
                <div className='pb-4 md:hidden'>
                    <div className='relative w-full'>
                        <IoSearchSharp
                            size={16}
                            className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
                        />
                        <input
                            placeholder='Search products...'
                            className='w-full h-10 pl-9 pr-4 border border-gray-200 rounded-lg outline-none placeholder:text-gray-400 text-sm'
                            type='text'
                        />
                    </div>
                </div>

                {/* Mobile dropdown menu */}
                {menuOpen && (
                    <div className='md:hidden border-t border-gray-100 pb-4'>
                        <ul className='flex flex-col'>
                            {navLinks.map((link) => (
                                <li
                                    key={link.name}
                                    className='rounded-lg transition-colors hover:bg-gray-50'
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <Link
                                        to={link.path}
                                        className='block px-2 py-3 text-gray-700 hover:text-black'
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </nav>
        </header>
    )
}

export default Header