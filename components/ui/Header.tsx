import React from 'react'
import Link from "next/link";
import {Button} from "@/components/ui/button"
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white '>
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
            <h1 className='text-4xl font-semibold'>
                King<span className='text-emerald-300'>.</span>
            </h1>
            </Link>
            <div className="hidden md:flex items-center gap-8">
                <Navbar/>
                <Link href="">
                <Button>Hire me</Button>
                </Link>
            </div>
            {/* mobile nav view  */}
            <div className="md:hidden">mobile nav</div>
        </div>
    </header>
  )
}

export default Header