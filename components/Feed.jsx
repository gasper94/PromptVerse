'use client'

import React from 'react'
import { useState, useEffect } from 'react'

import PromptCard from './PropmptCard'

const PromptCardList = ({data, handleTagClick}) => {

  return(
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleSearchChange = (userInput) => {

      setSearchText(userInput);

      if(userInput){
        // Filter the posts based on the search text (username or tag)
        const filteredPosts = posts.filter((post) => {
          const usernameMatch = post.creator.username.toLowerCase().includes(searchText.toLowerCase());
          const tagMatch = post.tag.toLowerCase().includes(searchText.toLowerCase());
          return usernameMatch || tagMatch;
        });

        setFilteredPosts(filteredPosts);
      }else{
        setFilteredPosts(posts)
      }
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPosts(data);
      setFilteredPosts(data);
    }

    fetchPosts();
  },[])

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input 
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={(e) => handleSearchChange(e.target.value)}
          required
          className='search_input peer'
        />

      </form>
      
      <PromptCardList 
          data={filteredPosts}
          handleTagClick={() => {}}
        />
    </section>
  )
}

export default Feed