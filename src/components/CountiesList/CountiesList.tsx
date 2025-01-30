import { ApiCountries } from '../../types';
import Country from './Country/Country.tsx';

interface Props {
  countries: ApiCountries[]
}

const CountiesList: React.FC<Props> = ({countries}) => {
  return (
      <div className="CountiesList list-group my-3 mx-3">
        {countries.map((country) => (
          <Country key={country.id} name={country.name}/>
        ))}
      </div>


  );
};

export default CountiesList;