import { Component, OnInit } from '@angular/core';
import { AnswersService } from '../../services/answers.service';
import { ReviewService } from '../../services/review.service';

import { Review } from '../../models/review.model';
import { Answer } from '../../models/answer.model';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss']
})
export class CheckoutPage implements OnInit {
  loadedAnswers: Answer[];
  loadedReviews: Review[];

  form: FormGroup;

  constructor(
    private answersService: AnswersService,
    private reviewService: ReviewService,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.loadedAnswers = this.answersService.answers;
    this.loadedReviews = this.reviewService.reviews;
    this.form = new FormGroup({
      firstName: new FormControl(null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ]
      }),
      lastName: new FormControl(null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ]
      }),
      email: new FormControl('', {
        updateOn: 'blur',
        validators: [Validators.required, Validators.email]
      }),
      phone: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(8)]
      }),
      address: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(6)]
      }),
      city: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(6)]
      }),
      unitedStates: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(6)]
      }),
      state: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(6)]
      }),
      zip: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(6)]
      })
    });
  }

  async openToast() {
    const toast = await this.toastController.create({
      message: 'Success',
      animated: false,
      showCloseButton: true,
      closeButtonText: 'hide',
      position: 'middle',
      color: 'dark',
    });
    toast.present();
    toast.onDidDismiss().then((val) => {
      console.log('toast dismissed');
    });
  }



  submit() {
    if (this.form.valid) {
      this.openToast();

      console.log('Form Data:');
    }
  }
}
