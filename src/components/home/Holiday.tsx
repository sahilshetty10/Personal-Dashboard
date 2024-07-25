import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Holiday = () => {
  return (
    <section className="row-span-2 col-span-1 h-full">
      <Card className="flex flex-col justify-center items-center h-full">
        <CardHeader>
          <CardTitle>Upcoming Holidays</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-8 items-center">
          <CardDescription className="text-6xl">Dec 25</CardDescription>
          <CardDescription className="text-xl">Christmas</CardDescription>
        </CardContent>
      </Card>
    </section>
  );
};

export default Holiday;
