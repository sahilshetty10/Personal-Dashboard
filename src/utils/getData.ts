import axios from "axios";

interface GetDataProps {
  stock1: string;
  stock2: string;
  stock3: string;
  newsCategory: string;
  newsCountry: string;
  holidayCountry: string;
  weatherLocation: string;
}

const getData = async ({
  stock1,
  stock2,
  stock3,
  newsCategory,
  newsCountry,
  holidayCountry,
  weatherLocation,
}: GetDataProps) => {
  try {
    const stockLink = `https://api.coingecko.com/api/v3/simple/price?ids=${stock1},${stock2},${stock3}&vs_currencies=usd&include_24hr_change=true&precision=full`;
    const stockOptions = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-ekWMSm98EKLKMQXynXgLo5At",
      },
    };
    const newsLink = `https://newsapi.org/v2/top-headlines?country=${newsCountry}&category=${newsCategory}&apiKey=d5b9080f63c44d35aec2792dc160e348`;
    const holidayLink = `https://date.nager.at/api/v3/NextPublicHolidays/${holidayCountry}`;
    const weatherLink = `https://api.weatherapi.com/v1/current.json?key=5c2cd8491d4f4186aea02645241403&q=${weatherLocation}`;

    const stockData = await fetch(stockLink, stockOptions);
    const newsData = await fetch(newsLink);
    const holidayData = await fetch(holidayLink);
    const weatherData = await fetch(weatherLink);
    return {
      stockData: await stockData.json(),
      newsData: await newsData.json(),
      holidayData: await holidayData.json(),
      weatherData: await weatherData.json(),
    };
  } catch (error) {
    console.error("Error getting data");
  }
};

export default getData;
