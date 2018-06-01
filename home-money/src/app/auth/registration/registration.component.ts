import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../shared/services/users.service';
import {User} from '../../shared/models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'sens-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    // получение и валидация данных формы
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      'password': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'name': new FormControl(null, [Validators.required]),
      'agree': new FormControl(false, [Validators.requiredTrue])
    });
  }
  // обработка отправки формы
  onSubmit() {
    // получаем данные с формы и создаем user
    const {email, password, name} = this.form.value;
    const user = new User(email, password, name);

    // создаем нового пользователя в бд
    this.userService.createNewUser(user)
      .subscribe(() => {
        this.router.navigate(['/login'], {
          // добавляем строковый параметр в адресную строку (...?nowCanLogin=true)
          queryParams: {
            nowCanLogin: true
          }
        });
      });
  }

  // асинхронный валидатор
  // проверяем существует ли пользователь с заданым email`ом,
  // метод используется как кастомный валидатор поля email
  forbiddenEmails(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      // делаем запрос в бд(control.value - поле email)
      this.userService.getUserByEmail(control.value)
        .subscribe((user: User) => {
          if (user[0]) {
            // создаем ошибку для валидатора, если email найден
            resolve({
              forbiddenEmail: true
            });
          } else {
            // если email в бд не найден, ничего не делаем
            resolve(null);
          }
        });
    });
  }
}
