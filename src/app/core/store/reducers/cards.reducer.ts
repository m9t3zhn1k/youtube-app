import { CardsState } from '../state/cards.state';
import { createReducer, on } from '@ngrx/store';

import * as CardsAction from '../actions/cards.action';
import { CustomCardModel } from '../../../youtube/models/custom-card.model';

export const initialState: CardsState = {
  customCards: [],
  youtubeCards: [],
};

export const reducer = createReducer(
  initialState,
  on(
    CardsAction.addCustomCard,
    (state: CardsState, { card }): CardsState => {
      const customCards: CustomCardModel[] = [...state.customCards, card];
      return {
        ...state,
        customCards: customCards,
      }
    },
  ),
  on(CardsAction.getYoutubeVideos,
    (state: CardsState, { videos }): CardsState => {
      return {
        ...state,
        youtubeCards: videos,
      }
    },
  )
);
