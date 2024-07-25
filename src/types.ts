export interface Welcome {
    stockData:   StockData;
    newsData:    NewsData;
    holidayData: HolidayDatum[];
    weatherData: WeatherData;
}

export interface HolidayDatum {
    date:        Date;
    localName:   string;
    name:        string;
    countryCode: CountryCode;
    fixed:       boolean;
    global:      boolean;
    counties:    string[] | null;
    launchYear:  null;
    types:       Type[];
}

export enum CountryCode {
    CA = "CA",
}

export enum Type {
    Public = "Public",
}

export interface NewsData {
    status:       string;
    totalResults: number;
    articles:     Article[];
}

export interface Article {
    source:      Source;
    author:      string;
    title:       string;
    description: null;
    url:         string;
    urlToImage:  null;
    publishedAt: Date;
    content:     null;
}

export interface Source {
    id:   ID;
    name: Name;
}

export enum ID {
    GoogleNews = "google-news",
}

export enum Name {
    GoogleNews = "Google News",
}

export interface StockData {
    bitcoin:  { [key: string]: number };
    ethereum: { [key: string]: number };
    ripple:   { [key: string]: number };
}

export interface WeatherData {
    location: Location;
    current:  Current;
}

export interface Current {
    last_updated_epoch: number;
    last_updated:       string;
    temp_c:             number;
    temp_f:             number;
    is_day:             number;
    condition:          Condition;
    wind_mph:           number;
    wind_kph:           number;
    wind_degree:        number;
    wind_dir:           string;
    pressure_mb:        number;
    pressure_in:        number;
    precip_mm:          number;
    precip_in:          number;
    humidity:           number;
    cloud:              number;
    feelslike_c:        number;
    feelslike_f:        number;
    windchill_c:        number;
    windchill_f:        number;
    heatindex_c:        number;
    heatindex_f:        number;
    dewpoint_c:         number;
    dewpoint_f:         number;
    vis_km:             number;
    vis_miles:          number;
    uv:                 number;
    gust_mph:           number;
    gust_kph:           number;
}

export interface Condition {
    text: string;
    icon: string;
    code: number;
}

export interface Location {
    name:            string;
    region:          string;
    country:         string;
    lat:             number;
    lon:             number;
    tz_id:           string;
    localtime_epoch: number;
    localtime:       string;
}