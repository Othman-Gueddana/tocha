import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackComponent } from './feedback/feedback.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        SigninComponent,
        ShoppingCartComponent,
        FeedbackComponent
    ]
})
export class ExamplesModule { }
 