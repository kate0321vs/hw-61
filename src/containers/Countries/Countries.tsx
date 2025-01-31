import { ApiCountries } from '../../types';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../globalConstants.ts';
import CountriesList from '../../components/CountriesList/CountiesList.tsx';
import CountryInfo from '../../components/CountryInfo/CountryInfo.tsx';


const Countries = () => {
  const [countries, setCountries] = useState<ApiCountries[]>([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>();

  const fetchData = useCallback( async () => {
    const countriesResponse = await axios<ApiCountries[]>(BASE_URL);
    setCountries(countriesResponse.data);
  },[]);

  useEffect(() => {
    fetchData().catch(e => console.error(e));
  }, [fetchData]);

  return (
    <div className="d-flex justify-content-between mx-3 my-3">
       <CountriesList countries={countries} onClickCard={(alphaCode) => setSelectedCountryCode(alphaCode)}/>
      {selectedCountryCode && <CountryInfo alpha3Code={selectedCountryCode} />}
    </div>
  );
};

export default Countries;