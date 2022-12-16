import { Component, OnInit, HostBinding } from '@angular/core';
import { SortingCardsService } from '../../services/sorting-cards.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainPageComponent implements OnInit {
  @HostBinding('class') class = 'page';

  isSortingPanelOpened: BehaviorSubject<boolean>;

  constructor(public readonly sortingCardsService: SortingCardsService) {}

  ngOnInit(): void {
    this.isSortingPanelOpened = this.sortingCardsService.isSortingPanelOpened;
  }
}
