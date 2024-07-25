import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const stock = () => {
  // data with symbol price and change in price
  let data = [
    { symbol: "AAPL", price: 150.0, change: 0.0 },
    { symbol: "TSLA", price: 700.0, change: 0.0 },
    { symbol: "GOOGL", price: 2000.0, change: 0.0 },
  ];
  return (
    <>
      <section className=" col-span-1 row-span-1 grid xl:grid-cols-3 gap-4">
        {data.map((stock, index) => (
          <Card className="flex items-center justify-between" key={index}>
            <CardHeader>
              <CardTitle>{stock.symbol}</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-4 items-center h-full px-4 py-0">
              <p>{stock.price}</p>
              <p>{stock.change}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
};

export default stock;
