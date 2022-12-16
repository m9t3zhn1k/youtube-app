import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CardsState } from '../state/cards.state';
import { CustomCardModel } from '../../../youtube/models/custom-card.model';
import { IVideoData } from '../../../youtube/models/search-results.model';

export const selectCardsStore = createFeatureSelector<CardsState>('cards');

export const selectCustomCards = createSelector(
  selectCardsStore,
  (state: CardsState): CustomCardModel[] => state.customCards,
);

export const selectYoutubeVideos = createSelector(
  selectCardsStore,
  (state: CardsState): IVideoData[] => state?.youtubeCards,
);
