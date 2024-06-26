import { Button } from 'components';
import { HeartIcon } from 'components/Icons';

const FavoriteBtn = ({ isFavorite, onClick }) => {
  return (
    <Button className={'button-favorite'} onClick={onClick}>
      <HeartIcon
        className={isFavorite ? 'heart-icon-active' : 'heart-icon'}
        fill={isFavorite ? '#F43F5E' : 'transparent'}
        stroke={isFavorite ? '#F43F5E' : '#101828'}
      />
    </Button>
  );
};

export default FavoriteBtn;
