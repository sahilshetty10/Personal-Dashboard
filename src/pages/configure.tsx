import ConfigHoliday from "@/components/config/ConfigHoliday";
import ConfigNews from "@/components/config/ConfigNews";
import ConfigStock from "@/components/config/ConfigStock";
import ConfigWeather from "@/components/config/ConfigWeather";
import Navbar from "@/components/NavBar";
import { Button } from "@/components/ui/button";

const configure = () => {
  const saveChanges = () => {
    // save changes to database
    const stock1 = document.getElementById("symbol-1") as HTMLInputElement;
    const stock2 = document.getElementById("symbol-2") as HTMLInputElement;
    const stock3 = document.getElementById("symbol-3") as HTMLInputElement;
    const newsCategory = document.getElementById("news-category")?.innerText;
    const newsCountry = document.getElementById("news-country")?.innerText;
    const holidayCountry =
      document.getElementById("holiday-country")?.innerText;
    const weatherLocation = document.getElementById(
      "weather-location"
    ) as HTMLInputElement;
    console.log(stock1?.value, stock2?.value, stock3?.value);
    console.log(newsCategory, newsCountry);
    console.log(holidayCountry);
    console.log(weatherLocation?.value);
  };
  return (
    <>
      <Navbar />
      <main className="p-8 xl:p-16 border m-8 xl:m-16 grid grid-cols-3 gap-8 grid-rows-3">
        <h1 className="col-span-3 text-6xl text-center">
          Customize Your Dashboard
        </h1>
        <ConfigStock />
        <ConfigNews />
        <ConfigHoliday />
        <ConfigWeather />
        <Button className="col-start-2 w-fit m-auto" onClick={saveChanges}>
          Save Changes
        </Button>
      </main>
    </>
  );
};

export default configure;
