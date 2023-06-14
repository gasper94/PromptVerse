'use client';

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { useState, useEffect } from 'react';
import {SignIn, SignOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
    const isUserLogged = true;


    const [providers, setProviders] = useState(null);
    const [toggleDropdown, settoggleDropdow] = useState(false)

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders();
            setProviders(response)
        }

        setProviders();
     },[])

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href={'/'} className='flex gap-2 flex-center'>
            <Image src={'assets/images/logo.svg'} width={'30'} height={'30'} className='object-contain'/>
            <p className='logo_text'>Promptopia</p>
        </Link>

        {/* Desktop Navigation */}
        <div className='sm:flex hidden'>
            {isUserLogged ? (
                <div className='flex gap-3 md:gap-5'>
                    <Link href={'/create-prompt'} className="black_btn">
                        Create Post
                    </Link>

                    <button type='button' className='outline_btn'>
                        Sign Out
                    </button>

                    <Link href={'/'}>
                        <Image src={'assets/images/logo.svg'} width={'37'} height={'37'} className='rounded-full' alt='profile'
                        onClick={() => settoggleDropdow((prev) => !prev )} />
                    </Link>
                </div>
            ):(
                <>
                    {providers && 
                        Object.values(providers).map((providers) =>(
                            <button type='button' key={providers.name} onClick={() => SignIn(provider.id)} className='black_btn'>
                                Sign In
                            </button>
                        ))
                    }
                </>
            )}
        </div>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex relative'>
            {isUserLogged ? (
                <div className='flex'>
                    <Image src={'assets/images/logo.svg'} width={'37'} height={'37'} className='rounded-full' alt='profile'  
                    onClick={() => settoggleDropdow((prev) => !prev)}/>


                {toggleDropdown && ( 
                        <div className="dropdown">
                            <Link
                            href={'/profile'}
                            className='dropdown_link'
                            onClick={() => settoggleDropdow(false)}
                            >
                                My Profile
                            </Link>

                            <Link
                            href={'/create-prompt'}
                            className='dropdown_link'
                            onClick={() => settoggleDropdow(false)}
                            >
                              Create Prompt
                            </Link>

                            <button type='button' onClick={() => {
                                settoggleDropdow(false);
                                SignOut();
                            }}
                            className='mt-5 w-full black_btn'
                            >
                                Sign Out
                            </button>
                        </div>)}
                </div>
            ):(
                <>
                    {providers && 
                        Object.values(providers).map((providers) =>(
                            <button type='button' key={providers.name} onClick={() => SignIn(provider.id)} className='black_btn'>
                                Sign In
                            </button>
                        ))
                    }
                </>
            )}
        </div>


    </nav>
  )
}

export default Nav;