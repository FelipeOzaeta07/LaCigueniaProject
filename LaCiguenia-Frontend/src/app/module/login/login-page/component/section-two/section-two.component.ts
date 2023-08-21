import { Component } from '@angular/core';
import { CREATE_ACCOUNT, FORGOT_PASSWORD, HERE, NEED_HELP, SIGN_IN } from '@module/login/login-page/component/section-two/constans/section-two';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent {
  signIn = SIGN_IN;
  forgotPassword = FORGOT_PASSWORD;
  createAccount = CREATE_ACCOUNT;
  needHelp = NEED_HELP;
  here = HERE;
}
