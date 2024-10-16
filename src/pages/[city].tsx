import Button from "@/components/Button";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import s from "@/styles/LocationDetail.module.css";
import { getForecast } from "@/api/weather";
import ForecastItem from "@/components/ForecastItem";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const res = await getForecast(context.params?.city as string);

  return { props: { forecast: res.forecast.forecastday } };
};

export default function Detail({
  forecast,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  return (
    <>
      <h1>{router.query.name}의 3일 날씨 예보</h1>
      <ul className={s.list}>
        {forecast.map((item) => (
          <ForecastItem
            key={item.date}
            date={item.date}
            condition={item.day.condition.text}
            avgTemp={item.day.avgtemp_c}
          />
        ))}
      </ul>
      <Button />
    </>
  );
}
