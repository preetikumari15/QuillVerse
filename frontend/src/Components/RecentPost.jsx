import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { URL } from '../url'; // Adjust the URL based on your configuration
import Loader from '../components/Loader'; // Adjust the loader component path

const RecentPost = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch recent posts on component mount
    const fetchRecentPosts = async () => {
      try {
        const response = await axios.get(`${URL}/api/posts/recent`);
        setRecentPosts(response.data); // Set the fetched posts to state
        setLoading(false); // Stop loading once posts are fetched
      } catch (error) {
        console.error("Error fetching recent posts:", error);
        setLoading(false); // Stop loading even if there is an error
      }
    };

    fetchRecentPosts(); // Call the function to fetch posts
  }, []);

  return (
    <div className="recent-posts">
      <h3 className="text-center mb-4">Recent Posts</h3>

      {/* Show Loader while fetching */}
      {loading ? (
        <div className="d-flex justify-content-center">
          <Loader /> {/* Add your Loader component here */}
        </div>
      ) : (
        <div className="row">
          {/* Check if there are posts to display */}
          {recentPosts.length > 0 ? (
            recentPosts.map((post) => (
              <div className="col-md-4" key={post._id}>
                <div className="card mb-4">
                  {post.postimg && (
                    <img
                      src={`${URL}/uploads/${post.postimg}`}
                      alt={post.title}
                      className="card-img-top"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.desc.slice(0, 100)}...</p>
                    <Link to={`/posts/post/${post._id}`} className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No recent posts available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default RecentPost;
