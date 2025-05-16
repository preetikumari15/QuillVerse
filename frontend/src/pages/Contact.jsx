import React from 'react'
import { assets } from '../assets/assests';

const Contact = () => {
 return (
  <div className="min-h-screen bg-gradient-to-b from-indigo-200 via-white to-white text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Image */}
        <div className="mb-8 flex justify-center">
          <img
            src={assets.contact_us}
            alt="Contact us"
            className="rounded-xl shadow-lg w-full max-h-128 object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4 text-center">Get in Touch</h1>
        <p className="text-lg mb-6 text-center text-gray-700">
          We'd love to hear from you — whether it's feedback, questions, or collaboration ideas.
        </p>

        {/* Contact Info */}
        <section className="space-y-4 text-base leading-relaxed text-center">
          <p>
            📧 Email us at:{" "}
            <a href="mailto:support@quillverse.com" className="text-blue-600 underline">
              support@quillverse.com
            </a>
          </p>
          <p>🕒 Response time: within 1–2 business days</p>
        </section>

        {/* Footer Note */}
        <div className="mt-10 text-center text-sm text-gray-500">
          Thank you for being a part of the QuillVerse community.
        </div>
      </div>
    </div>
  );
}

export default Contact