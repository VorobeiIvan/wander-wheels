import { NavLink, Outlet, useParams } from 'react-router-dom';
import { Button } from 'components';
import { CloseBtnIcon } from 'components/Icons';
import ModalCardInfo from './ModalCardInfo';

const ModalContent = ({ id, campersData, onClose }) => {
  const { detailsId } = useParams();
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
        <NavLink className="details-card-link" to={`${detailsId}/features`}>
          Features
        </NavLink>
        <NavLink className="details-card-link" to={`${detailsId}/reviews`}>
          Reviews
        </NavLink>
      </div>
      <Outlet />
      <hr className="details-card-hr" />
    </div>
  );
};

export default ModalContent;
