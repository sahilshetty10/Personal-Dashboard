import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Weather = () => {
  const weatherData = {
    location: {
      name: "London",
      region: "Greater London",
    },
    current: {
      temp_c: 22.0,
      condition: {
        text: "Partly cloudy",
        icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
      },
    },
  };
  return (
    <section className="row-span-2 col-span-1">
      <Card className="flex items-center justify-center flex-col h-full">
        <CardHeader>
          <CardTitle>
            {weatherData.location.name}, {weatherData.location.region}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-8">
          <CardDescription className="text-6xl">
            {weatherData.current.temp_c} &#8451;
          </CardDescription>
          <div className="flex items-center justify-center flex-col">
            <img
              src={weatherData.current.condition.icon}
              alt={weatherData.current.condition.text}
            />
            <CardDescription>
              {weatherData.current.condition.text}
            </CardDescription>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Weather;
