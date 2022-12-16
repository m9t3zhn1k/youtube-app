import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { YOUTUBE_API_URL, YOUTUBE_API_KEY } from '../../../constants/сonstants';
import { IVideoData } from 'src/app/youtube/models/search-results.model';

@Injectable()
export class SearchInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<null>, next: HttpHandler): Observable<HttpEvent<IVideoData[]>> {
    const httpRequest: HttpRequest<null> = req.clone({ url: YOUTUBE_API_URL + req.url + `&key=${YOUTUBE_API_KEY}` });
    return next.handle(httpRequest);
  }
}
