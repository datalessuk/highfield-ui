import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProcessedUserData } from '../types/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getUserData(): Observable<IProcessedUserData> {
    return this.http.get<IProcessedUserData>('http://localhost:5172/api/users');
    //todo url in env file
  }
}
