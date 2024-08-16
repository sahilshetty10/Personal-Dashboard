import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ConfigNews = () => {
  const newsCategories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  const countryCodes = [
    "ae",
    "ar",
    "at",
    "au",
    "be",
    "bg",
    "br",
    "ca",
    "ch",
    "cn",
    "co",
    "cu",
    "cz",
    "de",
    "eg",
    "fr",
    "gb",
    "gr",
    "hk",
    "hu",
    "id",
    "ie",
    "il",
    "in",
    "it",
    "jp",
    "kr",
    "lt",
    "lv",
    "ma",
    "mx",
    "my",
    "ng",
    "nl",
    "no",
    "nz",
    "ph",
    "pl",
    "pt",
    "ro",
    "rs",
    "ru",
    "sa",
    "se",
    "sg",
    "si",
    "sk",
    "th",
    "tr",
    "tw",
    "ua",
    "us",
    "ve",
    "za",
  ];
  return (
    <>
      <Card className="xl:row-span-2 h-fit">
        <CardHeader>
          <CardTitle>News Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CardDescription className="text-lg">Category</CardDescription>
          <Select>
            <SelectTrigger className="capitalize">
              <SelectValue
                placeholder="Business"
                id="news-category"
              ></SelectValue>
            </SelectTrigger>
            <SelectContent>
              {newsCategories.map((category, index) => (
                <SelectItem key={index} value={category} className="capitalize">
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <CardDescription className="text-lg">Country</CardDescription>
          <Select>
            <SelectTrigger className="uppercase">
              <SelectValue placeholder="ca" id="news-country"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              {countryCodes.map((country, index) => (
                <SelectItem key={index} value={country} className="uppercase">
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

export default ConfigNews;
