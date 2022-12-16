import { createAction, props } from '@ngrx/store';
import { CustomCardModel } from '../../../youtube/models/custom-card.model';
import { IVideoData } from '../../../youtube/models/search-results.model';

const actionSource: string = '[Cards]';

export const addCustomCard = createAction(
  `${actionSource} Add Custom Card`,
  props<{ card: CustomCardModel}>()
);

export const getYoutubeVideos = createAction(
  `${actionSource} Get Youtube Videos`,
  props<{ videos: IVideoData[]}>()
)
