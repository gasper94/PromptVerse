'use client';

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
    const { data: session, status } = useSession();
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

    //  useEffect(()=>{
    //     console.log("status:", status);
    //  })


    const handleSignIn = async (providerId) => {
        // console.log("status:", status);
        await signIn(providerId, {
            callbackUrl: `/dashboard`,
            });
        // console.log("status:", status);
        // await router.push('/dashboard');
        //    console.log("status:", status);
    };

  return (
    <nav className='flex-between w-full'>
        <Link href={'/dashboard'} className='flex gap-2 flex-center'>
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

                    <Link href={'/add-resume'} className="black_btn">
                        Add Resume
                    </Link>
                   
                    <button type='button' className='outline_btn' onClick={async() =>{
                        await signOut({
                        callbackUrl: `/`,
                        });
                    }}>
                        Sign Out
                    </button>

                    <Link href={'/dashboard'}>
                        <Image src={session?.user.image} width={'37'} height={'37'} className='rounded-full' alt='profile'
                        onClick={() => settoggleDropdow((prev) => !prev )} />
                    </Link>
                </div>
            ):(
                <>
                    {providers && 
                        Object.values(providers).map((provider) =>(
                            <button type='button' key={provider.name} onClick={() => handleSignIn(provider.id)} 
                            className='black_btn'>
                                Sign In
                            </button>
                        ))
                    }
                </>
            )}
        </div>

        {/* Mobile Navigation */}
        {/* <div className='sm:hidden flex relative'>
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
                                await signOut();
                                await router.push('/');
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
                                onClick={async() => {
                                    await signIn(provider.id);
                                    await router.push('/dashboard');
                                }}
                                className='black_btn'
                            >
                                Sign in
                            </button>
                        )
                    )}
                </>
            )}
        </div> */}


    </nav>
  )
}

export default Nav;