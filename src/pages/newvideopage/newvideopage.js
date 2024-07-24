// src/pages/NewVideoPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewVideo from '../../components/newvideo/newvideo';

const NewVideoPage = () => {
  const navigate = useNavigate();

  const handleVideoAdded = () => {
    navigate('/');
  };

  return (
    <div>
      <main>
        <NewVideo onVideoAdded={handleVideoAdded} />
      </main>
    </div>
  );
};

export default NewVideoPage;
