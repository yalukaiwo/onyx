import Image from "next/image";

interface IServiceCardProps {
  label: string;
  soon?: boolean;
  background: string;
  image: {
    url: string;
    bottom: number;
    right: number;
    width: number;
    height: number;
    opacity: number;
  };
}

const ServiceCard: React.FC<IServiceCardProps> = ({
  background,
  label,
  soon,
  image,
}) => {
  const right: Record<string, string> = {
    0: "right-0",
    20: "right-[20px]",
  };

  const bottom: Record<string, string> = {
    0: "bottom-0",
    17: "bottom-[17px]",
  };

  const opacity: Record<string, string> = {
    1: "bg-opacity-100",
    50: "bg-opacity-50",
  };

  return (
    <div
      className={`${
        opacity[image.opacity]
      } pt-[20px] pb-[24px] px-[28px] flex flex-col justify-between w-[348px] h-[190px] relative backdrop-blur-[100px] rounded-[8px]`}
      style={{
        background: background,
      }}
    >
      <h3 className="leading-[38px] text-[28px] font-medium max-w-[198px] z-10">
        {label}
      </h3>
      <div className={`absolute ${right[image.right]} ${bottom[image.bottom]}`}>
        <Image
          src={image.url}
          width={image.width}
          height={image.height}
          className="rounded-br-[8px]"
          alt={label}
        />
      </div>
      {soon && (
        <div className="z-10">
          <p className="inline border-[1px] bg-white/[0.01] backdrop-blur-[20px] text-[#415DF0]  border-[#415DF0] rounded-[50px] px-[20px] py-[6px]">
            Скоро
          </p>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
