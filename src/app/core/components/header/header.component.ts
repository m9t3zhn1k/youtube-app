import { AfterContentInit, Component } from '@angular/core';
import { SearchingService } from '../../../youtube/services/searching.service';
import { AuthService } from '../../../core/services/auth.service';
import { SortingCardsService } from '../../../youtube/services/sorting-cards.service';
import { Observable, fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { IUser } from 'src/app/auth/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterContentInit {
  isAuthorized: Observable<IUser | null>;

  isSortingPanelOpened: boolean = false;

  constructor(
    private readonly searchingService: SearchingService,
    private readonly authService: AuthService,
    public readonly sortingCardsService: SortingCardsService,
  ) {}

  ngAfterContentInit(): void {
    this.isAuthorized = this.authService.isAuthorized.asObservable();
    this.searchingService.searchInput$ = fromEvent<InputEvent>(document.getElementById('search-input'), 'input').pipe(
      map((event: InputEvent): string => (event.target as HTMLInputElement).value.trim()),
      debounceTime(1000),
      distinctUntilChanged(),
      filter((value: string): boolean => value.length >= 3),
    );
  }

  toggleSortingPanel(): void {
    if (this.isSortingPanelOpened) {
      this.sortingCardsService.closeSortingPanel();
    } else {
      this.sortingCardsService.openSortingPanel();
    }
    this.isSortingPanelOpened = !this.isSortingPanelOpened;
  }

  handleClickOnIcon(): void {
    if (this.isAuthorized) {
      this.authService.toLogOut();
    }
  }
}
