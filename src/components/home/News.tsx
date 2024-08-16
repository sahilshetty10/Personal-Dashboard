import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const news = ({ data }: any) => {
  const articles = data.articles;
  return (
    <section className="col-span-2 row-span-5 h-full">
      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle>News</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto gap-4">
          {articles.map((article: any, index: any) => (
            <Link href={article.url} key={index}>
              <Card className="border-x-0 mb-4">
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{article.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default news;
