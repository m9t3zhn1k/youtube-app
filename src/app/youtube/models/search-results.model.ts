export interface ISearchResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  regionCode: string;
  nextPageToken: string;
  items: ISearchData[];
}

export interface ISearchData {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: ISearchThumbnails;
}

export interface IVideoResponse {
  kind: string;
  etag: string;
  items: IVideoData[];
}

export interface IVideoData {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: IVideoDataSnippet;
  statistics: ISearchItemDataStatistics;
}

interface IVideoThumbnail {
  url: string;
  width: number;
  height: number;
}

interface ISearchThumbnails {
  default: IVideoThumbnail;
  medium: IVideoThumbnail;
  high: IVideoThumbnail;
}

interface IVideoThumbnails extends ISearchThumbnails {
  standart: IVideoThumbnail;
  maxres: IVideoThumbnail;
}

export interface ISearchItemDataStatistics extends ICardStatistics {
  favoriteCount: string;
}

export type SearchItemDataStatisticsParams =
  | 'viewCount'
  | 'likeCount'
  | 'dislikeCount'
  | 'favoriteCount'
  | 'commentCount';

export interface ISearchDataSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  channelTitle: string;
  thumbnails: IVideoThumbnails;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface IVideoDataSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  channelTitle: string;
  thumbnails: IVideoThumbnails;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}

export interface ICardStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  commentCount: string;
}
