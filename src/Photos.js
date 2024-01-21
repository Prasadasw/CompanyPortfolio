import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Fetch photos data when the component mounts
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setPhotos(response.data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  return (
    <div>
      {/* <h1>Photos</h1>
      <div className="photo-list">
        {photos.map((photo, index , albumId) => (
          <div key={photo.id} className="photo-item" style={{ marginBottom: index % 3 === 2 ? '20px' : 0 }}>
            <p>{photo.id}</p>
            <p>{albumId}</p>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Photos;
