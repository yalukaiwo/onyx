import { ICountry, IFilters } from "@/interfaces";
import FiltersCountryInput from "./FiltersCountryInput";
import { useState } from "react";

interface IFiltersProps {
  filters: IFilters;
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}

const Filters: React.FC<IFiltersProps> = ({ filters, setFilters }) => {
  const countries: ICountry[] = [
    { flag: "RU", id: 1, label: "Россия, Калининград" },
    { flag: "RU", id: 2, label: "Россия, Москва" },
    { flag: "DE", id: 3, label: "Германия, Франкфурт" },
    { flag: "DE", id: 4, label: "Германия, Берлин" },
  ];

  const [country, setCountry] = useState<ICountry>(filters.location);

  return (
    <div className="w-full">
      <h2 className="text-[28px] font-semibold leading-[38px] mb-[24px]">
        Фильтры
      </h2>
      <FiltersCountryInput setCountry={setCountry} country={country} />
    </div>
  );
};

export default Filters;
