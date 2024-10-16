import { CurrentWeatherResponse } from "@/types/CurrentWeatherResponse";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export const getCurrentWeather = async (
  location: string
): Promise<CurrentWeatherResponse> => {
  const apiPath = `http://api.weatherapi.com/v1/current.json?lang=ko&key=${API_KEY}&q=${location}`;
  const res = await fetch(apiPath);

  return res.json();
};
