import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user.model';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  // private userUrl = 'http://192.168.1.39:3000/users';
  private userUrl = 'http://10.0.0.20:3000/users';

  constructor(private http: HttpClient) {}

  // поиск в бд по email
  getUserByEmail(email: string): Observable<User>  {
    return this.http.get<User>(`${this.userUrl}?email=${email}`) ;
  }

  // создаем нового пользователя
  createNewUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user);
}
}
