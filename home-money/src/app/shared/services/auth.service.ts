export class AuthService {

  // авторизован ли пользователь
  private isAutheticated = false;

  login() {
    this.isAutheticated = true;
  }

  logout() {
    this.isAutheticated = false;
    window.localStorage.clear();
  }

  isLoggedIn(): boolean {
    return this.isAutheticated;
  }
}
