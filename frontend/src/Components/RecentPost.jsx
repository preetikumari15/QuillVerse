import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { URL } from '../url'; 
import Loader from '../components/Loader'; 

const RecentPost = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchRecentPosts = async () => {
      try {
        const response = await axios.get(`${URL}/api/posts/recent`);
        setRecentPosts(response.data); 
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching recent posts:", error);
        setLoading(false); 
      }
    };

    fetchRecentPosts(); 
  }, []);

  return (
    <div className="recent-posts">
      <h3 className="text-center mb-4">Recent Posts</h3>

      {}
      {loading ? (
        <div className="d-flex justify-content-center">
          <Loader /> {}
        </div>
      ) : (
        <div className="row">
          {}
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
