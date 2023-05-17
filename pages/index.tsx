import { Banner, DescriptionCard, ServiceCard } from "@/components";
import { withLayout } from "@/layout";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Onyx</title>
      </Head>
      <main className="mx-auto max-w-[1100px] w-full">
        <section>
          <Banner />
          <section className="flex gap-[28px] flex-wrap mb-[38px] justify-center">
            <DescriptionCard
              label="Быстрое и мощное железо"
              image="/cardimage1.png"
              note="Серверы базируются на мощных процессорах и быстрых NVMe дисках"
              width={187}
              height={178}
            />
            <DescriptionCard
              label="Anti-DDoS защита"
              image="/cardimage2.png"
              note="Серверы оснащены защитой от DDoS-атак, которая работает в постоянном режиме"
              width={254}
              height={206}
            />
            <DescriptionCard
              label="Круглосуточная тех. поддержка"
              image="/cardimage3.png"
              note="Тех поддержка работает круглосуточно и активно помогает нашим клиентам"
              width={254}
              height={206}
            />
            <DescriptionCard
              label="Высокий аптайм серверов  "
              image="/cardimage4.png"
              note="Серверы работают круглосуточно, что позволяет выполнять задачи на постоянной основе"
              width={254}
              height={206}
            />
          </section>
          <section>
            <h2 className="text-center mb-[24px] leading-[38px] text-[28px] font-medium">
              Наши услуги
            </h2>
            <div className="flex gap-[28px] flex-wrap justify-center">
              <ServiceCard
                image={{
                  url: "/dedicatedservers.png",
                  width: 139,
                  height: 170,
                  bottom: 0,
                  right: 0,
                  opacity: 1,
                }}
                background="radial-gradient(27.16% 58.33% at 20.69% 73.95%, rgba(0, 71, 255, 0.185) 0%, rgba(0, 71, 255, 0) 100%), rgba(0, 71, 255, 0.07)"
                label="Выделенные серверы"
              />
              <ServiceCard
                image={{
                  url: "/ddosprotection.png",
                  width: 153,
                  height: 169,
                  bottom: 0,
                  right: 0,
                  opacity: 1,
                }}
                background="radial-gradient(25.57% 54.93% at 29.45% 35.53%, rgba(0, 71, 255, 0.14) 0%, rgba(0, 71, 255, 0) 100%), rgba(0, 71, 255, 0.07)"
                label="Защита от DDoS-атак"
              />
              <ServiceCard
                image={{
                  url: "/controller.png",
                  width: 177,
                  height: 190,
                  bottom: 0,
                  right: 0,
                  opacity: 50,
                }}
                background="radial-gradient(25.44% 42.59% at 32.47% 33.95%, rgba(0, 71, 255, 0.092) 0%, rgba(0, 71, 255, 0) 100%), rgba(0, 71, 255, 0.03)"
                soon
                label="Игровой хостинг"
              />
              <ServiceCard
                image={{
                  url: "/monitor.png",
                  width: 140,
                  height: 190,
                  bottom: 0,
                  right: 0,
                  opacity: 50,
                }}
                background="radial-gradient(29.71% 63.85% at 70.11% 79.74%, rgba(0, 71, 255, 0.092) 0%, rgba(0, 71, 255, 0) 100%), rgba(0, 71, 255, 0.03)"
                soon
                label="Веб Хостинг"
              />
              <ServiceCard
                image={{
                  url: "/domain.png",
                  width: 338,
                  height: 123,
                  bottom: 0,
                  right: 0,
                  opacity: 50,
                }}
                background="radial-gradient(29.66% 58.64% at 77.73% 32.37%, rgba(0, 71, 255, 0.07) 0%, rgba(0, 71, 255, 0) 100%), rgba(0, 71, 255, 0.03)"
                soon
                label="Домены"
              />
              <ServiceCard
                image={{
                  url: "/colocation.png",
                  width: 327,
                  height: 170,
                  bottom: 0,
                  right: 0,
                  opacity: 50,
                }}
                background="radial-gradient(31.75% 68.21% at 35.63% 94.21%, rgba(0, 71, 255, 0.07) 0%, rgba(0, 71, 255, 0) 100%), rgba(0, 71, 255, 0.03)"
                soon
                label="Colocation"
              />
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default withLayout(<Home />);
