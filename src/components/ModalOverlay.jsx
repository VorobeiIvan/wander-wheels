const ModalOverlay = ({ onClose, children }) => {
  const handleBackdropClick = event => {
    if (event.target.classList.contains('overlay')) {
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={handleBackdropClick}>
      {children}
    </div>
  );
};

export default ModalOverlay;
