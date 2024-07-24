// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export const getVideos = async () => {
  try {
    const response = await api.get('/videos');
    return response.data;
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};

export const addVideo = async (newVideo) => {
  try {
    const response = await api.post('/videos', newVideo);
    return response.data;
  } catch (error) {
    console.error('Error adding video:', error);
    throw error;
  }
};

export const updateVideo = async (id, updatedVideo) => {
  try {
    const response = await api.put(`/videos/${id}`, updatedVideo);
    return response.data;
  } catch (error) {
    console.error('Error updating video:', error);
    throw error;
  }
};

export const deleteVideo = async (id) => {
  try {
    await api.delete(`/videos/${id}`);
  } catch (error) {
    console.error('Error deleting video:', error);
    throw error;
  }
};
