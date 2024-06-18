import Link from 'next/link';
import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <div className='bg-sky-950 p-8 inline-block mt-20 text-white '>
                <h1 className='text-xl text-sky-600 font-semibold'>Side NaveBar</h1>
                <Link href={'/contact/service'}>Service </Link> <br />
                <Link href={'/contact/pruduct'}>Product</Link>
            </div>
        </div>
    );
};

export default ContactPage;