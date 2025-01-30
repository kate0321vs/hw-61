interface Props {
  name: string;
}

const Country: React.FC<Props> = ({name}) => {
  return (
      <a href="#" className="list-group-item list-group-item-primary list-group-item-action">{name}</a>
  );
};

export default Country;