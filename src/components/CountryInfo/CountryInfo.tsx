import { ApiCountry } from '../../types';
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { COUNTRY_URL } from '../../globalConstants.ts';

interface Props {
  alpha3Code: string;
}

const CountryInfo: React.FC<Props> = ({alpha3Code}) => {
  const [country, setCountry] = useState<ApiCountry | null>(null);
  const [borders, setBorders] = useState<ApiCountry[]>([]);

  const fetchPost = useCallback(async () => {
    if (!alpha3Code) return;
    const response = await axios(COUNTRY_URL + alpha3Code);
    setCountry(response.data);

   if (response.data.borders) {
     const promises = response.data.borders.map(async(border: string) => {
       const borderUrl = COUNTRY_URL + border;
       const borderResponse  = await axios(borderUrl);
       return borderResponse.data;
     });
     const bordersApi = await Promise.all(promises);
     setBorders(bordersApi);
   }
  }, [alpha3Code]);

  useEffect(() => {
    fetchPost().catch(e => console.error(e));
  }, [fetchPost]);

  return country && (
    <div className="card bg-primary bg-opacity-25 w-75 m-4 p-4">
      <div className="d-flex flex-wrap w-100 mb-5">
        <div className="w-75 ">
          <h1 className='mb-4'>{country.name}</h1>
          {country.capital && <h4><strong>Capital:</strong> {country.capital}</h4>}
          <h4><strong>Population:</strong> {country.population}</h4>
          <h4><strong>Region:</strong> {country.region}</h4>
          <h4><strong>Area:</strong> {country.area} km²</h4>
        </div>
        <div className="w-25 text-center">
        <img className="w-100 align-items-end" src={country.flag} alt="flag"/>
        </div>
      </div>
      <div className="w-100">
        <h4><strong>Borders:</strong></h4>
        {country.borders ?
          (<ul>{borders.map((border) => (
              <li key={border.alpha3Code} className='fs-5'>{border.name}</li>
            ))}
          </ul>) :
          <>
            <h5>No borders</h5>
          </>}
      </div>
    </div>


  );
};

export default CountryInfo;