import React from 'react';

const Card = ({ title, category, imageUrl, videoUrl, description, onEdit, onDelete }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-info">
      <div class="button-container">
      <button className="edit-button" onClick={onEdit}>
            <i className="fas fa-edit"></i> EDITAR
          </button>
          <button className="delete-button" onClick={onDelete}>
            <i className="fas fa-trash-alt"></i> BORRAR
          </button>
      </div>
    </div>
    </div>
  );
};

export default Card;
