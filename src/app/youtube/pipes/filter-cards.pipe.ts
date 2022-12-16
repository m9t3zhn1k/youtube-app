import { Pipe, PipeTransform } from '@angular/core';
import { IVideoData } from '../models/search-results.model';

@Pipe({
  name: 'cardsFilter',
})
export class CardsFilterPipe implements PipeTransform {
  transform(cards: IVideoData[], inputString?: string): IVideoData[] {
    const tags: string[] = inputString?.length
      ? inputString.split(',').map((tag: string): string => tag.toLowerCase().trim())
      : undefined;
    if (tags?.length) {
      cards = cards.filter((card: IVideoData): boolean =>
        card.snippet.tags?.some((cardTag: string): boolean =>
          tags.some((tag: string): boolean => cardTag.includes(tag)),
        ),
      );
    }
    return cards;
  }
}
