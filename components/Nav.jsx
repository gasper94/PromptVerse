'use client';

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const isUserLogged = true;

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, settoggleDropdow] = useState(false)

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response)
        }

        setUpProviders();
     },[])

     const handleSignOut = async () => {
        settoggleDropdow(false);
        await signOut();
        router.push('/');
     }

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href={'/'} className='flex gap-2 flex-center'>
            <Image alt='logo' src={'assets/images/logo.svg'} width={'30'} height={'30'} className='object-contain'/>
            <p className='logo_text'>PromptVerse</p>
        </Link>


        {/* Desktop Navigation */}
        <div className='sm:flex hidden'>
            {session?.user ? (
                <div className='flex gap-3 md:gap-5'>
                    <Link href={'/create-prompt'} className="black_btn">
                        Create Post
                    </Link>

                    <button type='button' className='outline_btn' onClick={async() =>{
                         router.push('/');
                        setTimeout(() => {
                            signOut();
                        },50)
                    }}>
                        Sign Out
                    </button>

                    <Link href={'/'}>
                        <Image src={session?.user.image} width={'37'} height={'37'} className='rounded-full' alt='profile'
                        onClick={() => settoggleDropdow((prev) => !prev )} />
                    </Link>
                </div>
            ):(
                <>
                    {providers && 
                        Object.values(providers).map((provider) =>(
                            <button type='button' key={provider.name} onClick={() => signIn(provider.id)} className='black_btn'>
                                Sign In
                            </button>
                        ))
                    }
                </>
            )}
        </div>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex relative'>
            {session?.user ? (
                <div className='flex'>
                    <Image src={session?.user.image} width={'37'} height={'37'} className='rounded-full' alt='profile'  
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

                            <button type='button' onClick={async() =>{
                                router.push('/');
                                setTimeout(() => {
                                    signOut();
                                },50)
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
                        Object.values(providers).map((provider) => (
                            <button
                                type='button'
                                key={provider.name}
                                onClick={() => {
                                    signIn(provider.id);
                                }}
                                className='black_btn'
                            >
                                Sign in
                            </button>
                        )
                    )}
                </>
            )}
        </div>


    </nav>
  )
}

export default Nav;