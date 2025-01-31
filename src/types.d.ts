export interface ApiCountries {
  name: string;
  alpha3Code: string;
}

export interface ApiCountry {
  name: string;
  flag: string;
  capital: string;
  population: number;
  region: string;
  borders: Borders[];
}

export interface Borders {
  name: string;
}