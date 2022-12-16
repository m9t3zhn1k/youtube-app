export enum TimeStamp {
  DayTimeStamp = 1000 * 3600 * 24,
  WeekTimeStamp = DayTimeStamp * 7,
  MonthTimeStamp = DayTimeStamp * 30,
  HalfYearTimeStamp = DayTimeStamp * 30 * 6,
}

export enum CardBorderColor {
  LessThanWeekColor = 'blue',
  LessThanMonthColor = 'green',
  LessThanHalfYearColor = 'yellow',
  MoreThanHalftYearColor = 'red',
}

export const URL_REGEXP = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

export const YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/';

export enum YouTubeApiTypes {
  search = 'search',
  videos = 'videos',
}

export const YOUTUBE_API_KEY: string = 'AIzaSyBmYjW6ytdO1OE3H0ctvjhetVOeSBPZEcY';

export const maxSearchResults: number = 10;
