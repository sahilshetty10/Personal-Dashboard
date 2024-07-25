import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ConfigWeather = () => {
  const [countries, setCountries] = useState([]);
  const handlePredict = async (e: any) => {
    let input = e.target.value;
    if (input.length < 3) return;
    let response = await fetch(
      `http://api.weatherapi.com/v1/search.json?key=5c2cd8491d4f4186aea02645241403&q=${input}`
    );
    let data = await response.json();
    setCountries(data);
    console.log(data);
  };
  const handleLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log(lat, lon);
      const valueElement = document.getElementById("weather-location");
      if (valueElement) {
        valueElement.setAttribute("value", `${lat}, ${lon}`);
      }
    });
  };
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Weather Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CardDescription className="text-lg">Location</CardDescription>
          <Input
            list="weather-countries"
            placeholder="Country"
            onChange={handlePredict}
            id="weather-location"
          />
          <datalist id="weather-countries">
            {countries &&
              countries.map((country: any) => (
                <option
                  key={country.id}
                  value={`${country.lat}, ${country.lon}`}
                >
                  {country.name}
                </option>
              ))}
          </datalist>
        </CardContent>
        <CardFooter>
          <Button variant={"outline"} onClick={handleLocation}>
            Use current location
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ConfigWeather;
