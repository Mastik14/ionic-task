import { Injectable } from '@angular/core';
import { Answer } from '../models/answer.model';
import { Review} from '../models/review.model';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {
  private _answers: Answer[] = [
    new Answer(
      'Where is it made?',
      'The product is made in USA'
    ),
    new Answer(
      'It is cruelty free?',
      'Yes, it is cruelty free product'
    ),
    new Answer(
      'Does this product contain parabens?',
      'No, this product is paraben free'
    ),
    new Answer(
      'Where is it made?',
      'The product is made in USA'
    ),
    new Answer(
      'It is cruelty free?',
      'Yes, it is cruelty free product'
    ),
    new Answer(
      'Does this product contain parabens?',
      'No, this product is paraben free'
    )
  ];

  get answers() {
    return [...this._answers];
  }
  constructor() { }
}
