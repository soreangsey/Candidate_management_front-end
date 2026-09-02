import { inject, Service } from '@angular/core';
import { RegisterForm } from '../../models/register.model';
import { Observable } from 'rxjs';
import { AuthResponse } from '../../models/authResponse.model';
import { HttpClient } from '@angular/common/http';
import { LoginForm } from '../../models/login.model';

@Service()
export class AuthService {

    private API_URL = 'http://localhost:3000/api'
    private httpClient = inject(HttpClient)

    register(registerForm : RegisterForm): Observable<AuthResponse> {
        return this.httpClient.post<AuthResponse>(`${this.API_URL}/auth/register`,registerForm)
    }

        login(loginForm : LoginForm): Observable<AuthResponse> {
        return this.httpClient.post<AuthResponse>(`${this.API_URL}/auth/login`,loginForm)
    }
}
