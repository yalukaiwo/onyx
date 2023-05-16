import Image from "next/image";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";

const Header = () => {
  return (
    <header className="py-[36px] max-w-[1100px] w-full flex justify-between items-center mx-auto">
      <div className="flex items-center">
        <Image src="/logo.png" width={102} height={28} alt="Logo" />
        <div className="flex items-center cursor-pointer">
          <span className="font-medium text-[15px] ml-[90px] leading-[20px] mr-1">
            RU
          </span>
          <BiChevronDown width={7} />
        </div>
      </div>
      <ul className="flex gap-[34px] items-center">
        <li className="font-semibold text-[15px] leading-[20px] flex items-center">
          <Link href="">О нас</Link>
        </li>
        <li className="font-semibold text-[15px] leading-[20px] flex items-center cursor-pointer">
          <span className="mr-1">Услуги</span> <BiChevronDown width={7} />
        </li>
        <li className="font-semibold text-[15px] leading-[20px] flex items-center">
          <Link href="">Реф. система</Link>
        </li>
        <li className="font-semibold text-[15px] leading-[20px] flex items-center">
          <Link href="">Партнёрам</Link>
        </li>
      </ul>
      <div className="flex gap-[16px] items-center">
        <button className="font-semibold text-[#3D73FF] leading-[19px] text-[14px] border-[1px] border-[#3D73FF] px-[20px] py-[10px] rounded-[3px] hover:bg-[#3D73FF] hover:text-white transition">
          Войти
        </button>
        <button className="font-semibold text-white leading-[19px] text-[14px] border-[1px] border-[#3D73FF] bg-[#3D73FF] px-[20px] py-[10px] rounded-[3px] hover:text-[#3D73FF] hover:bg-white transition">
          Регистрация
        </button>
      </div>
    </header>
  );
};

export default Header;
