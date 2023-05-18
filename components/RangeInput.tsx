import { useRef, useState } from "react";
import { newFilters } from "./Filters";
import { Slider } from "./lib";
import { ChangeResult } from "./lib/Slider/Slider";
import { IFilters, IFiltersPresets } from "@/interfaces";

interface IRangeInputProps {
  min: number;
  max: number;
  type: "number" | "capacity" | "latency";
  label: string;
  current: { id: keyof IFiltersPresets; values: [number, number] };
  setCurrent: (data: newFilters) => void;
  filters: IFilters;
}

const RangeInput: React.FC<IRangeInputProps> = ({
  min,
  max,
  type,
  label,
  current,
  setCurrent,
  filters,
}) => {
  const fromRef = useRef<HTMLInputElement>(null);
  const toRef = useRef<HTMLInputElement>(null);

  const [currentMin, setCurrentMin] = useState<number>(current.values[0]);
  const [currentMax, setCurrentMax] = useState<number>(current.values[1]);
  const [minCapIdentifier, setMinCapIdentifier] = useState<"ГБ" | "ТБ">("ГБ");
  const [maxCapIdentifier, setMaxCapIdentifier] = useState<"ГБ" | "ТБ">("ТБ");

  return (
    <div className="flex flex-col gap-[16px]">
      <h3 className="text-[16px] font-medium leading-[22px]">{label}</h3>
      <Slider
        min={min}
        max={max}
        minValue={current.values[0]}
        maxValue={current.values[1]}
        onChange={(e: ChangeResult) => {
          let filtersCopy = { ...filters };
          setCurrentMin(e.minValue);
          setCurrentMax(e.maxValue);
          filtersCopy[current.id] = [e.minValue, e.maxValue];
          setCurrent({ ...filtersCopy });
        }}
        label={false}
        ruler={false}
        style={{
          border: "none",
          borderRadius: 0,
          boxShadow: "none",
          padding: "7px 8px",
        }}
        step={
          filters[current.id][0].toString().includes(".") ||
          filters[current.id][1].toString().includes(".")
            ? 0.1
            : 1
        }
        barLeftColor="rgba(0, 0, 0, 0.14)"
        barInnerColor="rgba(0, 71, 255, 1)"
        barRightColor="rgba(0, 0, 0, 0.14)"
        thumbLeftColor="rgba(0, 71, 255, 1)"
        thumbRightColor="rgba(0, 71, 255, 1)"
      />
      <div className="flex gap-[20px] w-full">
        <div
          onClick={() => {
            fromRef.current?.focus();
          }}
          className="rounded-[3px] grid grid-cols-3 border-[1px] border-black/[0.38] px-[16px] py-[10px] cursor-text"
        >
          <span className="font-medium text-[14px] leading-[19px] text-black/[0.61] flex items-center">
            от
          </span>
          <input
            disabled={type === "capacity" || type === "latency"}
            onInput={(e: React.FormEvent<HTMLInputElement>) => {
              const replaced = e.currentTarget.value
                .replace("ГБ", "")
                .replace("ТБ ", "")
                .trim();
              if (replaced === "") {
                setCurrentMin(0);
              }
              if (parseInt(replaced)) {
                setCurrentMin(parseInt(e.currentTarget.value));
              }
            }}
            onBlur={(e: React.FormEvent<HTMLInputElement>) => {
              const replaced = e.currentTarget.value
                .replace("ГБ", "")
                .replace("ТБ ", "")
                .trim();
              let filtersCopy = { ...filters };

              if (
                parseInt(replaced) &&
                parseInt(replaced) >= min &&
                parseInt(replaced) < currentMax
              ) {
                filtersCopy[current.id] = [currentMin, currentMax];
                setCurrent({ ...filtersCopy });
              } else if (parseInt(replaced) < min) {
                setCurrentMin(min);
                filtersCopy[current.id] = [min, currentMax];
                setCurrent({ ...filtersCopy });
              } else if (parseInt(replaced) >= currentMax) {
                setCurrentMin(currentMax - 1);
                filtersCopy[current.id] = [currentMax - 1, currentMax];
                setCurrent({ ...filtersCopy });
              } else {
                setCurrentMin(current.values[0]);
                filtersCopy[current.id] = [current.values[0], currentMax];
                setCurrent({ ...filtersCopy });
              }
            }}
            className="col-span-2 bg-transparent outline-none border-none text-right font-medium text-[14px] leading-[19px] flex items-center"
            ref={fromRef}
            value={`${
              type === "capacity"
                ? currentMin >= 1024
                  ? Math.floor(currentMin / 1024)
                  : currentMin
                : currentMin
            }${type === "capacity" ? ` ${minCapIdentifier}` : ""}`}
          />
        </div>
        <div
          onClick={() => {
            toRef.current?.focus();
          }}
          className="rounded-[3px] grid grid-cols-3 border-[1px] border-black/[0.38] px-[16px] py-[10px] cursor-text"
        >
          <span className="font-medium text-[14px] leading-[19px] text-black/[0.61] flex items-center">
            до
          </span>
          <input
            disabled={type === "capacity" || type === "latency"}
            onInput={(e: React.FormEvent<HTMLInputElement>) => {
              const replaced = e.currentTarget.value
                .replace("ГБ", "")
                .replace("ТБ ", "")
                .trim();
              if (replaced === "") {
                setCurrentMax(0);
              }
              if (parseInt(replaced)) {
                setCurrentMax(parseInt(e.currentTarget.value));
              }
            }}
            onBlur={(e: React.FormEvent<HTMLInputElement>) => {
              const replaced = e.currentTarget.value
                .replace("ГБ", "")
                .replace("ТБ ", "")
                .trim();
              let filtersCopy = { ...filters };

              if (
                parseInt(replaced) &&
                parseInt(replaced) <= max &&
                parseInt(replaced) > currentMin
              ) {
                filtersCopy[current.id] = [currentMin, currentMax];
                setCurrent({ ...filtersCopy });
              } else if (parseInt(replaced) > max) {
                setCurrentMax(max);
                filtersCopy[current.id] = [currentMin, max];
                setCurrent({ ...filtersCopy });
              } else if (parseInt(replaced) <= currentMin) {
                setCurrentMax(currentMin + 1);
                filtersCopy[current.id] = [currentMin, currentMin + 1];
                setCurrent({ ...filtersCopy });
              } else {
                setCurrentMax(current.values[1]);
                filtersCopy[current.id] = [currentMin, current.values[1]];
                setCurrent({ ...filtersCopy });
              }
            }}
            className="col-span-2 bg-transparent outline-none border-none text-right font-medium text-[14px] leading-[19px] flex items-center"
            ref={toRef}
            value={`${
              type === "capacity"
                ? currentMax >= 1024
                  ? Math.floor(currentMax / 1024)
                  : currentMax
                : currentMax
            }${type === "capacity" ? ` ${maxCapIdentifier}` : ""}`}
          />
        </div>
      </div>
    </div>
  );
};

export default RangeInput;
