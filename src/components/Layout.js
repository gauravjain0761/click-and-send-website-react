import React from 'react';
import Header from './header/Header';

export default function Layout({ children }) {
    return (
        <>
            <div className='nav-header-container'>
                <Header />
            </div>
            {children}
        </>
    );
}
