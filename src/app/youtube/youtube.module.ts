import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';

import { MainPageComponent } from './pages/main-page/main.component';
import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailed-information.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { NewCardFormComponent } from './components/new-card-form/new-card-form.component';
import { CardStatisticsComponent } from './components/card-statistics/card-statistics.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchResultItemComponent } from './components/search-results-item/search-results-item.component';
import { SortingPanelComponent } from './components/sorting-panel/sorting-panel.component';
import { CustomCardItemComponent } from './components/custom-card-item/custom-card-item.component';

import { ColorChangingForPublishDateDirective } from './directives/color-changing-for-publish-date.directive';

import { CardsFilterPipe } from './pipes/filter-cards.pipe';
import { SortingCardsPipe } from './pipes/sorting-cards.pipe';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'details/:id', component: DetailedInformationPageComponent },
  { path: 'admin', component: AdminPageComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule, SharedModule, ReactiveFormsModule],
  declarations: [
    MainPageComponent,
    DetailedInformationPageComponent,
    AdminPageComponent,
    SortingPanelComponent,
    CardStatisticsComponent,
    SearchResultsComponent,
    SearchResultItemComponent,
    NewCardFormComponent,
    CustomCardItemComponent,
    ColorChangingForPublishDateDirective,
    CardsFilterPipe,
    SortingCardsPipe,
  ],
})
export class YouTubeModule {}
