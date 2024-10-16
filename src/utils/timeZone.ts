import { TimeZoneResponse } from "@/types/TimeZone";

export const getTime = async (timeZone: string): Promise<TimeZoneResponse> => {
  const res = await fetch(
    `https://timeapi.io/api/Time/current/zone?timeZone=${timeZone}`
  );

  return res.json();
};
