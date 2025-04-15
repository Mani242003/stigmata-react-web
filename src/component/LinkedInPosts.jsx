import React, { useEffect, useState } from 'react';

const LinkedInPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = 'AQU1aPYmJi2QdNV2Nu7rSQHt1hgyKJWoGimdqqtQCWfZImLKhyWrMeyxn-4sIBqhZc2_hNOnCQVb4vLj47BFwCShl6aR23ELDAEtGiI0DGdvkm8Xcw82vqt-GvaiajC56dcF-cOyDPBY3XqPhuoVTaCRJjcOQ_lUIeB8Ua4ZvdTclPmxL4L0EfPuWGX2XAcoIATMyD5DyHsVYTy_rh6Lk33Aj_93z_jYNVVqE9ZugTV1mtO-hoTyr8kkVLSO65eOpxswrZ3PKDynji2xZDuBdeXxxtpcG801ISyc_mKbxVetXHWsuDBcFmZm1pGkdIx1Q-GKR4DJQcv2G0rl_dBUgvIOyrvjRw'; // Your token
    const orgId = '103283488';

    fetch(`https://api.linkedin.com/v2/ugcPosts?q=authors&authors=List(urn%3Ali%3Aorganization%3A${orgId})`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'X-Restli-Protocol-Version': '2.0.0',
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.elements || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching LinkedIn posts:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading LinkedIn Posts...</div>;

  const renderMedia = (mediaItems) => {
    if (!mediaItems || !mediaItems.length) return null;

    return mediaItems.map((item, index) => {
      const mediaType = item.mediaType || '';

      if (mediaType === 'IMAGE') {
        return (
          <img
            key={index}
            src={item.originalUrl}
            alt={`Image ${index + 1}`}
            style={{ maxWidth: '100%', marginBottom: '1rem' }}
          />
        );
      }

      if (mediaType === 'VIDEO') {
        return (
          <video
            key={index}
            controls
            style={{ maxWidth: '100%', marginBottom: '1rem' }}
          >
            <source src={item.originalUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
      }

      // fallback for unknown media
      return (
        <div key={index}>
          <a href={item.originalUrl} target="_blank" rel="noopener noreferrer">
            View media
          </a>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>LinkedIn Posts</h1>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post) => {
          const shareContent = post.specificContent?.['com.linkedin.ugc.ShareContent'];
          const text = shareContent?.shareCommentary?.text || '';
          const media = shareContent?.media || [];

          return (
            <div key={post.id} className="post" style={{ marginBottom: '2rem' }}>
              <h2>Post by {post.author}</h2>
              <p>{text}</p>
              {renderMedia(media)}
            </div>
          );
        })
      )}
    </div>
  );
};

export default LinkedInPosts;
