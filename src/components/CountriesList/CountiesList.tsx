import { ApiCountries } from '../../types';
import Country from './Country/Country.tsx';


interface Props {
  countries: ApiCountries[]
  onClickCard: (countryAlphaCode: string) => void;
}

const CountiesList: React.FC<Props> = ({countries, onClickCard}) => {

  return (
    <>
      <div className="CountiesList list-group my-3 mx-3">
        {countries.map((country) => (
          <Country key={country.alpha3Code} name={country.name}
                   onClickCard={() => onClickCard(country.alpha3Code)}/>
        ))}
      </div>
    </>
  );
};

export default CountiesList;