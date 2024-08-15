import Navbar from "@/components/NavBar";
import Stock from "@/components/home/Stock";
import News from "@/components/home/News";
import ChatBox from "@/components/home/ChatBox";
import Weather from "@/components/home/Weather";
import Holiday from "@/components/home/Holiday";
import { useEffect, useState } from "react";

const data = {
  stockData: {
    bitcoin: {
      usd: 64884.27664369342,
      usd_24h_change: -2.295720021193376,
    },
    ethereum: {
      usd: 3157.8485936641414,
      usd_24h_change: -7.702108626594124,
    },
    ripple: {
      usd: 0.6099862021764754,
      usd_24h_change: -1.6282398449115967,
    },
  },
  newsData: {
    status: "ok",
    totalResults: 70,
    articles: [
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: "Reuters",
        title:
          "Meta removes 63,000 Instagram accounts in Nigeria over 'sextortion' scams - Reuters",
        description: null,
        url: "https://news.google.com/rss/articles/CBMirwFBVV95cUxPTDd3blFOME1JbDNKaTNWMzBONTRTV2ZPNTB2X3FmZ1luQkxsU05UWkk2aEZKWlgyMmVkcDhETGU2NG1yUExKLUtWaWZUWGpNaGFCaUhJVENQYWRvU0ppQmI2TEtod2dPaUNvUVVUMWh0SFlfc1VvNjZnWWFkMG43eFZBWVNyRl9mX0NwRmYwaHNwcGtSV0VHRkpaeHNrNDlDQ0psTXdCM1dERnlKMmln?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-24T15:53:00Z",
        content: null,
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: "CBC News",
        title:
          "Bank of Canada cuts key interest rate again, more cuts 'reasonable' if inflation keeps easing - CBC News",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiekFVX3lxTE9oUXVTSk9mS3JiZ1pGekxXZEFzSTZoOVYxVzlBU19RbHZmUWMzWEx6aE05YXhxNHhHbDFaWTdNZDRyQndGMXpYMnFOdGgyTDQ4NlFZOEwtNG9pZ3YtQjNYa01GbnJSbVhDeXdTVS1sRVpFVGJFMGdOcHNR0gFHQVVfeXFMTWsxVFU2S09wNTB0aW02ZmUyTGh2TXJ0MDhqM3dpQVFadjRldlRiR0ltS18wU296dmlYRmljN080R1FQSlN3SVE?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-24T15:22:41Z",
        content: null,
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: "CityNews Toronto",
        title:
          "‘Check your tickets’: OLG says recent $70 million prize up for grabs - CityNews Toronto",
        description: null,
        url: "https://news.google.com/rss/articles/CBMigAFBVV95cUxPYlJUbXdRTXpnMGxld0hiYXl5OVhmWDJ4bDZSOU84a205TW9SOWdlRG5qTUZFZkQ0ZXluQm43aXBXb0I0b3VwUDdsNm5mYWpLcnE5RnVxb1ZQRkJaeTFMLWRza0NLdF9FTmtTdlVnc1hnT1RXWXdhMUtibEFHZ3ZLUA?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-24T14:18:00Z",
        content: null,
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: "Daily Hive",
        title:
          "Canadian couple shares cost of living differences after moving to Scotland - Daily Hive",
        description: null,
        url: "https://news.google.com/rss/articles/CBMidEFVX3lxTE1PcEZNY3I5UDdpdmxERHdmcEVLS0M4bUZnZGVqcGdGRUpPbkpJOUdDWUZWRkgyalp0cFJqeUh2dUpaZ0lOd2Ryc29TaDZoajR6Y2x1LXJOYjFvclpHbU9oc0xvVWhIQzJTdjRyT3VUUV9EX2Et?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-24T14:15:00Z",
        content: null,
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: "Yahoo Finance",
        title:
          "Why betting on the Trump trade is a real mistake - Yahoo Finance",
        description: null,
        url: "https://news.google.com/rss/articles/CBMimgFBVV95cUxPaEhLdVlUQmJRNjhLUlptMWdQbndtWUJwbnNka2dBQzVpNlRCcGF4Z0NaRDVvaC1XbG5aQ042XzlTOFc1cUtoeHNUWnBNaWdjNkNzOUF4V0pkNmNiWDJlLXB4aUlpWTdfT3VpYlNEMFNGVjhpQ0NFNlFCU3hIaUNIVWhXLTlYbXpIMFlubWhLMVFrSFJEUkZWRXhR?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-24T14:00:29Z",
        content: null,
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: "Global News Toronto",
        title:
          "Thompson Okanagan residents moving away to other provinces - Global News Toronto",
        description: null,
        url: "https://news.google.com/rss/articles/CBMilAFBVV95cUxOQXU4b05fbFhwYlI5a2YwcDcxNGlVWjI5U0hvdmtPMVZtbjhRTk5kajV0WFZ1WXlYSFBPQ1VQb3VRblZkR0tEUDhodGl6MnMwZ1d4d1p2SVZxYnZNSHZ0Tk1MTzBZN2hKWl9BdWdUOS0xSmNfN0tDR1lZRlRLMENjaXVfWm9VZ2lBNmlJVEo5MFpmY2hZ?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-24T13:53:12Z",
        content: null,
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: "Barron's",
        title:
          "Alphabet Stock Drops. Capital Spending Surprises Wall Street. - Barron's",
        description: null,
        url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxPaGE2V2ZrTjEzaUlmcS1pUWY3OWhIRGZTMzF6bEhUY2NmZXVKblJzMkphcmRHcXJGRjRxSE5ZeThNaVctVmtMREF0R3FUcmhDRW1BZzVVY2V3Tk1YTmJEMVVEYzJ1ckR4WXZMVFU2VFhPdnlmQ2dfTTFRMG9aS2dSQ1ZmeWPSAYoBQVVfeXFMTjJRb2dYa3RnU0xMNFpFVzVhRjFTUHRDQTNpeEdMZTdWLVhUb2hRaGJJSkt6d3RXcXlnSEZzclZDM2hkcC1WX0QxX3pvbjR5MVNRa1hhR0J5VVhtdDZWSlhIV1NOaG50ZXFtNmV3RWxyOXhSSEhnRElJdFNyc19OU1F4QnRFalRFWmdn?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-24T13:49:00Z",
        content: null,
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: "Global News",
        title:
          "Loblaw facing probe over claims customers can’t delete PC Optimum accounts - Global News",
        description: null,
        url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxOekxPRlVQNk1senh4VWdIOUEyR3lQNC1mQTVfZG5seGNwbjlzYXgzaDh1RTNHa0YwaWlCUzJ5UUJhXzZqQnBRbDI3eXptUkR4X2lQSmJxcTFDSnYzaDRuNC14THZVakk5S2QwQ1NfdGI5cWtycjVFcjZFaTNLVVpJX1lHaXQ?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-24T12:22:04Z",
        content: null,
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: "Toronto Star",
        title:
          "Big booze companies suing LCBO over 'unfair' pricing policies - Toronto Star",
        description: null,
        url: "https://news.google.com/rss/articles/CBMi2gFBVV95cUxQQ2VYSVhyaGpicG5KTEhfYlVfeURjWUtlMG1yMmFHS2tHdVlYeTRodmc1NUNLZlpHcklwbzV3XzU5VzFQcU5aQklKUVVYMlI3cHo1NnhtZVVGZVdWVUdseUtVY0FKSDhSanpET3lTOGdibkFnSDN6RklMdnJya2diVHBYOEdlN1JjclBQeXJrMWxrVWx1Z0FiRk10MUY0X0kxSmlrUmpya21aYmFaOUhWb3ZtYVZkWDlIc245b1lSbTRrc1c2bUs2WE1ZWTFHRUlNUWQ0YWdHdnZ1UQ?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-24T12:15:00Z",
        content: null,
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: "Financial Post",
        title:
          "Posthaste: How moving populations are 'rapidly reshaping' Canada’s luxury real estate - Financial Post",
        description: null,
        url: "https://news.google.com/rss/articles/CBMihAFBVV95cUxNbjFqa3M2cGt6TTRXQlpSenZjY3VKSGFudC12VHRoNmlXVVR3NkVxaVY1WThqOVBQQWlhOXdnUUdPVUhrWW9CTlVyeUNKM1BHMEhPZTZPZW16OHZyTnhZT2xMcnRydmdmVFVDQ1hXV0pRMWFqbE42a0lRdFRydmpabjFqVFc?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-24T12:07:34Z",
        content: null,
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: "Driving ",
        title:
          "Canada's 10 worst-selling vehicles in 2024's first-half - Driving ",
        description: null,
        url: "https://news.google.com/rss/articles/CBMimgFBVV95cUxPUkh3MmFRdDdNS0h6b1Q2ZWFtdXh1V1FNM2lZeVhBaExJU1lMYnhSaVZ6eGNmVDFxTnVvSnZubjVSOFZTdlF2VHRTcnFxNHRlZEFlUnJXU2pWdmVnOFF1MGRUeE1keC1QbjlMazVjMVdPcVNkVkFzeENQOHl2Y09aaVdtS2lQZ2dHY3E3ODVOZFh4X1JobGpRaWZR?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-24T11:04:18Z",
        content: null,
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: "Fortune",
        title:
          "A quarter of bosses admit their return-to-office mandates were meant to make staff quit - Fortune",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOMlY4aGxMTVVjN2Y2blJodmtCbUlEX1pscUJnc3FtXzh1dXhPbHdsN0FMRzZhQjh1OWZkX0d4b3JaRGxKRVZBS0VkTUdxVGtvWVZjQXpnVXAtZmgyZzR6d3FkdUZXR0Fqd1kzYTM5cmhVS19QNkJ6aUV6V1d5dDlaejhWc2sxYkFF?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-24T10:41:00Z",
        content: null,
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: "Deadline",
        title:
          "Vivendi’s Controversial French C8 Channel Loses TNT Frequency In Bombshell TV Authority Decision - Deadline",
        description: null,
        url: "https://news.google.com/rss/articles/CBMizAFBVV95cUxNdkFxd1hoQkZUUS0xblg1X3JMOUQ1b2ZkamRyN0NMSFM4NEhrdXgtOFg0bFYyS0FFRGlJTjRGX1ZxWERfVzNhTWIxN1RRNTR0N2diOTlyUW9IcHZFLUlPY3ZtXzhKNGpZcHZuTHk4RzJNeFZHRkpCLUpqbm84NUphUVdVOXZtdFRFc1NDTjI3T3gwVFh6WUlFQ0RoOGNaNENySjdKejF1SlJvMnlZd3oxZ0xMSGRDVzZoV293WlBOUlhNM25BUDhKb1NGc1E?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-24T10:32:00Z",
        content: null,
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: "Toronto Star",
        title:
          "Sales of GTA new homes were at a record low in the first half of 2023. This year, they're more than 50 per cent lower - Toronto Star",
        description: null,
        url: "https://news.google.com/rss/articles/CBMi5AFBVV95cUxPcDRmZUNTc0FfYWhuWlc1SXRUZjZHUUh0d2NuSXNxdXF1QVZLaUpzWUM0Y01KUDl1ZHYxTFU4VU05RXJtNUVSeE5DdFNyaGY4Wm9QcFdKM0toYTVncEdVcjdkSTBuR3VHdDBXYjNLdk9mV0h3bFF2Zi1Yb1RNd19OalNwUHhjZXBPUjdBNE5Od3lfcVFfaFRPV3JQbDNIWVVJN3lnZUpnczE4ckpIcWNjREktLXlyMUtsMjZSNFFPNVhxbHlIYlJrSmxXRjBaZUtscmF2V3dlNzlVaEZWakk4S1J3ZjfSAeoBQVVfeXFMUHBVbkRuQU5ORExrWHp4cDVNaHVSN1lQMkg3X01LRFIzbjBlb1JoSlo0TTdrenpXeW5VNzZGaXhoMFVYYkR2Rkhuc2NoOXROZFJ2RllLV2xMR3F3ckhYcHFteW5TVWxMaDg4ZkdpTEx4MXlzRnN3V09UNTRseTdBdHFsejJHMzh6UElrMnoxcDJKTll0QlhkcVFtQ0l0Z0NsbUtOWEQyb3haQnc5SjMtQng4VDIxb2ZoWjRvcF9oczYzRWJYM051SFJQWF9fT1NyckhxZERfSHZ0TnhueC1UUXd1WGc2Y2Vyd2ln?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-24T10:00:00Z",
        content: null,
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: "CityNews Vancouver",
        title:
          "B.C. says team chosen to design Vancouver's Massey Tunnel replacement - CityNews Vancouver",
        description: null,
        url: "https://news.google.com/rss/articles/CBMiiwFBVV95cUxQa1FtQ09nWE15Z09BaWdMcEJyMGVRSjFCVm1zRXdQVktYamUxYXpvVy1LbXVYQjhhclJ6eFdHcmhYazFyS01GOF9RWmI0Vl9zRDM2SWU3dW5xcXdsOXpUZFpyVzdoRENmcGRHS3lxRmpXNkQ4Q2s3UlFSRXhiSU9hVk81d3JCV3lpUWM0?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-24T05:37:46Z",
        content: null,
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: "CTV News Montreal",
        title:
          "Listeriosis: class action filed against Danone and Wal-Mart Canada - CTV News Montreal",
        description: null,
        url: "https://news.google.com/rss/articles/CBMipgFBVV95cUxOUDM1Nm5wRnIwWk5TU1NYNkR6dXR2TWZ3ZXJ1RS1ldUVXRW1yVmIyNmhnQXVQTHFGZzF0dFhtaE1SNkg0WGZ0d19aMDROQXJHSzlUT3hFLXJXcTJndDh0OHZvSWhDT1RhZGZGYXk0Q0ZTRFZnUkllS1l0S29SLWRWR25Ud3Y1cWZTZEdtdldwSXJueEJTdWIwcTVTSkJtSmN5eEtiOFFB?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-24T01:55:47Z",
        content: null,
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: "Barchart",
        title:
          "Tesla's 2Q profit falls 45% to $1.48 billion as sales drop despite price cuts and low-interest loans - Barchart",
        description: null,
        url: "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQUkdJNWpVWUoweGRNOGY0OUhsZkE1VkFoOGhwN2QyeXNRb0tXMEljMFhYUjNtTTh5enpNSkdTOUNLSGw5SGJlNktwR1BUMHp0a081UTFEMmEwZVUxT3NhckRQOHdObG5uZjE0QzhWX3ZWNmNMbm5KY1dxTTI3aTRDeGJFUzhOVjJab1ZrSVFrV3V3dnpIX0M1XzNDSDBNWGZWdUxfYl9YVGdwbHhzR1NwVl9KYk5Fd1BTOV9GRXdaSzFhaGYwUGFUV0tBd3hid3F4c05TQUQ5ZTM?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-23T23:53:00Z",
        content: null,
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: "ForexLive",
        title:
          "Musk: “I am not donating $45 million a month to Trump.” - ForexLive",
        description: null,
        url: "https://news.google.com/rss/articles/CBMilgFBVV95cUxQVXUtX1lpaHFGMkVSRjdkR1hnbThQbU9uV1d1TnFmQURhTm5LQ2YwNEgtSFM3aTFhWFNyRXJsRlQ2QmdlaWJqNk5Yb0tfelcwVjZYVl9GN2hMTjZZemMxUXFXbDNNWk1vRkFoWHc2aXlNMDdwX2NXbzFvQmFaYWtDSDM4S2JZR1l3dFNncTJ0dHZhYmZSd1HSAZsBQVVfeXFMT0x0RzJQek0xLUUwVU0yeW1zTkp5aHl6ZHM4Yks4NW83TVZEU2tkTFN5Rm5sU2YzTk14N09LRy1NellQUVA0VFpTTTRwajBncFZrcHRCVS1ueWZmY3hpeURmY1FadGZHdTg1MjJWbjR0MlFMd2l4Z1RmYTM5bC11MnF5eU5MdG83aGctUVZZS0p5NHVUOFRRYmZqS3c?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-23T23:53:00Z",
        content: null,
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: "CTV News",
        title:
          "King Charles installs solar panels at Windsor Castle - CTV News",
        description: null,
        url: "https://news.google.com/rss/articles/CBMilgFBVV95cUxQaFY2ZlhaZTltOU9rbFl4MnpJa0FGb2FaNjRnMUpyUXNhWS1TLUdRcDc5U29mckVDc0RZQW5Qa3g1bjZOd0VTdlBRWGRMSWM5TlA0M05NdmJXRHJSeWpycHhjaEd1Q0gzR1I1Z2czdzFSdmw0Q1RWaXFKTE5pZTJjbmJDLUtvNUZ6OXJuWEZPclJNa2FGRkE?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-23T23:40:40Z",
        content: null,
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: "Daily Hive",
        title:
          "BC-based Clio valued at $4.1 billion after smash funding round | Venture - Daily Hive",
        description: null,
        url: "https://news.google.com/rss/articles/CBMif0FVX3lxTE5UTFVDd1FMZFItejB0em9IVzRNU0wzQ1ZTMlBPT1RtMGlYT2p6cXN3WjU5V0otN3pqZnpieHZtYVpQeGFhQVQ2MFlyQjZBTi1YV0FlcktSVlZlTm9KZlFpYUdrYjNoWTg2eXJpYUxmZEZYSGV5amtUdmpqcUtXWk0?oc=5",
        urlToImage: null,
        publishedAt: "2024-07-23T23:17:00Z",
        content: null,
      },
    ],
  },
  holidayData: [
    {
      date: "2024-08-05",
      localName: "Civic Holiday",
      name: "Civic Holiday",
      countryCode: "CA",
      fixed: false,
      global: false,
      counties: ["CA-MB", "CA-NL", "CA-NT", "CA-NU", "CA-ON"],
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2024-08-05",
      localName: "British Columbia Day",
      name: "British Columbia Day",
      countryCode: "CA",
      fixed: false,
      global: false,
      counties: ["CA-BC"],
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2024-08-05",
      localName: "Heritage Day",
      name: "Heritage Day",
      countryCode: "CA",
      fixed: false,
      global: false,
      counties: ["CA-AB", "CA-YT"],
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2024-08-05",
      localName: "New Brunswick Day",
      name: "New Brunswick Day",
      countryCode: "CA",
      fixed: false,
      global: false,
      counties: ["CA-NB"],
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2024-08-05",
      localName: "Natal Day",
      name: "Natal Day",
      countryCode: "CA",
      fixed: false,
      global: false,
      counties: ["CA-NS"],
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2024-08-05",
      localName: "Saskatchewan Day",
      name: "Saskatchewan Day",
      countryCode: "CA",
      fixed: false,
      global: false,
      counties: ["CA-SK"],
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2024-08-19",
      localName: "Gold Cup Parade Day",
      name: "Gold Cup Parade Day",
      countryCode: "CA",
      fixed: false,
      global: false,
      counties: ["CA-PE"],
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2024-08-19",
      localName: "Discovery Day",
      name: "Discovery Day",
      countryCode: "CA",
      fixed: false,
      global: false,
      counties: ["CA-YT"],
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2024-09-02",
      localName: "Labour Day",
      name: "Labour Day",
      countryCode: "CA",
      fixed: false,
      global: true,
      counties: null,
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2024-09-30",
      localName: "National Day for Truth and Reconciliation",
      name: "National Day for Truth and Reconciliation",
      countryCode: "CA",
      fixed: false,
      global: true,
      counties: null,
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2024-10-14",
      localName: "Thanksgiving",
      name: "Thanksgiving",
      countryCode: "CA",
      fixed: false,
      global: true,
      counties: null,
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2024-11-11",
      localName: "Armistice Day",
      name: "Armistice Day",
      countryCode: "CA",
      fixed: false,
      global: false,
      counties: ["CA-NL"],
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2024-11-11",
      localName: "Remembrance Day",
      name: "Remembrance Day",
      countryCode: "CA",
      fixed: false,
      global: false,
      counties: [
        "CA-AB",
        "CA-BC",
        "CA-NB",
        "CA-NT",
        "CA-NS",
        "CA-NU",
        "CA-PE",
        "CA-SK",
        "CA-YT",
      ],
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2024-12-25",
      localName: "Christmas Day",
      name: "Christmas Day",
      countryCode: "CA",
      fixed: false,
      global: true,
      counties: null,
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2024-12-26",
      localName: "Boxing Day",
      name: "St. Stephen's Day",
      countryCode: "CA",
      fixed: false,
      global: false,
      counties: ["CA-AB", "CA-NB", "CA-NS", "CA-ON", "CA-PE"],
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2025-01-01",
      localName: "New Year's Day",
      name: "New Year's Day",
      countryCode: "CA",
      fixed: false,
      global: true,
      counties: null,
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2025-02-17",
      localName: "Louis Riel Day",
      name: "Louis Riel Day",
      countryCode: "CA",
      fixed: false,
      global: false,
      counties: ["CA-MB"],
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2025-02-17",
      localName: "Islander Day",
      name: "Islander Day",
      countryCode: "CA",
      fixed: false,
      global: false,
      counties: ["CA-PE"],
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2025-02-17",
      localName: "Heritage Day",
      name: "Heritage Day",
      countryCode: "CA",
      fixed: false,
      global: false,
      counties: ["CA-NS"],
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2025-02-17",
      localName: "Family Day",
      name: "Family Day",
      countryCode: "CA",
      fixed: false,
      global: false,
      counties: ["CA-AB", "CA-BC", "CA-NB", "CA-ON", "CA-SK"],
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2025-03-17",
      localName: "Saint Patrick's Day",
      name: "Saint Patrick's Day",
      countryCode: "CA",
      fixed: false,
      global: false,
      counties: ["CA-NL"],
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2025-04-18",
      localName: "Good Friday",
      name: "Good Friday",
      countryCode: "CA",
      fixed: false,
      global: true,
      counties: null,
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2025-04-21",
      localName: "Easter Monday",
      name: "Easter Monday",
      countryCode: "CA",
      fixed: false,
      global: false,
      counties: ["CA-AB", "CA-PE"],
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2025-04-23",
      localName: "Saint George's Day",
      name: "Saint George's Day",
      countryCode: "CA",
      fixed: false,
      global: false,
      counties: ["CA-NL"],
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2025-05-19",
      localName: "National Patriots' Day",
      name: "National Patriots' Day",
      countryCode: "CA",
      fixed: false,
      global: false,
      counties: ["CA-QC"],
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2025-05-19",
      localName: "Victoria Day",
      name: "Victoria Day",
      countryCode: "CA",
      fixed: false,
      global: true,
      counties: null,
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2025-06-21",
      localName: "National Aboriginal Day",
      name: "National Aboriginal Day",
      countryCode: "CA",
      fixed: false,
      global: false,
      counties: ["CA-NT"],
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2025-06-24",
      localName: "Discovery Day",
      name: "Discovery Day",
      countryCode: "CA",
      fixed: false,
      global: false,
      counties: ["CA-NL"],
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2025-06-24",
      localName: "Fête nationale du Québec",
      name: "National Holiday",
      countryCode: "CA",
      fixed: false,
      global: false,
      counties: ["CA-QC"],
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2025-07-01",
      localName: "Canada Day",
      name: "Canada Day",
      countryCode: "CA",
      fixed: false,
      global: true,
      counties: null,
      launchYear: null,
      types: ["Public"],
    },
    {
      date: "2025-07-12",
      localName: "Orangemen's Day",
      name: "Orangemen's Day",
      countryCode: "CA",
      fixed: false,
      global: false,
      counties: ["CA-NL"],
      launchYear: null,
      types: ["Public"],
    },
  ],
  weatherData: {
    location: {
      name: "Willowdale",
      region: "Ontario",
      country: "Canada",
      lat: 43.78,
      lon: -79.3,
      tz_id: "America/Toronto",
      localtime_epoch: 1721926541,
      localtime: "2024-07-25 12:55",
    },
    current: {
      last_updated_epoch: 1721925900,
      last_updated: "2024-07-25 12:45",
      temp_c: 22.6,
      temp_f: 72.7,
      is_day: 1,
      condition: {
        text: "Sunny",
        icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
        code: 1000,
      },
      wind_mph: 8.9,
      wind_kph: 14.4,
      wind_degree: 321,
      wind_dir: "NW",
      pressure_mb: 1020,
      pressure_in: 30.12,
      precip_mm: 0,
      precip_in: 0,
      humidity: 47,
      cloud: 19,
      feelslike_c: 23.9,
      feelslike_f: 75.1,
      windchill_c: 22.6,
      windchill_f: 72.7,
      heatindex_c: 23.9,
      heatindex_f: 75.1,
      dewpoint_c: 10.8,
      dewpoint_f: 51.4,
      vis_km: 10,
      vis_miles: 6,
      uv: 6,
      gust_mph: 10.3,
      gust_kph: 16.6,
    },
  },
};

const index = () => {
  const [preferences, setPreferences] = useState(data);
  const getPreferences = async (username: string) => {
    const response = await fetch(`http://localhost:8080/?userId=${username}`);
    const data = await response.json();
    setPreferences(data);
  };

  useEffect(() => {
    const username = localStorage.getItem("userId")!;
    if (username) {
      getPreferences(username);
    } else {
      window.location.href = "/login";
    }
  }, []);

  return (
    <>
      <div className="h-screen flex flex-col">
        <Navbar />
        <main className="px-8 xl:px-16 flex-1 overflow-auto pt-4 pb-20">
          <Stock data={preferences.stockData} />
          <section className="grid grid-cols-4 grid-rows-5 h-full gap-8 overflow-hidden py-8">
            <News data={preferences.newsData} />
            <ChatBox />
            <Holiday data={preferences.holidayData} />
            <Weather data={preferences.weatherData} />
          </section>
        </main>
      </div>
    </>
  );
};

export default index;
