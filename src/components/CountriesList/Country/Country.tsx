
interface Props {
  name: string;
  onClickCard: React.MouseEventHandler;
}

const Country: React.FC<Props> = ({name, onClickCard}) => {
  return (
      <a href="#"
         className="list-group-item list-group-item-primary list-group-item-action"
         onClick={onClickCard}>
        {name}
      </a>
  );
};

export default Country;