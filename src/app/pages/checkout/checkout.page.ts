import { Component, OnInit } from '@angular/core';
import { AnswersService } from '../../services/answers.service';
import { ReviewService } from '../../services/review.service';

import { Review } from '../../models/review.model';
import { Answer } from '../../models/answer.model';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  loadedAnswers: Answer[];
  loadedReviews: Review[];

  constructor(private answersService: AnswersService, private reviewService: ReviewService) { }

  ngOnInit() {
    this.loadedAnswers = this.answersService.answers;
    this.loadedReviews = this.reviewService.reviews;
  }

}
