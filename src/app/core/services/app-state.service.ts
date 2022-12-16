import { Injectable } from '@angular/core';
import { SortingCardsService } from '../../youtube/services/sorting-cards.service';
import { FilteringCardsService } from '../../youtube/services/filtering-cards.service';
import { ISortingSettings } from '../../youtube/models/sorting-settings.model';

@Injectable()
export class AppStateService {
  sortingParam: ISortingSettings;

  filterParam: string;

  constructor(
    private readonly sortingCardsService: SortingCardsService,
    private readonly filterCardsService: FilteringCardsService,
  ) {
    this.initSubs();
  }

  initSubs(): void {
    this.sortingCardsService.sortingValue.subscribe((value: ISortingSettings): void => {
      this.sortingParam = value;
    });
    this.filterCardsService.filterValue.subscribe((value: string): void => {
      this.filterParam = value;
    });
  }
}
