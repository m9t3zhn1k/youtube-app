import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { ISortingSettings } from '../models/sorting-settings.model';

@Injectable()
export class SortingCardsService {
  sortingValue: ReplaySubject<ISortingSettings> = new ReplaySubject<ISortingSettings>();

  isSortingPanelOpened: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  openSortingPanel(): void {
    this.isSortingPanelOpened.next(true);
  }

  closeSortingPanel(): void {
    this.isSortingPanelOpened.next(false);
  }

  changeValue(value: ISortingSettings): void {
    this.sortingValue.next(value);
  }
}
