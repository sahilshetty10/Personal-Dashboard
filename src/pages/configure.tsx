import ConfigHoliday from "@/components/config/ConfigHoliday";
import ConfigNews from "@/components/config/ConfigNews";
import ConfigStock from "@/components/config/ConfigStock";
import ConfigWeather from "@/components/config/ConfigWeather";
import Navbar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { getIronSession } from "iron-session";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session: any = await getIronSession(context.req, context.res, {
    password: process.env.SESSION_SECRET as string,
    cookieName: "yourappname_session",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  });

  const user = session.user;

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user,
    },
  };
};

const Configure = ({ user }: any) => {
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    } else {
      // Load initial preferences if needed
      document
        .getElementById("symbol-1")
        ?.setAttribute("value", user.preferences.stock1);
      document
        .getElementById("symbol-2")
        ?.setAttribute("value", user.preferences.stock2);
      document
        .getElementById("symbol-3")
        ?.setAttribute("value", user.preferences.stock3);
      document
        .getElementById("news-category")
        ?.setAttribute("value", user.preferences.newsCategory);
      document
        .getElementById("news-country")
        ?.setAttribute("value", user.preferences.newsCountry);
      document
        .getElementById("holiday-country")
        ?.setAttribute("value", user.preferences.holidayCountry);
      document
        .getElementById("weather-location")
        ?.setAttribute("value", user.preferences.weatherLocation);
    }
  }, [user]);

  const saveChanges = async () => {
    const stock1 = (document.getElementById("symbol-1") as HTMLInputElement)
      ?.value;
    const stock2 = (document.getElementById("symbol-2") as HTMLInputElement)
      ?.value;
    const stock3 = (document.getElementById("symbol-3") as HTMLInputElement)
      ?.value;
    const newsCategory = document.getElementById("news-category")?.innerText;
    const newsCountry = document.getElementById("news-country")?.innerText;
    const holidayCountry =
      document.getElementById("holiday-country")?.innerText;
    const weatherLocation = (
      document.getElementById("weather-location") as HTMLInputElement
    )?.value;

    const updatedPreferences = {
      stock1,
      stock2,
      stock3,
      newsCategory,
      newsCountry,
      holidayCountry,
      weatherLocation,
    };

    try {
      // Refresh the session with the updated preferences
      const updatedSession = await fetch("/api/refresh-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ preferences: updatedPreferences }),
      });
      if (updatedSession.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error("Error saving preferences:", error);
    }
  };

  return (
    <>
      <Navbar name={user.name} profileImage={user.profileImage} />
      <main className="px-8 xl:px-16 border m-8 xl:m-16 grid xl:grid-cols-3 gap-8 xl:grid-rows-3 bg-background py-8">
        <h1 className="bg-background col-span-3 text-6xl flex justify-center items-center">
          Customize Your Dashboard
        </h1>
        <ConfigStock />
        <ConfigNews />
        <ConfigHoliday />
        <ConfigWeather />
        <Button className="col-start-2 w-fit m-auto" onClick={saveChanges}>
          Save Changes
        </Button>
      </main>
    </>
  );
};

export default Configure;
