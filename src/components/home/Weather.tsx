import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const data = {
  weatherData: {
    location: {
      name: "Willowdale",
      region: "Ontario",
      country: "Canada",
      lat: 43.78,
      lon: -79.3,
      tz_id: "America/Toronto",
      localtime_epoch: 1721926541,
      localtime: "2024-07-25 12:55",
    },
    current: {
      last_updated_epoch: 1721925900,
      last_updated: "2024-07-25 12:45",
      temp_c: 22.6,
      temp_f: 72.7,
      is_day: 1,
      condition: {
        text: "Sunny",
        icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
        code: 1000,
      },
      wind_mph: 8.9,
      wind_kph: 14.4,
      wind_degree: 321,
      wind_dir: "NW",
      pressure_mb: 1020,
      pressure_in: 30.12,
      precip_mm: 0,
      precip_in: 0,
      humidity: 47,
      cloud: 19,
      feelslike_c: 23.9,
      feelslike_f: 75.1,
      windchill_c: 22.6,
      windchill_f: 72.7,
      heatindex_c: 23.9,
      heatindex_f: 75.1,
      dewpoint_c: 10.8,
      dewpoint_f: 51.4,
      vis_km: 10,
      vis_miles: 6,
      uv: 6,
      gust_mph: 10.3,
      gust_kph: 16.6,
    },
  },
};

const Weather = ({ data }: any) => {
  return (
    <section className="row-span-2 col-span-1">
      <Card className="flex items-center justify-center flex-col h-full">
        <CardHeader>
          <CardTitle>
            {data.location.name}, {data.location.region}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-8">
          <CardDescription className="text-6xl">
            {data.current.temp_c} &#8451;
          </CardDescription>
          <div className="flex items-center justify-center flex-col">
            <img
              src={data.current.condition.icon}
              alt={data.current.condition.text}
            />
            <CardDescription>{data.current.condition.text}</CardDescription>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Weather;
