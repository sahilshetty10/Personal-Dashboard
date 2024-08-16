// pages/index.tsx
import { GetServerSideProps } from "next";
import { getIronSession } from "iron-session";
import { db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import getData from "@/utils/getData";
import Navbar from "@/components/NavBar";
import ChatBox from "@/components/home/ChatBox";
import Holiday from "@/components/home/Holiday";
import Weather from "@/components/home/Weather";
import News from "@/components/home/News";
import Stock from "@/components/home/Stock";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session: any = await getIronSession(context.req, context.res, {
    password: process.env.SESSION_SECRET as string,
    cookieName: "yourappname_session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  });

  const user = session.user;
  console.log(user);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const userDoc = await getDoc(doc(db, "users", user.uid));
  if (!userDoc.exists()) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const preferences = userDoc.data()?.preferences || {};
  const data: any = await getData(preferences);

  return {
    props: {
      user: {
        name: userDoc.data()?.name,
        profileImage: userDoc.data()?.profileImage,
        stockData: data.stockData,
        newsData: data.newsData,
        holidayData: data.holidayData,
        weatherData: data.weatherData,
      },
    },
  };
};

const Home = ({ user }: any) => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar name={user.name} profileImage={user.profileImage} />
      <main className="px-8 xl:px-16 flex-1 pt-4 pb-20 xl:overflow-auto">
        <Stock data={user.stockData} />
        <section className="grid xl:grid-cols-4 xl:grid-rows-5 xl:h-full gap-8 xl:overflow-hidden py-8">
          <News data={user.newsData} />
          <ChatBox />
          <Holiday data={user.holidayData} />
          <Weather data={user.weatherData} />
        </section>
      </main>
    </div>
  );
};

export default Home;
