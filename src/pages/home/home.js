import React, { useEffect, useState } from 'react';
import { getVideos, deleteVideo, updateVideo } from '../../services/api';
import Banner from '../../components/banner/banner';
import Card from '../../components/card/card';
import Modal from '../../components/modal/modal';
import '../../App.css';

const Home = ({ videos, bannerVideo, setVideos }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleDelete = (videoId) => {
    deleteVideo(videoId)
      .then(() => setVideos(videos.filter(video => video.id !== videoId)))
      .catch(error => console.error('Error deleting video:', error));
  };

  const handleSave = (updatedVideo) => {
    updateVideo(selectedVideo.id, updatedVideo)
      .then(response => {
        setVideos(videos.map(video => (video.id === selectedVideo.id ? response.data : video)));
        setIsModalOpen(false);
        setSelectedVideo(null);
      })
      .catch(error => console.error('Error updating video:', error));
  };

  const categories = ['Frontend', 'Backend', 'Productividad'];

  return (
    <>
       {bannerVideo && <Banner video={bannerVideo} />}
      <div className="video-categories">
        {categories.map(category => (
          <div key={category} className={`video-column ${category.toLowerCase()}`}>
          <button className={`category-button ${category.toLowerCase()}-button`}>{category}</button>
          <div className={`cards ${category.toLowerCase()}-cards`}>
            {videos.filter(video => video.category === category).map((video, index) => (
              <React.Fragment key={video.id}>
                  <Card
                    title={video.title}
                    category={video.category}
                    imageUrl={video.imageUrl}
                    videoUrl={video.videoUrl}
                    description={video.description}
                    onEdit={() => handleEdit(video)}
                    onDelete={() => handleDelete(video.id)}
                  />
                  {(index + 1) % 3 === 0 && <div className="clearfix"></div>}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && selectedVideo && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          videoData={selectedVideo}
        />
      )}
    </>
  );
};

export default Home;