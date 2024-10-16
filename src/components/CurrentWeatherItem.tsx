import s from "@/styles/Home.module.css";
import Link from "next/link";

interface Props {
  cityCode: string;
  cityName: string;
  weather: string;
}

const CurrentWeatherItem = ({ cityCode, cityName, weather }: Props) => {
  return (
    <li key={cityCode}>
      <span className={s.boldText}>{cityName}의 날씨</span>는 {weather}
      <br />
      <Link
        href={{
          pathname: `${cityCode}`,
          query: {
            code: cityCode,
            name: cityName,
          },
        }}
      >
        <p className={s.aText}>3일 예보 확인하기</p>
      </Link>
    </li>
  );
};

export default CurrentWeatherItem;