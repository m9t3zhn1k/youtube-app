import { Component, Input } from '@angular/core';
import { ICardStatistics } from '../../models/card-statistics.model';
import { IVideoDataSnippet } from '../../models/search-results.model';
import { GettingDetailsService } from '../../services/getting-details.service';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-results-item.component.html',
  styleUrls: ['./search-results-item.component.scss'],
})
export class SearchResultItemComponent {
  @Input() statistics: ICardStatistics;

  @Input() snippet: IVideoDataSnippet;

  @Input() id: string;

  constructor(private readonly gettingDetailsService: GettingDetailsService) {}

  setData(): void {
    this.gettingDetailsService.id = this.id;
  }
}
