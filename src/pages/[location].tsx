import Button from "@/components/Button";
import { ForecastResponse } from "@/types/ForecastResponse";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import s from "@/styles/LocationDetail.module.css";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // fetch data
  const apiPath = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${context.params?.location}&days=3&aqi=no&alerts=no&lang=ko`;
  const res = await fetch(apiPath);

  const forecast: ForecastResponse = await res.json();

  return { props: { forecast } };
};

export default function Detail({
  forecast,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  return (
    <>
      <h1>{router.query.locationKR}의 3일 날씨 예보</h1>
      <ul className={s.list}>
        {forecast.forecast.forecastday.map((day) => (
          <li key={day.date}>
            {day.date}
            <br />
            {day.day.condition.text} / 평균 {day.day.avgtemp_c}
          </li>
        ))}
      </ul>
      <Button />
    </>
  );
}
