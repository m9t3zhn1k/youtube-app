import { Pipe, PipeTransform } from "@angular/core";
import { IVideoData } from '../models/search-results.model';
import { ISortingSettings } from '../models/sorting-settings.model';

@Pipe({
  name: 'cardsSorting',
})
export class SortingCardsPipe implements PipeTransform {
  transform(cards: IVideoData[], sortingParams: ISortingSettings) {
    if (!sortingParams) {
      return cards;
    }
    console.log(cards, sortingParams)
    return cards

    /* return cards.sort((card1: IVideoData, card2: IVideoData): number => {
      switch (sortingParams.parameter) {
        case 'views':
          if (sortingParams.isIncreasing) {
            return +card1.statistics.viewCount - +card2.statistics.viewCount;
          } else {
            return +card2.statistics.viewCount - +card1.statistics.viewCount;
          }
        case 'date':
          if (sortingParams.isIncreasing) {
            return Date.parse(card1.snippet.publishedAt) - Date.parse(card2.snippet.publishedAt);
          } else {
            return Date.parse(card2.snippet.publishedAt) - Date.parse(card1.snippet.publishedAt);
          }
        default:
          return 0;
      }
    }); */
  }
}
