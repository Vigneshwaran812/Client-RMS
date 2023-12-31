import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/Services/autherntication-service.service';
import { MessageService } from 'primeng/api';
import { AfterViewInit } from '@angular/core';

// import { AuthenticationService, Credentials, CredentialsService, LoginContext, } from 'src/app/services/auth';
// import { ValidationService } from 'src/app/services/validation.service';
// import { USERNAME_PATTERN } from 'src/app/shared/regex-patterns';

@Component({
  selector: 'admin-login',
  templateUrl: './admin-log-in.component.html',
  providers:[MessageService]
})
export class AdminLogInComponent implements OnInit{

  showPopUp: boolean= false;
  logInForm !: FormGroup;
  constructor(private authService : AuthenticationService,
              private formBuilder : FormBuilder,
              private router: Router,
              private messageService: MessageService
              ) {
                this.logInForm = this.formBuilder.group({
                 email: ['', Validators.required],
                  password: ['', Validators.required]
                });
  }
  ngOnInit(): void {
    // if(this.credentialsService.isAuthenticated()){
    //   this.router.navigateByUrl("/dashboard")
    // }
  }

  // getErrorStateMatcher(): ValidationService {
  //   return this.validationService;
  // }
  ngAfterViewInit() {
    //this.adminLogin();
  }
  


  getUsername(){
   // return this.loginForm?.get("userName")
  }

  getPassword(){
    //return this.loginForm?.get("password")
  }  
  
  onSubmit() {
    // if (this.loginForm.valid) {
      
      // const loginContext: LoginContext = {
      //   username: this.loginForm.value.userName || '',
      //   password: this.loginForm.value.password || '',
      // };

      // console.log(loginContext);
      // this.authService.login(loginContext).subscribe({
      //   next: (credentials: Credentials) => {
      //     // Handle the successful login
      //     console.log('Logged in successfully:', credentials);
      //     // this.router.navigate(['/dashboard']);
          
      //   },
      //   error: (error: HttpErrorResponse) => {
      //     // Handle the error during login
      //     if (error.error instanceof ErrorEvent) {
      //       // Client-side error occurred
      //       console.error('An error occurred:', error.error.message);
      //     } else {
      //       // Server-side error occurred
      //       console.error(`HTTP Error ${error.status}: ${error.error.message}`);
      //       if (error.error?.message === 'User Not Found') {
      //         // Perform custom validation for user not found
      //         this.loginForm.get('userName')?.setErrors({ userNotFound: true });
      //       }
      //       if (error.error?.message === 'Incorrect Password') {
      //         // Perform custom validation for user not found
      //         this.loginForm.get('password')?.setErrors({ incorrectPassword: true });
      //       }
            
      //     }
      //   }
    //   });
   // }

      
  }

adminLogin()
      {
        this.authService.login(this.logInForm).subscribe(
        (response:any)=>
        {
          console.log("logged In succesfully");
          this.messageService.add({ severity: 'success', summary: 'Logged In', detail: 'Logged in successfully' });
          this.showPopUp = true;
          
          this.router.navigate(['/dashboard']);
         
          
        }),
        (error: any) => {
          // Handle error response
          // This code will execute if the server responds with an error status code (non-2xx)
          console.error(error); // Log the error for debugging purposes
          // You can access the error details such as status code, message, and errors
          console.log('Status:', error.status);
          console.log('Message:', error.message);
          console.log('Errors:', error.error.errors);
        }
      }

      
}