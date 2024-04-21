import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import ModalOverlay from './ModalOverlay';
import ModalContent from './ModalContent';

const Details = ({ id, campersData, onClose }) => {
  useEffect(() => {
    const handleEscapeKeyPress = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.addEventListener('keydown', handleEscapeKeyPress);

    return () => {
      document.body.removeEventListener('keydown', handleEscapeKeyPress);
    };
  }, [onClose]);

  return createPortal(
    <ModalOverlay onClose={onClose}>
      <ModalContent id={id} campersData={campersData} onClose={onClose} />
    </ModalOverlay>,
    document.getElementById('popup-root')
  );
};

export default Details;
