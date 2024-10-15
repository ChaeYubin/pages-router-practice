import { Location, Current } from "./Weather";

export interface CurrentWeatherResponse {
  location: Location;
  current: Current;
}
