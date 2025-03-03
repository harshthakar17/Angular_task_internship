import { HttpClient } from '@angular/common/http';
import { R3DeclareInjectorMetadata } from '@angular/compiler';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any={
    username :"",
    password:""
  }

  http= inject(HttpClient);
  router = inject(Router);

  onLogin() {
    console.log("Login Data:", this.loginObj);
  
    this.http.post("https://dummyjson.com/user/login", this.loginObj).subscribe({
      next: (res:any) => {
        alert("Login Successful!");
        console.log("Response:", res);
        localStorage.setItem("token",res.accessToken);
  
        // Navigate to the products page after successful login
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.error("Login Failed:", err);
        alert("Invalid Credentials! Please try again.");
      }
    });
  }
  


}
