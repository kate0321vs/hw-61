import { ApiCountries } from '../../types';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../globalConstants.ts';
import CountiesList from '../../components/CountiesList/CountiesList.tsx';


const Countries = () => {
  const [countries, setCountries] = useState<ApiCountries[]>([]);

  const fetchData = useCallback( async () => {
    const countriesResponse = await axios<ApiCountries[]>(BASE_URL);
    setCountries(countriesResponse.data.map(country => (
      {
      ...country,
      id: Math.random(),
      }
      )));
  },[]);

  useEffect(() => {
    fetchData().catch(e => console.error(e));
  }, [fetchData]);

  return (
    <div>
       <CountiesList countries={countries}/>
    </div>
  );
};

export default Countries;