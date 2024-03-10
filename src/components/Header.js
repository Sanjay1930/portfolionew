import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import HeroImg from '../assets/hero.png';
import { Solid as SolidIcon } from '@heroicons/react/outline';

export default function Header() {
    const[togglemenu, setTogglemenu] = useState(false)
    return <header className="flex justify-between px-5 py-2 bg-secondary">
        <a className="font-bold text-black" href="#">Sanjay</a>
        <nav className="hidden md:block">
        <ul className="flex text-white">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>
        {togglemenu && <nav className="block md:hidden ">
        <ul onClick={ () => setTogglemenu(!togglemenu)} className="flex flex-col text-white mobile-nav">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>}
        
        <button onClick={() => setTogglemenu(!togglemenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
        
    </header>
}