import S from './errorComp.module.css';


interface ErrorCompProps {
  textError: string;
}

const ErrorComp: React.FC<ErrorCompProps> = ({ textError }) => (
  <div className={ S.errorWrap }>
    <p className={ S.errorText }>Что-то пошло не так,</p>
    <p className={ S.errorText }>попробуйте повторить запрос позже!</p>
    <p className={ S.errorText }>{ textError }</p>
  </div>
);

export default ErrorComp;
