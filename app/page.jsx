'use client';

import Feed from "@components/Feed"
import ResumeFeed from "@components/ResumeFeed";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'


const Home = () => {
  const { data: session } = useSession();

  return (
    <section className="w-full flex-center flex-col">
      {/* {!session?.user ? (
        <> */}
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden"/>
            <span className="orange_gradient">AI-Powered Prompts</span>
        </h1>
            <p className="desc text-center">
              An open-source AI prompting tool designed for the modern world, enabling users to explore, craft, and exchange imaginative prompts effortlessly.
            </p>
        {/* </>
      ):(null)} */}
        {/* Feed */}
        {/* <Feed /> */}
    </section>
  )
}

export default Home