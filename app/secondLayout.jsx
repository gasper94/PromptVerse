import React from 'react';
import '@styles/globals.css'

import Nav from '../components/Nav';

function SecondLayout({children}) {
    return (
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                <div className='flex-between w-full mb-16 pt-3'>
                    <Nav />
                </div>
                {children}
            </main>
        </body>
    );
}

export default SecondLayout;