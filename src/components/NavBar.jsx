'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBar = () => {
    const pathName = usePathname()
    const navItems = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Contact',
            path: '/contact'
        }
    ]
    return (
        <div className='bg-sky-950 py-3 text-white text-lg'>
            <ul className='flex gap-4 justify-center'>
                {
                    navItems.map(item => <li key={item.name} className={`${pathName === item.path && 'text-sky-500'}`}><Link href={item.path}>{item.name}</Link></li>)
                }
                
            </ul>
        </div>
    );
};

export default NavBar;