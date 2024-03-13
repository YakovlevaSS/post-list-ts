import { useNavigate } from 'react-router-dom';

import S from './backButton.module.css';


const BackButton = () => {
  const navigate = useNavigate();

  const handleClickNav = () => {
    navigate('/');
  };

  return (
    <button
      className={ S.backButtonWrapper }
      type="button"
      onClick={ handleClickNav }
    >
      &#8592;
    </button>
  );
};

export default BackButton;
