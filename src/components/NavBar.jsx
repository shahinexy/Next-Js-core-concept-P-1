'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const NavBar = () => {
    const pathName = usePathname()
    const router = useRouter()
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
        },
        {
            name: 'Blogs',
            path: '/blogs'
        }
    ]

    const handleClick = () =>{
        router.push('/login')
    }
    return (
        <div className='bg-sky-950 py-3 text-white text-lg'>
            <ul className='flex gap-4 justify-center'>
                {
                    navItems.map(item => <li key={item.name} className={`${pathName === item.path && 'text-sky-500'}`}><Link href={item.path}>{item.name}</Link></li>)
                }
                <button onClick={handleClick} className='bg-sky-500 px-4 py-2 ml-20'>Login</button>
            </ul>
        </div>
    );
};

export default NavBar;