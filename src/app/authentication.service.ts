import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  token: string;
  constructor(private apiService: ApiService) {}

  async signup(username: string, password: string) {
    const response = this.apiService.post('auth/signup', { username, password });
    return await response;
  }

  async login(username: string, password: string) {
    const loginData = { username, password };

    const response = await this.apiService.post('auth/login', loginData);

    this.token = response.token;
  }

  get getToken() {
    return this.token;
  }
}
