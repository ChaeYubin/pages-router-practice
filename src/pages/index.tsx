import Head from "next/head";
import Link from "next/link";
import s from "@/styles/Home.module.css";
import { CurrentWeatherResponse } from "@/types/CurrentWeatherResponse";
import { InferGetServerSidePropsType } from "next";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

const locationList = [
  { location: "seoul", locationKR: "서울" },
  { location: "london", locationKR: "런던" },
  { location: "paris", locationKR: "파리" },
];

export const getServerSideProps = async () => {
  const locationEN = locationList.map((x) => x.location);
  const apiPath = `http://api.weatherapi.com/v1/current.json?lang=ko&key=${API_KEY}`;

  const currentWeather = await Promise.all(
    locationEN.map(async (location) => {
      const res = await fetch(`${apiPath}&q=${location}`);
      const data: CurrentWeatherResponse = await res.json();
      return data.current.condition.text;
    })
  );

  return { props: { currentWeather } };
};

export default function Home({
  currentWeather,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Pages Router Practice</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>날씨 앱</h1>
        <ul className={s.list}>
          {locationList.map((location, index) => (
            <li key={location.location}>
              <span className={s.boldText}>{location.locationKR}의 날씨</span>는{" "}
              {currentWeather[index]}
              <br />
              <Link
                href={{
                  pathname: `${location.location}`,
                  query: {
                    location: location.location,
                    locationKR: location.locationKR,
                  },
                }}
              >
                <p className={s.aText}>3일 예보 확인하기</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
