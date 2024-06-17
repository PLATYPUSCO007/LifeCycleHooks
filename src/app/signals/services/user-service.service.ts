import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { User, UsersData } from '../interfaces/UserData.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private URL_BASE: string = 'https://reqres.in/api/users';
  private http = inject(HttpClient);
  
  getUsers(id: number): Observable<User>{
    return this.http.get<UsersData>(`${this.URL_BASE}/${id}`).pipe(
      map(result=>result.data),
      tap((result)=>console.log(result)),
    );
  }
}
