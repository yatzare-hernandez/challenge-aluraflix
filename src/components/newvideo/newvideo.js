// src/components/NewVideo.js
import React, { useState } from 'react';
import { addVideo } from '../../services/api';

const NewVideo = ({ onVideoAdded }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !category || !imageUrl || !videoUrl || !description) {
      setError('Todos los campos son obligatorios');
      return;
    }
    const newVideo = { title, category, imageUrl, videoUrl, description };
    try {
      await addVideo(newVideo);
      onVideoAdded();
      setTitle('');
      setCategory('');
      setImageUrl('');
      setVideoUrl('');
      setDescription('');
      setError('');
    } catch (error) {
      console.error('Error adding video:', error);
    }
  };

  return (
    <div className="form-container">
      <h1>Nuevo Video</h1>
      <p>COMPLETE EL FORMULARIO PARA CREAR EL FORMULARIO PARA CREAR UNA NUEVA NUEVA TARJETA DE VIDEO</p>
      <h2>Crear Tarjeta</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ingrese el título"
          />
        </div>
        <div className="form-group">
          <label>Categoría</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="" disabled>Seleccione una categoría</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="innovacion">Innovación</option>
            <option value="gestion">Gestión</option>
          </select>
        </div>
        <div className="form-group">
          <label>Imagen</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Ingrese el enlace de la imagen"
          />
        </div>
        <div className="form-group">
          <label>Video</label>
          <input
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Ingrese el enlace del video"
          />
        </div>
        <div className="form-group">
          <label>Descripción</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="¿De qué trata este video?"
          />
        </div>
        <div className="btn-container">
          <button type="submit" className="btn-save">GUARDAR</button>
          <button type="button" className="btn-clear" onClick={() => {
            setTitle('');
            setCategory('');
            setImageUrl('');
            setVideoUrl('');
            setDescription('');
            setError('');
          }}>LIMPIAR</button>
        </div>
      </form>
    </div>
  );
};

export default NewVideo;