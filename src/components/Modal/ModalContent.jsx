import { NavLink } from 'react-router-dom';
import { CloseBtnIcon } from '../Icons';
import Button from '../Forms/Button';
import ModalCardInfo from './ModalCardInfo';

const ModalContent = ({ id, campersData, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="details-popup">
      <Button
        className="details-close-button"
        onClick={handleClose}
        type={'button'}
      >
        <CloseBtnIcon />
      </Button>
      <ModalCardInfo campersData={campersData} id={id} />
      <div className="details-card-link-wrapper">
        <NavLink className="details-card-link" to="/features">
          Features
        </NavLink>
        <NavLink className="details-card-link" to="/reviews">
          Reviews
        </NavLink>
      </div>
      <hr className="details-card-hr" />
    </div>
  );
};

export default ModalContent;
