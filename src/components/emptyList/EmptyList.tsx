import S from './emptyList.module.css';


const EmptyList = () => (
  <div className={ S.wrap }>
    <p className={ S.text }>
      Посты не найдены.
      <br />
      Попробуйте изменить данные запроса.
    </p>
  </div>
);

export default EmptyList;
