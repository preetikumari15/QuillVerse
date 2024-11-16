import React, { useState } from 'react';
import { post } from '../../services/Endpoint'; // Import your post service for making requests
import toast from 'react-hot-toast'; // Import toast for notifications

export default function AddPost() {
  // State hooks to manage input values
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // Image preview state

  // Handle image selection and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Create a URL for the selected image to preview it
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set the image preview
      };
      reader.readAsDataURL(file); // Start reading the file as a data URL
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    try {
      const formData = new FormData();
      if (image) {
        formData.append('postimg', image); // Append image file to form data
      }
      formData.append('title', title); // Append title to form data
      formData.append('desc', description); // Append description to form data

      // Debugging: Check what data is being sent
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      // Make POST request using your 'post' function (axios wrapper)
      const response = await post('/blog/create', formData);
      const data = response.data;

      // Handle success response
      if (data.success) {
        toast.success(data.message); // Show success toast
        setTitle(''); // Clear title input
        setDescription(''); // Clear description input
        setImage(null); // Clear image
        setImagePreview(null); // Reset image preview
      }
    } catch (error) {
      console.error(error); // Handle any errors
      toast.error('Error creating post'); // Show error toast
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h2 className="text-center mb-0">Add New Post</h2>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                {/* Image Upload Section */}
                <div className="mb-4">
                  <label htmlFor="postImage" className="form-label">Upload Image</label>
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    onChange={handleImageChange} // Handle image selection
                  />
                  {/* Image Preview */}
                  {imagePreview && (
                    <div className="mt-3">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
                      />
                    </div>
                  )}
                </div>

                {/* Title Input Section */}
                <div className="mb-4">
                  <label htmlFor="postTitle" className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="postTitle"
                    placeholder="Enter post title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} // Handle title change
                    required
                  />
                </div>

                {/* Description Input Section */}
                <div className="mb-4">
                  <label htmlFor="postDescription" className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="postDescription"
                    rows="6"
                    placeholder="Write your post description here"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} // Handle description change
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Submit Post
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
