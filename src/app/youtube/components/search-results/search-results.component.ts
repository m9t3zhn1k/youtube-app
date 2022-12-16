import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FilteringCardsService } from '../../services/filtering-cards.service';
import { SortingCardsService } from '../../services/sorting-cards.service';
import { IVideoData } from '../../models/search-results.model';
import { ISortingSettings } from '../../models/sorting-settings.model';
import { SearchingService } from '../../services/searching.service';
import { Store } from '@ngrx/store';

import * as CardsActions from '../../../core/store/actions/cards.action';
import { selectYoutubeVideos, selectCustomCards } from '../../../core/store/selectors/cards.selector';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  private destroy: Subject<boolean> = new Subject<boolean>();

  cardsCollectionYoutube$ = this.store.select(selectYoutubeVideos);

  cardsCollectionCustom$ = this.store.select(selectCustomCards);

  filterValue: Observable<string>;

  sortingValue: Observable<ISortingSettings>;

  constructor(
    private readonly sortingCardsService: SortingCardsService,
    private readonly filterCardsService: FilteringCardsService,
    private readonly searchingService: SearchingService,
    private readonly store: Store,
  ) {}

  ngOnInit(): void {
    this.filterValue = this.filterCardsService.filterValue.asObservable();

    this.sortingValue = this.sortingCardsService.sortingValue.asObservable();

    this.searchingService.searchInput$.pipe(takeUntil(this.destroy)).subscribe((value: string): void => {
      this.searchingService.search(value).pipe(takeUntil(this.destroy)).subscribe((videos: IVideoData[]): void => {
        this.store.dispatch(CardsActions.getYoutubeVideos({ videos: videos }));
      });
    });
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }
}
