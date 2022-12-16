import { Component } from '@angular/core';
import { SortingCardsService } from '../../services/sorting-cards.service';
import { FilteringCardsService } from '../../services/filtering-cards.service';
import { ISortingSettings } from '../../models/sorting-settings.model';
import { AppStateService } from 'src/app/core/services/app-state.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sorting-panel',
  templateUrl: './sorting-panel.component.html',
  styleUrls: ['./sorting-panel.component.scss'],
})
export class SortingPanelComponent {
  private sortingValue: ISortingSettings = {
    parameter: '',
    isIncreasing: true,
  };

  filterValue: string;

  constructor(
    private readonly sortingCardsService: SortingCardsService,
    private readonly filteringCardsService: FilteringCardsService,
    private readonly appStateService: AppStateService,
  ) {
    this.filterValue = this.appStateService.filterParam;
  }

  setSortingValue(param: string): void {
    if (param === this.sortingValue.parameter) {
      this.sortingValue.isIncreasing = !this.sortingValue.isIncreasing;
    } else {
      this.sortingValue.parameter = param;
      this.sortingValue.isIncreasing = true;
    }
    this.sortingCardsService.changeValue(this.sortingValue);
  }

  setFilteringValue(): void {
    this.filteringCardsService.setFilterValue(this.filterValue);
  }
}
