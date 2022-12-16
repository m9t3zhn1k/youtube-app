import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundPageComponent {
  @HostBinding('class') class = 'page';
}
