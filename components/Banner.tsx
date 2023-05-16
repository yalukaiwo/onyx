import Image from "next/image";

const Banner = () => {
  return (
    <section
      style={{
        background:
          "radial-gradient(12.73% 39.95% at 81.45% 72.82%, rgba(0, 7, 171, 0.266) 0%, rgba(0, 5, 135, 0) 100%), radial-gradient(20.59% 72.17% at 10.77% 27.79%, rgba(65, 93, 240, 0.26) 0%, rgba(65, 93, 240, 0) 100%), linear-gradient(180deg, rgba(225, 232, 255, 0.7857) 3.83%, rgba(225, 232, 255, 0.9118) 96.42%)",
      }}
      className="w-full px-[74px] pt-[48px] pb-[63px] rounded-[8px] flex justify-between mb-[28px]"
    >
      <div>
        <p className="font-semibold text-[16px] leading-[22px] text-[#415DF0] px-[20px] py-[6px] border-[#415DF0] border-[1px] inline-block rounded-[50px]">
          Исключительно быстрые и мощные серверы
        </p>
        <h2 className="font-semibold text-[56px] leading-[69px] max-w-[610px] mt-[8px]">
          Производительность. Скорость. Цены
        </h2>
        <h4 className="font-medium text-[15px] leading-[22px] mt-[16px]">
          Мы предлагаем надёжные решения для вашего бизнеса
        </h4>
        <button className="px-[20px] py-[10px] bg-[#0047FF] text-white text-[14px] leading-[19px] rounded-[3px] mt-[24px]">
          Выбрать услугу
        </button>
      </div>
      <Image src="/banner_cube.png" alt="Cube" width={284} height={261} />
    </section>
  );
};

export default Banner;
