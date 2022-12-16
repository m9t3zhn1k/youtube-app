import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

import { SharedModule } from '../shared/shared.module';

import { GettingDetailsService } from '../youtube/services/getting-details.service';
import { SearchingService } from '../youtube/services/searching.service';
import { SortingCardsService } from '../youtube/services/sorting-cards.service';
import { FilteringCardsService } from '../youtube/services/filtering-cards.service';
import { AuthService } from './services/auth.service';
import { AppStateService } from './services/app-state.service';

import * as fromCards from './store/reducers/cards.reducer';

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forRoot({ cards: fromCards.reducer }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  declarations: [],
  providers: [
    GettingDetailsService,
    SearchingService,
    SortingCardsService,
    FilteringCardsService,
    AuthService,
    AppStateService,
  ],
})
export class CoreModule {}
