import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const stock = ({ data }: any) => {
  return (
    <>
      <section
        className=" col-span-1 row-span-1 grid xl:grid-cols-3 gap-4"
        id="stocks-container"
      >
        {Object.keys(data).map((key, index) => (
          <Card className="flex items-center justify-between" key={index}>
            <CardHeader>
              <CardTitle>{key}</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-4 items-center h-full px-4 py-0">
              <CardDescription className="text-lg font-bold">
                $ {data[key].usd.toFixed(2)}
              </CardDescription>
              <CardDescription>
                {data[key].usd_24h_change.toFixed(2)}%
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
};

export default stock;
