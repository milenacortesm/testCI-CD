import LoginController from "../support/controllers/loginController";
import LoginPage from "../support/views/loginPage";

describe.skip('json objects', () => {
  const loginController = new LoginController();
  const loginPage = new LoginPage();


  it('json objects', () => {
    loginController.login('chinetepro@gmail.com', 'R0b3rt0250390!')

  })

})