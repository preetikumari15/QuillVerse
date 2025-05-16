import React from 'react'
import { assets } from '../assets/assests';

const About = () => {
  return(
   <div className="min-h-screen bg-white text-gray-800 px-6 py-12 max-w-4xl mx-auto">
     <div className="mb-8 flex justify-center">
        <img
          src={assets.about}
          alt="Writing concept"
          className="rounded-xl shadow-lg w-full max-h-126 object-cover"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4 text-center">About QuillVerse</h1>
      <p className="text-lg mb-6 text-center text-gray-600">
        Where every word matters — welcome to your digital storytelling space.
      </p>

      <section className="space-y-6">
        <p>
          <strong>QuillVerse</strong> is a creative blog platform built for writers, readers, and thinkers. Whether you’re a seasoned author, a passionate poet, or just someone with thoughts to share, QuillVerse gives your voice a place to live and grow.
        </p>

        <p>
          Our mission is simple: empower individuals to express themselves through thoughtful, meaningful content. From personal essays and opinion pieces to poetry and short fiction, we believe in the value of authentic expression in a world driven by noise.
        </p>

        <p>
          We’re not just another blogging site. We’re a **community** of wordsmiths who believe in the beauty of well-crafted sentences and the power of stories to connect people across the globe.
        </p>

        <p>
          QuillVerse is designed with simplicity in mind — intuitive to use, distraction-free, and supportive of creativity. Publish what matters to you, discover new perspectives, and join a movement where every post is a brushstroke on the canvas of the internet.
        </p>
      </section>

      <div className="mt-10 text-center text-sm text-gray-500">
        Built with ❤️ for creators, by creators.
      </div>
    </div>
  );
}

export default About