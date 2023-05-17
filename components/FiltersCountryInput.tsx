import { ICountry } from "@/interfaces";
import { NoCountry } from "./svg";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";

interface IFiltersCountryInput {
  country: ICountry;
  setCountry: React.Dispatch<React.SetStateAction<ICountry>>;
}

const FiltersCountryInput: React.FC<IFiltersCountryInput> = ({
  country,
  setCountry,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      className="border-[1px] border-black/[0.38] px-[16px] py-[10px] rounded-[3px] flex items-center justify-between cursor-pointer"
    >
      <div className="flex items-center">
        <NoCountry width={19} height={19} />
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
  );
};

export default FiltersCountryInput;
