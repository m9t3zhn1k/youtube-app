import { CustomCardModel } from './../../models/custom-card.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-card-item',
  styleUrls: ['./custom-card-item.component.scss'],
  templateUrl: './custom-card-item.component.html',
})
export class CustomCardItemComponent {
  @Input() data: CustomCardModel;
}
