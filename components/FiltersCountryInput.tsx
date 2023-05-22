import { ICountry } from "@/interfaces";
import { Flag } from "./svg";
import { BiChevronDown } from "react-icons/bi";
import { ReactNode, useState } from "react";
import { newFilters } from "./Filters";

interface IFiltersCountryInput {
  country: ICountry;
  setCountry: (data: newFilters) => void;
}

const FiltersCountryInput: React.FC<IFiltersCountryInput> = ({
  country,
  setCountry,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const countries: ICountry[] = [
    { flag: "RU", id: 1, label: "Россия, Калининград" },
    { flag: "RU", id: 2, label: "Россия, Москва" },
    { flag: "DE", id: 3, label: "Германия, Франкфурт" },
    { flag: "DE", id: 4, label: "Германия, Берлин" },
  ];

  const countriesJSX = [
    ...countries
      .filter((item) => item.id !== country.id)
      .map((item) => {
        return (
          <div
            key={`flag-${item.id}`}
            className="py-[8px] px-[11px] flex cursor-pointer"
            onClick={() => {
              setCountry({ location: item });
              setIsOpen(false);
            }}
          >
            <Flag size={19} type={item.flag} />
            <span className="font-medium text-[14px] leading-[19px] ml-[17px]">
              {item.label}
            </span>
          </div>
        );
      }),
  ];

  return (
    <div className="relative w-full">
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="border-[1px] border-black/[0.38] px-[16px] py-[10px] rounded-[3px] flex items-center justify-between cursor-pointer"
      >
        <div className="flex items-center">
          <Flag size={19} type={country.flag} />
          <span className="ml-[17px] text-[14px] leading-[19px] font-medium text-black/[0.61]">
            {country.label}
          </span>
        </div>
        <BiChevronDown
          size={18}
          color={"rgba(0, 0, 0, 0.42)"}
          className={`transition ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      <div
        className={`absolute grid ${
          !isOpen ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
        } transition-height duration-[0.35s] left-0 top-[calc(100%+8px)] w-full z-50`}
      >
        <div className="overflow-auto scrollbar-hide w-full ">
          <div className="p-[9px] bg-[rgba(255, 255, 255, 0.82)] border-[1px] border-[#E6E6E6] rounded-[3px] max-h-[250px] bg-white">
            {country.id !== 0 && (
              <div className="w-full p-[12px] border-[1px] bg-[#0047FF] border-[#E6E6E6] rounded-[3px] flex items-center cursor-pointer">
                <Flag size={19} type={country.flag} />
                <span className="font-semibold text-[14px] leading-[19px] text-white ml-[17px]">
                  {country.label}
                </span>
              </div>
            )}
            {...countriesJSX}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersCountryInput;
