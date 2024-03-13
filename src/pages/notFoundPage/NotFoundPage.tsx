import { useNavigate } from 'react-router-dom';

import S from './notFoundPage.module.css';


const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={ S.wrap }>
      <p className={ S.text }>
        Страница, на которую вы пытаетесь попасть,
        <br />
        не существует или была удалена.
      </p>
      <p className={ S.text }>Перейдите на главную страницу</p>
      <button
        className={ S.searchButton }
        type="button"
        onClick={ () => {
          navigate('/');
        } }
      >
        Перейти на главную страницу
      </button>
    </div>
  );
};

export default NotFoundPage;
