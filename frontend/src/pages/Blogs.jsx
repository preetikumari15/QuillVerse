import React, { useContext } from 'react'
import BlogCard from '../components/BlogCard'
import { StoreContext } from '../context/StoreContext'

const Blogs = () => {
  const {blogData} = useContext(StoreContext);
  return (
    <div >
      
      <h1 className='text-3xl text-centre font-bold my-6'>All Blogs</h1>
      <p className='text-base px-3 sm:text-lg leading-6 max-w-2xl mx-auto'>
        Dive into the full collection of stories, poems, essays, and reflections from our vibrant community of writers. 
      </p>
      <div className='grid my-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-3 sm:px-4'>
            {blogData.map((blog , index) => (
                <BlogCard key={index} id={blog._id} title={blog.title} image={blog.image} category={blog.category} author_name={blog.author.name} author_image={blog.author.image} date={blog.date}/>
            ))}
        </div>
    </div>
  )
}

export default Blogs