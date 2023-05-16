import Image from "next/image";
import Link from "next/link";
import { BsTelegram } from "react-icons/bs";
import { VK } from "./svg";

const Footer = () => {
  return (
    <footer className="flex justify-between border-t-[1px] border-[rgba(135, 135, 135, 0.35)] max-w-[1100px] w-full mx-auto mt-[75px] pt-[25px] pb-[75px]">
      <div className="flex flex-col gap-[16px]">
        <Image src="/logo_blackwhite.png" width={91} height={25} alt="Logo" />
        <p className="font-medium text-[#54596A]/[0.56] text-[13px]">
          © 2022-2023 Хостинг ONYX
        </p>
      </div>
      <div className="flex gap-[28px]">
        <div className="flex flex-col gap-[18px]">
          <h3 className="uppercase text-[#54596A]/[0.56] font-medium leading-[16px] text-[15px]">
            Услуги
          </h3>
          <ul className="flex flex-col gap-[16px]">
            <li className="w-[160px] font-medium text-[15px] leading-[18px] text-[#54596A]">
              <Link href="">Выделенные серверы</Link>
            </li>
            <li className="w-[160px] font-medium text-[15px] leading-[18px] text-[#54596A]">
              <Link href="">Защита от DDoS-атак</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[18px]">
          <h3 className="uppercase text-[#54596A]/[0.56] font-medium leading-[16px] text-[15px]">
            Документы
          </h3>
          <ul className="flex flex-col gap-[16px]">
            <li className="w-[160px] font-medium text-[15px] leading-[18px] text-[#54596A]">
              <Link href="">Условия использования</Link>
            </li>
            <li className="w-[160px] font-medium text-[15px] leading-[18px] text-[#54596A]">
              <Link href="">Политика конфиденциальности</Link>
            </li>
            <li className="w-[160px] font-medium text-[15px] leading-[18px] text-[#54596A]">
              <Link href="">База знаний</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[20px]">
          <h3 className="uppercase text-[#54596A]/[0.56] font-medium leading-[16px] text-[15px]">
            Контакты
          </h3>
          <ul className="flex flex-col gap-[16px]">
            <li className="w-[160px] font-medium text-[15px] leading-[18px] text-[#54596A]">
              <p className="text-[#54596A]/[0.56] font-medium text-[12px] leading-[17px] mb-[4px]">
                Тех. поддержка
              </p>
              <Link href="">support@onyx.host</Link>
            </li>
            <li className="w-[160px] font-medium text-[15px] leading-[18px] text-[#54596A]">
              <p className="text-[#54596A]/[0.56] font-medium text-[12px] leading-[17px] mb-[4px]">
                Почта для жалоб
              </p>
              <Link href="">abuse@onyx.host</Link>
            </li>
            <li className="w-[160px] font-medium text-[15px] leading-[18px] text-[#54596A]">
              <p className="text-[#54596A]/[0.56] font-medium text-[12px] leading-[17px] mb-[4px]">
                Сотрудничество
              </p>
              <Link href="">admin@onyx.host</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <Link href="">
          <div className="flex items-center gap-[12px]">
            <BsTelegram size={24} className="text-[#54596A]/[0.56]" />
            <span className="text-[15px] font-medium leading-[19px] text-[#54596A]">
              Мы в Telegram
            </span>
          </div>
        </Link>
        <Link href="">
          <div className="flex items-center gap-[12px]">
            <VK width={24} height={24} color="#54596A" opacity={0.56} />
            <span className="text-[15px] font-medium leading-[19px] text-[#54596A]">
              Мы в Вконтакте
            </span>
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
