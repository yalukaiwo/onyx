import { IFilters } from "@/interfaces";
import { newFilters } from "./Filters";
import { useState } from "react";
import { IFiltersCheckbox } from "@/interfaces/filters";
import CheckboxInput from "./CheckboxInput";

interface IMultipleCheckboxInput {
  label: string;
  choises: string[];
  id: keyof IFiltersCheckbox;
  filters: IFilters;
  setFilters: (data: newFilters) => void;
}

const MultipleCheckboxInput: React.FC<IMultipleCheckboxInput> = ({
  label,
  choises,
  filters,
  setFilters,
  id,
}) => {
  const [chosen, setChosen] = useState<string[]>(filters[id]);

  const updateChosen = (newChosen: string[]) => {
    setChosen(newChosen);
    const filtersCopy = { ...filters };
    filtersCopy[id] = newChosen;
    setFilters(filtersCopy);
  };

  const choisesJSX = choises.map((item) => (
    <CheckboxInput
      label={item}
      key={`checkbox-${item}`}
      isChecked={chosen.includes(item)}
      onClick={() => {
        if (chosen.includes(item)) {
          const updatedChosen = [
            ...chosen.slice(0, chosen.indexOf(item)),
            ...chosen.slice(chosen.indexOf(item) + 1, chosen.length),
          ];
          updateChosen(updatedChosen);
        } else {
          updateChosen([...chosen, item]);
        }
      }}
    />
  ));

  return (
    <div>
      <h3 className="text-[16px] font-medium leading-[22px]">{label}</h3>
      <div className="flex gap-[16px] flex-wrap mt-[16px]">{...choisesJSX}</div>
    </div>
  );
};

export default MultipleCheckboxInput;
