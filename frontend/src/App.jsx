import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SingleBlog from './pages/SingleBlog';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/blog/:id' element={<SingleBlog/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App