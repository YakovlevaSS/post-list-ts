import S from './loader.module.css';


const Loader = () => (
  <div className={ S.wrap }>
    <p className={ S.text }>Загружаем информацию...</p>
  </div>
);

export default Loader;
