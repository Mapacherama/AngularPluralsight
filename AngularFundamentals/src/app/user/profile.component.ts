import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators  } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit{
  profileForm: FormGroup;
  private firstName:FormControl
  private lastName:FormControl

  constructor(private authService:AuthService, private router: Router){

  }

  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.currentUser.firstName)
    this.lastName = new FormControl(this.authService.currentUser.lastName)
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  saveProfile(formValues){
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
    this.router.navigate(['events'])
  }

  cancel() {
    this.router.navigate(['events'])
  }

}
