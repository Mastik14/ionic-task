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
      'The product is made in USA',
      'In the heart of New York City.'
    ),
    new Answer(
      'Where is it made?',
      'The product is made in USA',
      'In the heart of New York City.'
    ),
    new Answer(
      'Where is it made?',
      'The product is made in USA',
      'In the heart of New York City.'
    ),
    new Answer(
      'Where is it made?',
      'The product is made in USA',
      'In the heart of New York City.'
    ),
    new Answer(
      'Where is it made?',
      'The product is made in USA',
      'In the heart of New York City.'
    ),
    new Answer(
      'Where is it made?',
      'The product is made in USA',
      'In the heart of New York City.'
    )
  ];

  get answers() {
    return [...this._answers];
  }
  constructor() { }
}
