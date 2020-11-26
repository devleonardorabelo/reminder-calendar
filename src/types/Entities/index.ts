export interface TDateFormat {
  day: number;
  month: number;
  year: number;
  dayOfWeek: number;
}
export interface TReminder {
  id: number;
  title: string;
  color: string;
  city: string;
  date: TDateFormat;
  hour: string;
}
export interface THourForecast {
  time: string;
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
}
export interface TForecast {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  hour: THourForecast[];
}
export interface TWeather {
  region: string;
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  forecast?: {
    forecastday: TForecast[];
  };
}
