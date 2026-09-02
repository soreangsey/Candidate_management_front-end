import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [
    ReactiveFormsModule
  ],
  selector: 'app-register-component',
  styleUrl: './register-component.css',
  templateUrl: './register-component.html',
})
export class RegisterComponent {

  private authService = inject(AuthService)
  private fb = inject(FormBuilder)
  private router = inject(Router)

  registerForm : FormGroup;


  constructor(){
    this.registerForm = this.fb.group({
      email : ['',[Validators.required]],
      password : ['',[Validators.required]],
      name : ['',[Validators.required]],
    })
  }

onSubmit(){
  if(this.registerForm.valid){
    this.authService.register(this.registerForm.value).subscribe({
      next : (res) => {
        this.router.navigateByUrl('/')
      }
    })
  }
}

}
