import { newFilters } from "./Filters";
import { RiSearch2Line } from "react-icons/ri";

interface IFiltersInputProps {
  search: string;
  setSearch: (data: newFilters) => void;
}

const FiltersInput: React.FC<IFiltersInputProps> = ({ search, setSearch }) => {
  return (
    <div className="w-full relative">
      <input
        className="bg-transparent w-full pl-[47px] py-[10px] pr-[16px] border-[1px] border-black/[0.38] rounded-[3px] outline-none placeholder:text-[14px] placeholder:leading-[19px] placeholder:font-medium placeholder:text-black/[0.61] text-[14px] leading-[19px]"
        placeholder="Поиск"
        value={search}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setSearch({ search: e.currentTarget.value });
        }}
      ></input>
      <RiSearch2Line
        size={19}
        color={"rgba(0, 0, 0, 0.61)"}
        className="absolute top-[50%] -translate-y-[50%] left-[16px]"
      />
    </div>
  );
};

export default FiltersInput;
