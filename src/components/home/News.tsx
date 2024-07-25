import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const news = () => {
  // data with symbol price and change in price
  let data = [
    { title: "title", description: "description", url: "url" },
    { title: "title", description: "description", url: "url" },
    { title: "title", description: "description", url: "url" },
    { title: "title", description: "description", url: "url" },
  ];
  return (
    <>
      <section className="col-span-2 row-span-5">
        <Card className="h-full flex flex-col">
          <CardHeader>
            <CardTitle>News</CardTitle>
          </CardHeader>
          <CardContent className="h-full overflow-auto gap-4">
            {data.map((news, index) => (
              <Link href={news.url} key={index}>
                <Card className="border-x-0">
                  <CardHeader>
                    <CardTitle>{news.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{news.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default news;
