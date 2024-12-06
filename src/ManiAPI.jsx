import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManiAPI = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const accessToken = 'AQWg8I5vgxxratwajhLO62VPmTGntOkaB6yAjfux3pCpaRo3t3k9Pxlagk4Y06HtBzqOPtfpm_Rn2XB-L7VXBAUKcIeMTN6d8bTnuAnjvla1RupS7HMof2PaPww0WHcyHyMSNMudBb2tXxiIGhpNN_x5Dbyw2Wo3Q1514sq_-6M_wc-AXRangnlWV9ZrSysKnqC5Qgihqf06eIZXOR_UA56X2Ou_7fzA7n58ks6mDrqrWy6ZKyCkfyoZFiT7QaHz5OI6nKaJI7rr2PCGMICa76u_cbLUQ_eTFQuM4d5NJz2yBEFahGVK1tWtcjWvfc4xptrv2kdz9WytH1dT9UB6ZOFrce-k_A'; // Replace with your OAuth 2.0 access token
          const response = await axios.get('https://api.linkedin.com/v2/ugcPosts', {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'cache-control': 'no-cache',
              'X-Restli-Protocol-Version': '2.0.0',
            },
            params: {
              'q': 'authors',
              'authors': 'List({urn:li:organization:218620881})', // Replace with your organization ID
              'count': 10, // Number of posts to fetch
            },
          });
  
          setPosts(response.data.elements);
        } catch (error) {
          console.error('Error fetching LinkedIn posts:', error);
        }
      };
  
      fetchPosts();
    }, []); // Empty dependency array means this effect runs once after initial render
  
    return (
      <div>
        <h1>Recent LinkedIn Posts</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.text}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default ManiAPI


