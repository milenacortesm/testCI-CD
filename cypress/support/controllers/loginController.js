import LoginPage from '../views/loginPage.js';
import AuthModel from '../models/authModel.js';

class LoginController {

  //Esta clase actúa como intermediario entre la vista y el modelo. 
  //Coordina las interacciones entre la interfaz de usuario y la 
  //lógica de negocio relacionada con la autenticación.


  constructor() {
    this.loginPage = new LoginPage();
    this.authModel = new AuthModel();
  }

  login(username, password) {
    this.loginPage.visit();
    this.loginPage.fillUsername(username);
    this.loginPage.fillPassword(password);
    this.loginPage.submitLoginForm();
    this.authModel.login(username, password);
  }
}

export default LoginController;
