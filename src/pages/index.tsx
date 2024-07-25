import Navbar from "@/components/NavBar";
import Stock from "@/components/home/Stock";
import News from "@/components/home/News";
import ChatBox from "@/components/home/ChatBox";
import Weather from "@/components/home/Weather";
import Holiday from "@/components/home/Holiday";

const index = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Navbar />
        <main className="p-8 xl:p-16 flex-1">
          <Stock />
          <section className="grid grid-cols-4 grid-rows-5 h-full gap-8 overflow-hidden py-8">
            <News />
            <ChatBox />
            <Holiday />
            <Weather />
          </section>
        </main>
      </div>
    </>
  );
};

export default index;
