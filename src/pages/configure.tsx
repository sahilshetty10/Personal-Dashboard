import ConfigHoliday from "@/components/config/ConfigHoliday";
import ConfigNews from "@/components/config/ConfigNews";
import ConfigStock from "@/components/config/ConfigStock";
import Navbar from "@/components/NavBar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const configure = () => {
  return (
    <>
      <Navbar />
      <main className="p-8 xl:p-16 border m-8 xl:m-16 grid grid-cols-3 gap-8">
        <ConfigStock />
        <ConfigNews />
        <ConfigHoliday />
      </main>
    </>
  );
};

export default configure;
