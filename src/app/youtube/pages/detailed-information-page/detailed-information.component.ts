import { Component, OnInit, HostBinding } from '@angular/core';
import { IVideoData } from '../../models/search-results.model';
import { GettingDetailsService } from '../../services/getting-details.service';
import { SearchingService } from '../../services/searching.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss'],
})
export class DetailedInformationPageComponent implements OnInit {
  @HostBinding('class') class = 'page';

  id: string;

  videos: Observable<IVideoData[]>;

  constructor(
    private readonly gettingDetailsService: GettingDetailsService,
    private readonly searchingService: SearchingService,
  ) {}

  ngOnInit(): void {
    this.id = this.gettingDetailsService.id;
    this.videos = this.searchingService.getVideos(this.id).pipe(take(1));
  }
}
