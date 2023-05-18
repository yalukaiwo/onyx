import { Filters } from "@/components";
import { IFilters, IFiltersPresets } from "@/interfaces";
import { withLayout } from "@/layout";
import { useState } from "react";

enum Sections {
  PremadeServers,
  CreateConfiguration,
  Auction,
}

const Servers = () => {
  const [section, setSection] = useState<Sections>(Sections.PremadeServers);

  const [filtersPresets, _] = useState<IFiltersPresets>({
    price: [1200, 156400],
    cores: [16, 128],
    latency: [2.4, 5.5],
    capacity: [120, 16384],
    speed: [100, 10000],
  });

  const [filters, setFilters] = useState<IFilters>({
    search: "",
    location: {
      flag: "",
      id: 0,
      label: "Выбор локации",
    },
    price: [1200, 156400],
    processor: [],
    cores: [16, 128],
    latency: [2.4, 5.5],
    ram: [],
    capacity: [120, 16384],
    drive: [],
    speed: [100, 10000],
    protection: [],
  });

  return (
    <section className="max-w-[1100px] mx-auto w-full">
      <div className="border-b-[1px] border-black/[0.19] mb-[17px]">
        <ul className="flex items-center">
          <li
            className={`px-[10px] py-[16px] text-[24px] leading-[33px] cursor-pointer relative after:absolute after:h-[1px] after:bg-[#0047FF] after:left-[50%] after:-bottom-[1px] after:z-10 after:transition-width after:duration-500 before:absolute before:h-[1px] before:bg-[#0047FF] before:right-[50%] before:-bottom-[1px] before:z-10 before:transition-width before:duration-500 ${
              section === Sections.PremadeServers
                ? "font-semibold text-black/1 after:w-[50%] before:w-[50%]"
                : "font-medium text-black/[0.61] after:w-0 before:w-0"
            }`}
            onClick={() => {
              setSection(Sections.PremadeServers);
            }}
          >
            Готовые серверы
          </li>
          <li
            className={`px-[10px] py-[16px] text-[24px] leading-[33px] cursor-pointer relative after:absolute after:h-[1px] after:bg-[#0047FF] after:left-[50%] after:-bottom-[1px] after:z-10 after:transition-width after:duration-500 before:absolute before:h-[1px] before:bg-[#0047FF] before:right-[50%] before:-bottom-[1px] before:z-10 before:transition-width before:duration-500 ${
              section === Sections.CreateConfiguration
                ? "font-semibold text-black/1 after:w-[50%] before:w-[50%]"
                : "font-medium text-black/[0.61] after:w-0 before:w-0"
            }`}
            onClick={() => {
              setSection(Sections.CreateConfiguration);
            }}
          >
            Собрать конфигурацию
          </li>
          <li
            className={`px-[10px] py-[16px] text-[24px] leading-[33px] cursor-pointer relative after:absolute after:h-[1px] after:bg-[#0047FF] after:left-[50%] after:-bottom-[1px] after:z-10 after:transition-width after:duration-500 before:absolute before:h-[1px] before:bg-[#0047FF] before:right-[50%] before:-bottom-[1px] before:z-10 before:transition-width before:duration-500 ${
              section === Sections.Auction
                ? "font-semibold text-black/1 after:w-[50%] before:w-[50%]"
                : "font-medium text-black/[0.61] after:w-0 before:w-0"
            }`}
            onClick={() => {
              setSection(Sections.Auction);
            }}
          >
            Аукцион
          </li>
        </ul>
      </div>
      <section className="grid grid-cols-4 gap-[28px]">
        <div className="w-full">
          <Filters
            filters={filters}
            setFilters={setFilters}
            presets={filtersPresets}
          />
        </div>
        <div className="col-span-3 w-full"></div>
      </section>
    </section>
  );
};

export default withLayout(<Servers />);
