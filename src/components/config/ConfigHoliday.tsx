import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ConfigHoliday = () => {
  const [holidaysCountriesList, setHolidaysCountriesList] = useState([]);

  const fetchHolidaysCountries = async () => {
    let response = await fetch(
      "https://date.nager.at/api/v3/AvailableCountries"
    );
    let data = await response.json();
    let countries = data.map((country: any) => country.countryCode);
    setHolidaysCountriesList(countries);
  };

  useEffect(() => {
    fetchHolidaysCountries();
  }, []);
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Holiday Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CardDescription className="text-lg">Country</CardDescription>
          <Select>
            <SelectTrigger>
              <SelectValue>Country</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {holidaysCountriesList.map((country, index) => (
                <SelectItem key={index} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
    </>
  );
};

export default ConfigHoliday;
