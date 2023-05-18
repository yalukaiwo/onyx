import ICountry from "./country";

export interface IFiltersPresets {
  price: [number, number];
  cores: [number, number];
  latency: [number, number];
  capacity: [number, number];
  speed: [number, number];
}

export interface IFiltersCheckbox {
  processor: string[];
  ram: string[];
  drive: string[];
  protection: string[];
}

export default interface IFilters {
  search: string;
  location: ICountry;
  price: [number, number];
  processor: string[];
  cores: [number, number];
  latency: [number, number];
  ram: string[];
  capacity: [number, number];
  drive: string[];
  speed: [number, number];
  protection: string[];
}
