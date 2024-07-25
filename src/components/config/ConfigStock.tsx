import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ConfigStock = () => {
  const [symbols, setSymbols] = useState([]);

  const fetchStockData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-ekWMSm98EKLKMQXynXgLo5At",
      },
    };

    let response = await fetch(
      "https://api.coingecko.com/api/v3/coins/list",
      options
    );
    let data = await response.json();
    let symbols = data.map((item: any) => item.id);
    setSymbols(symbols);
  };

  useEffect(() => {
    fetchStockData();
  }, []);

  return (
    <>
      <Card className="row-span-2">
        <CardHeader>
          <CardTitle>Stock Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CardDescription className="text-lg">Symbol 1</CardDescription>
          <Input list="symbols" placeholder="Search symbol..." id="symbol-1" />
          <CardDescription className="text-lg">Symbol 2</CardDescription>
          <Input list="symbols" placeholder="Search symbol..." id="symbol-2" />
          <CardDescription className="text-lg">Symbol 3</CardDescription>
          <Input list="symbols" placeholder="Search symbol..." id="symbol-3" />
          <datalist id="symbols">
            {symbols.map((symbol, index) => (
              <option key={index} value={symbol} />
            ))}
          </datalist>
        </CardContent>
      </Card>
    </>
  );
};

export default ConfigStock;
