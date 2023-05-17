import ICountry from "./country";

enum Processor {
  Intel,
  AMD,
}

enum RAM {
  DDR3,
  DDR4,
  DDR5,
}

enum Drive {
  HDD,
  SSD,
  NVME,
}

enum Protection {
  Basic,
  Game,
  None,
}

export default interface IFilters {
  search: string;
  location: ICountry;
  price: [number, number];
  processor: Processor[];
  cores: [number, number];
  latency: [number, number];
  ram: RAM[];
  capacity: [number, number];
  drive: Drive[];
  speed: [number, number];
  protection: Protection[];
}
