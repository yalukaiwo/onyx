import Image from "next/image";

interface IDescriptionCardProps {
  label: string;
  image: string;
  note: string;
  width: number;
  height: number;
}

const DescriptionCard: React.FC<IDescriptionCardProps> = ({
  label,
  image,
  note,
  width,
  height,
}) => {
  return (
    <div className="w-[254px] box-border">
      <div className="w-full rounded-[8px] bg-[#0047FF]/[0.07]">
        <div className="w-full h-[206px] flex justify-center items-center rounded-t-[8px] rounded-b-[20px] bg- bg-[url('/cardimagebackground.png')] bg-cover">
          <Image
            className="rounded-t-[8px] rounded-b-[20px]"
            src={image}
            width={width}
            height={height}
            alt="Img"
          />
        </div>
        <div className="px-[28px] pt-[16px] pb-[24px] rounded-b-[8px]">
          <h3 className="text-[24px] font-medium leading-[33px]">{label}</h3>
        </div>
      </div>
      <p className="text-[#394262]/[0.56] font-medium text-[15px] leading-[22px] mt-[11px]">
        {note}
      </p>
    </div>
  );
};

export default DescriptionCard;
