import React from 'react';

interface ModalProps {
  onClose: () => void; 
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">Close</button>
        {children}
      </div>
    </div>
  );
};


export default Modal;
