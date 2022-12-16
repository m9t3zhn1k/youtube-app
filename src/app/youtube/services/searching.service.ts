import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { YouTubeApiTypes, maxSearchResults } from 'src/constants/сonstants';
import { IVideoData, IVideoResponse, ISearchResponse, ISearchData } from '../models/search-results.model';

@Injectable()
export class SearchingService {
  searchInput$: Observable<string>;

  constructor(private http: HttpClient) {}

  search(searchQuery: string): Observable<IVideoData[]> {
    return this.http
      .get<ISearchResponse>(
        `${YouTubeApiTypes.search}?type=video&part=snippet&maxResults=${maxSearchResults}&q=${searchQuery}`,
      )
      .pipe(
        map((response: ISearchResponse): string[] =>
          response.items.map((item: ISearchData): string => item.id.videoId),
        ),
        switchMap((value: string[]): Observable<IVideoData[]> => this.getVideos(value.join(','))),
      );
  }

  getVideos(videosQuery: string): Observable<IVideoData[]> {
    return this.http.get<IVideoResponse>(`${YouTubeApiTypes.videos}?id=${videosQuery}&part=snippet,statistics`).pipe(
      map((response: IVideoResponse): Omit<IVideoData, 'dislikeCount'>[] => {
        response.items.map((item: Omit<IVideoData, 'dislikeCount'>): IVideoData => {
          item.statistics.dislikeCount = `${Math.floor(Math.random() * +item.statistics.likeCount)}`;
          return item;
        });
        return response.items;
      }),
    );
  }
}
