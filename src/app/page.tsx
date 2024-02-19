'use client';

import Navbar from "@/components/Navbar";
import { WeatherData } from "@/types/weather-data";
import axios from "axios";
import { useQuery } from "react-query";
import dotenv from 'dotenv';

dotenv.config();

export default function Home() {
  const { isLoading, error, data } = useQuery<WeatherData>('repoData', async (): Promise<WeatherData> => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Hamburg&appid=${process.env.PUBLIC_OPENWEATHERMAP_API_KEY}`);
    return data;
  });

  console.log(data);
  console.log(process.env.PUBLIC_OPENWEATHERMAP_API_KEY);

  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
    </div>
  );
}
function asyc(): Omit<import("react-query").UseQueryOptions<unknown, unknown, unknown, "repoData">, "queryKey"> | undefined {
  throw new Error("Function not implemented.");
}