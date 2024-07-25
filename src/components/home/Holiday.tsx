import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Holiday = ({ data }: any) => {
  const holiday = data[0];
  const date = new Date(holiday.date);
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  const holidayName = holiday.name;
  return (
    <section className="row-span-2 col-span-1 h-full">
      <Card className="flex flex-col justify-center items-center h-full">
        <CardHeader>
          <CardTitle>Upcoming Holidays</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-8 items-center">
          <CardDescription className="text-6xl">{`${month} ${day}`}</CardDescription>
          <CardDescription className="text-xl">{holidayName}</CardDescription>
        </CardContent>
      </Card>
    </section>
  );
};

export default Holiday;
