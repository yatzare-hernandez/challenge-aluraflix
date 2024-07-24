import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom'; 
import './App.css';
import logo from './assets/imagenes/logo.svg';
import Header from './components/header/header';
import Home from './pages/home/home';
import NewVideoPage from './pages/newvideopage/newvideopage';

function App() {
  const [videos, setVideos] = useState([]);
  const [bannerVideo, setBannerVideo] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/videos')
      .then(response => {
        setVideos(response.data);
        if (response.data.length > 0) {
          setBannerVideo(response.data[0]);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
    <Header />
    <Routes>
    <Route path="/" element={<Home videos={videos} bannerVideo={bannerVideo} />} />
        <Route path="/new-video" element={<NewVideoPage />} />
      </Routes>
      <footer className="App-footer">
        <img src={logo} alt="AluraFlix Logo" />
      </footer>
    </div>
  );
}

export default App;


