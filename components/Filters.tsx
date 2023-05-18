import { IFilters, IFiltersPresets } from "@/interfaces";
import FiltersCountryInput from "./FiltersCountryInput";
import { useCallback, useState } from "react";
import FiltersInput from "./FiltersInput";
import RangeInput from "./RangeInput";
import MultipleCheckboxInput from "./MultipleCheckboxInput";

interface IFiltersProps {
  filters: IFilters;
  presets: IFiltersPresets;
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}

export type newFilters = { [Property in keyof IFilters]+?: IFilters[Property] };

const Filters: React.FC<IFiltersProps> = ({ filters, setFilters, presets }) => {
  const changeFilters = useCallback(
    (newData: newFilters) => {
      setFilters({ ...filters, ...newData });
    },
    [setFilters, filters]
  );

  return (
    <div className="w-full">
      <h2 className="text-[28px] font-semibold leading-[38px] mb-[24px]">
        Фильтры
      </h2>
      <div className="flex flex-col mt-[24px] gap-[24px]">
        <FiltersInput search={filters.search} setSearch={changeFilters} />
        <FiltersCountryInput
          setCountry={changeFilters}
          country={filters.location}
        />
      </div>
      <div className="flex flex-col gap-[20px] mt-[18px]">
        <RangeInput
          min={presets.price[0]}
          max={presets.price[1]}
          type="number"
          current={{ id: "price", values: filters.price }}
          filters={filters}
          label="Цена в ₽"
          setCurrent={changeFilters}
        />
        <MultipleCheckboxInput
          label="Процессор"
          choises={["Intel", "AMD"]}
          filters={filters}
          setFilters={changeFilters}
          id="processor"
        />
        <RangeInput
          min={presets.cores[0]}
          max={presets.cores[1]}
          type="number"
          current={{ id: "cores", values: filters.cores }}
          filters={filters}
          label="Кол-во ядер"
          setCurrent={changeFilters}
        />
        <RangeInput
          min={presets.latency[0]}
          max={presets.latency[1]}
          type="latency"
          current={{ id: "latency", values: filters.latency }}
          filters={filters}
          label="Частота процессора GHz"
          setCurrent={changeFilters}
        />
        <MultipleCheckboxInput
          label="Тип памяти"
          choises={["DDR3", "DDR4", "DDR5"]}
          filters={filters}
          setFilters={changeFilters}
          id="ram"
        />
        <RangeInput
          min={presets.capacity[0]}
          max={presets.capacity[1]}
          type="capacity"
          current={{ id: "capacity", values: filters.capacity }}
          filters={filters}
          label="Объём накопителя"
          setCurrent={changeFilters}
        />
        <MultipleCheckboxInput
          label="Накопитель"
          choises={["HDD", "SSD", "NVME"]}
          filters={filters}
          setFilters={changeFilters}
          id="processor"
        />
        <RangeInput
          min={presets.speed[0]}
          max={presets.speed[1]}
          type="number"
          current={{ id: "speed", values: filters.speed }}
          filters={filters}
          label="Скорость сети мбит/с"
          setCurrent={changeFilters}
        />
        <MultipleCheckboxInput
          label="Защита на сервере"
          choises={["Basic", "GAME", "Отсутствует"]}
          filters={filters}
          setFilters={changeFilters}
          id="processor"
        />
      </div>
    </div>
  );
};

export default Filters;
