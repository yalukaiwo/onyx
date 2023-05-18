import FlagDE from "./FlagDE";
import FlagRU from "./FlagRU";
import NoCountry from "./NoCountry";

interface IFlagProps {
  type?: string;
  size: number;
}

const Flag: React.FC<IFlagProps> = ({ type, size }) => {
  switch (type) {
    case "RU":
      return <FlagRU width={size} height={size} />;
    case "DE":
      return <FlagDE width={size} height={size} />;
    default:
      return <NoCountry width={size} height={size} />;
  }
};

export default Flag;
