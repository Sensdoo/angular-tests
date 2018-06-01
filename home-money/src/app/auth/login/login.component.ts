import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {UsersService} from '../../shared/services/users.service';
import {User} from '../../shared/models/user.model';
import {Message} from '../../shared/models/message.model';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'sens-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;

  constructor(
    private userService: UsersService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.message = new Message('danger', '');
    // слушатель строкового параметра адресной строки
    this.route.queryParams
      .subscribe((params: Params) => {
        // проверяем есть ли строковый параметр nowCanLogin и равен ли он true,
        // в положительном результате выводим сообщение пользователю
        if (params['nowCanLogin']) {
          this.showMessage(new Message('success', 'Теперь вы можете зайти в систему'));
        }
      });
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(3)])
    });
  }

  // обработка отправки формы
  onSubmit() {
    // получем данные с формы
    const formData = this.form.value;
    // запрос в бд по полю email
    this.userService.getUserByEmail(formData.email)
      .subscribe((user: User) => {
        console.log(user[0]);
        // проверяем есть ли пользователь с таким email
        if (user[0]) {
          // проверям введеный пароль и пароль в бд
          if (user[0].password === formData.password) {
            this.message.text = '';
            // добавляем пользователя в локальное хранилище
            window.localStorage.setItem('user', JSON.stringify(user));
            // авторизуем пользователя в системе
            this.authService.login();
            this.router.navigate(['/system', 'bill']);
          } else {
            this.showMessage(new Message('danger', 'Пароль не верный'));
          }
        } else {
          this.showMessage(new Message('danger', 'Такого пользователя не существует'));
        }
      });
  }

  // для вывода сообщений пользователю с таймингом 5 сек
  private showMessage(message: Message) {
    // содержит текс и тип сообщения(например success или danger)
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }
}
