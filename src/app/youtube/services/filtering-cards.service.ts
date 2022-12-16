import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class FilteringCardsService {
  filterValue: ReplaySubject<string> = new ReplaySubject<string>();

  setFilterValue(value: string): void {
    this.filterValue.next(value);
  }
}
