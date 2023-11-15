import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '@commons/domains/user/UserModel';
import { GenericResponse } from '@commons/response/GenericResponse';
import { SETUP, SETUP_USER, USER_NAME, EMAIL, UPDATE_USER, CREATE_USER, DELETE_USER } 
from '@module/setup/setup-page/component/section-one/constans/section-one';
import { ReadUserUseCase } from '@repository/user/case/ReadUserUseCase';
import { UserSharedGetDataUseCase } from '@repository/user/case/UserSharedGetDataUseCase';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnInit{

  @Output() eventUpdateInformationUser = new EventEmitter<boolean>;

  textSetup = SETUP;
  textSetupUser = SETUP_USER;
  textUserName = USER_NAME;
  textEmail = EMAIL;
  textUpdateUser = UPDATE_USER;
  textCreateUser = CREATE_USER;
  textDeleteUser = DELETE_USER;
  
  userModel!: UserModel;

  constructor(private userSharedGetDataUseCase: UserSharedGetDataUseCase, private readUserUseCase: ReadUserUseCase,
    private router: Router){}

  ngOnInit(): void {
    this.userSharedGetData();
  }

  userSharedGetData(){
    const NUMBER = this.userSharedGetDataUseCase.execute();
    this.readUserUseCase.execute(NUMBER).subscribe(
      (res: GenericResponse) => {
        this.userModel = res.objectResponse;
      }
    );
  }

  navegateByRegister(){
    this.router.navigateByUrl("registro-laciguenia")
  }

  eventUpdateUser(){
    this.eventUpdateInformationUser.emit(true);
  }
}
