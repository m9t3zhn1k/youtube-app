import { IVideoData } from '../../../youtube/models/search-results.model';
import { CustomCardModel } from '../../../youtube/models/custom-card.model';

export interface CardsState {
  customCards: CustomCardModel[];
  youtubeCards: IVideoData[];
}
