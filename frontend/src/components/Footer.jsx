import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assests'

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-gray-500 text-sm py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* About */}
        <div>
          <h4 className="text-gray-600 font-semibold mb-2">About QuillVerse</h4>
          <p>
            QuillVerse is your creative sanctuary — a blog space for writers, readers, and thinkers who value authenticity, depth, and storytelling.
          </p>
        </div>

        {/* Quick Links */}
        <div className='px-15'>
          <h4 className="text-gray-600 font-semibold mb-2 ">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-gray-600 font-semibold mb-2">Categories</h4>
          <ul className="space-y-1">
            <li>Weather</li>
            <li>LifeStyle</li>
            <li>Technology</li>
            <li>Updates</li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right">
          <p className="text-gray-600 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} QuillVerse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer