import S from './limitSelect.module.css';


interface LimitSelectProps {
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
}

const LimitSelect: React.FC<LimitSelectProps> = ({ limit, setLimit }) => {
  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(parseInt(event.target.value, 10));
  };

  return (
    <div className={ S.selectContainer }>
      <select className={ S.select } value={ limit } onChange={ handleLimitChange }>
        <option value={ 5 }>5</option>
        <option value={ 10 }>10</option>
        <option value={ 20 }>20</option>
      </select>
    </div>
  );
};

export default LimitSelect;
