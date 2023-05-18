import { BsCheck } from "react-icons/bs";

interface ICheckboxInputProps {
  isChecked: boolean;
  label: string;
  onClick: () => void;
}

const CheckboxInput: React.FC<ICheckboxInputProps> = ({
  isChecked,
  label,
  onClick,
}) => {
  return (
    <div
      className="flex gap-[8px] items-center cursor-pointer"
      onClick={onClick}
    >
      {!isChecked ? (
        <div className="w-[24px] h-[24px] rounded-[4px] bg-[#DDE0E8]"></div>
      ) : (
        <div className="w-[24px] h-[24px] rounded-[4px] bg-[#0047FF] flex items-center justify-center">
          <BsCheck size={24} color={"#FFFFFF"} />
        </div>
      )}
      <h4 className="font-medium text-[14px] leading-[19px]">{label}</h4>
    </div>
  );
};

export default CheckboxInput;
