import { Button, Features, Reviews } from 'components';
import { CloseBtnIcon } from 'components/Icons';
import ModalCardInfo from './ModalCardInfo';
import { useState } from 'react';

const ModalContent = ({ id, campersData, onClose }) => {
  const [activeTab, setActiveTab] = useState('');

  const handleTabChange = tab => {
    setActiveTab(tab);
  };
  const handleClose = () => {
    onClose();
  };
  return (
    <div className="details-popup">
      <Button
        className="details-close-button"
        onClick={handleClose}
        type="button"
      >
        <CloseBtnIcon />
      </Button>
      <ModalCardInfo campersData={campersData} id={id} />
      <div className="details-card-links-wrapper">
        <Button
          className={`details-card-link ${
            activeTab === 'features' ? 'active' : ''
          }`}
          onClick={() => handleTabChange('features')}
          type="button"
        >
          Features
        </Button>
        <Button
          className={`details-card-link ${
            activeTab === 'reviews' ? 'active' : ''
          }`}
          onClick={() => handleTabChange('reviews')}
          type="button"
        >
          Reviews
        </Button>
      </div>
      <hr className="details-card-hr" />
      {activeTab === 'features' && (
        <Features campersData={campersData} id={id} />
      )}
      {activeTab === 'reviews' && <Reviews campersData={campersData} id={id} />}
    </div>
  );
};

export default ModalContent;
