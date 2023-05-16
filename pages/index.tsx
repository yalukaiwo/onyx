import { Banner, DescriptionCard } from "@/components";
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
        </section>
      </main>
    </>
  );
};

export default withLayout(<Home />);
