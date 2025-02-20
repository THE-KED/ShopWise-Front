import {Component, EventEmitter, Output} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {InputGroupModule} from "primeng/inputgroup";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {SharedModule} from "primeng/api";
import {AuthService} from '../../auth.service';
import {tap} from 'rxjs';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-sign-on',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    InputGroupAddonModule,
    InputGroupModule,
    InputTextModule,
    PasswordModule,
    SharedModule,
    FormsModule
  ],
  templateUrl: './sign-on.component.html',
  styleUrl: './sign-on.component.scss'
})
export class SignOnComponent {

  email: string="";
  password: string="";

  constructor(private authService: AuthService) {
  }

  @Output()
  closeEvent = new EventEmitter<boolean>();
  closeModal() {
    this.closeEvent.emit(false);
  }

  @Output()
  changeFormEvent = new EventEmitter<boolean>();
  changeFormModal() {
    this.changeFormEvent.emit(true);
  }
  signOn(){
    this.authService.signOn(this.email,this.password).pipe(
      tap(data =>{
          this.closeModal();
        }
      )
    ).subscribe();
  }
}
