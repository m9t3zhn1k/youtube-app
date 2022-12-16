import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { URL_REGEXP } from '../../../../constants/сonstants';
import { Store } from '@ngrx/store';
import * as CardsActions from '../../../core/store/actions/cards.action';
import { CustomCardModel } from '../../../youtube/models/custom-card.model'

@Component({
  selector: 'app-new-card-form',
  templateUrl: './new-card-form.component.html',
  styleUrls: ['./new-card-form.component.scss'],
})
export class NewCardFormComponent {
  constructor(private router: Router, private store: Store) {}

  newCardForm: FormGroup = new FormGroup({
    title: new FormControl<string>('', [Validators.required, this.titleValidator]),
    description: new FormControl<string>('', [Validators.maxLength(255)]),
    imageLink: new FormControl<string>('', [Validators.required, Validators.pattern(URL_REGEXP)]),
    videoLink: new FormControl<string>('', [Validators.required, Validators.pattern(URL_REGEXP)]),
    date: new FormControl<Date | null>(null, [Validators.required, this.dateValidator]),
  });

  dateValidator(control: FormControl<string>): { [str: string]: string } | null {
    if (!control.value) {
      return { error: 'Please enter a creation date' };
    } else if (Date.parse(control.value) >= Date.now()) {
      return { error: 'The date is invalid' };
    }
    return null;
  }

  titleValidator(control: FormControl<string>): { [str: string]: string } | null {
    if (!control.value) {
      return { error: 'Please enter a title' };
    } else if (control.value.length < 3) {
      return { error: 'The title is too short' };
    } else if (control.value.length > 20) {
      return { error: 'The title is too long' };
    }
    return null;
  }

  submit(): void {
    const customCard: CustomCardModel = {
      title: this.newCardForm.controls.title.value,
      description: this.newCardForm.controls.description.value,
      imageLink: this.newCardForm.controls.imageLink.value,
      videoLink: this.newCardForm.controls.videoLink.value,
      date: this.newCardForm.controls.date.value,
    };
    this.store.dispatch(CardsActions.addCustomCard({ card: customCard }));
    this.router.navigateByUrl('');
  }
}
