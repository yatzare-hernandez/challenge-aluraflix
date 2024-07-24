import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onSave, videoData }) => {
  const [title, setTitle] = useState(videoData.title);
  const [category, setCategory] = useState(videoData.category);
  const [imageUrl, setImageUrl] = useState(videoData.imageUrl);
  const [videoUrl, setVideoUrl] = useState(videoData.videoUrl);
  const [description, setDescription] = useState(videoData.description);

  const handleSave = () => {
    onSave({ title, category, imageUrl, videoUrl, description });
  };

  const handleClear = () => {
    setTitle('');
    setCategory('frontend');
    setImageUrl('');
    setVideoUrl('');
    setDescription('');
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>EDITAR CARD:</h2>
        <form>
          <div className="modal-form-group">
            <label>Título</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="modal-form-group">
            <label>Categoría</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="innovacion">Innovación y Gestión</option>
            </select>
          </div>
          <div className="modal-form-group">
            <label>Imagen</label>
            <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
          </div>
          <div className="modal-form-group">
            <label>Video</label>
            <input value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
          </div>
          <div className="modal-form-group">
            <label>Descripción</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="modal-btn-container">
            <button type="button" className="modal-g-btn" onClick={handleSave}>GUARDAR</button>
            <button type="button" className="modal-l-btn" onClick={handleClear}>LIMPIAR</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;






/*const Modal = ({ isOpen, onClose, onSave, videoData }) => {
  const [title, setTitle] = useState(videoData.title);
  const [category, setCategory] = useState(videoData.category);
  const [imageUrl, setImageUrl] = useState(videoData.imageUrl);
  const [videoUrl, setVideoUrl] = useState(videoData.videoUrl);
  const [description, setDescription] = useState(videoData.description);

  const handleSave = () => {
    onSave({ title, category, imageUrl, videoUrl, description });
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <h2>Editar Card</h2>
      <button onClick={onClose}>X</button>
      <form>
        <label>
          Título:
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Categoría:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="innovacion">Innovación y Gestión</option>
          </select>
        </label>
        <label>
          Imagen:
          <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </label>
        <label>
          Video:
          <input value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
        </label>
        <label>
          Descripción:
          <input value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <button type="button" onClick={handleSave}>Guardar</button>
        <button type="button" onClick={onClose}>Limpiar</button>
      </form>
    </div>
  );
};

export default Modal;*/
