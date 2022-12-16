import { Component, Input } from '@angular/core';
import { ICardStatistics } from '../../models/card-statistics.model';

@Component({
  selector: 'app-card-statistics',
  templateUrl: './card-statistics.component.html',
  styleUrls: ['./card-statistics.component.scss'],
})
export class CardStatisticsComponent {
  @Input() statistics: ICardStatistics = {
    viewCount: 0,
    likeCount: 0,
    dislikeCount: 0,
    commentCount: 0,
  };
}
