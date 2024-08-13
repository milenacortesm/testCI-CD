import LoginController from '../support/controllers/loginController.js';

describe('Login', () => {
  const loginController = new LoginController();

  it('should login successfully', () => {
    const username = 'chinetepro@gmail.com';
    const password = 'R0b3rt0250390!';

    loginController.login(username, password);

    // Verificar que la autenticación haya sido exitosa
    // Esto podría ser una verificación de redirección a la página de inicio, por ejemplo
    cy.url().should('eq', 'https://sistema.appbarber.com.br/index.php#/agenda');
  });

  it('should not login with wrong password', () => {
    const username = 'chinetepro@gmail.com';
    const wrongPassword = 'wrongpassword';

    loginController.login(username, wrongPassword);

    // Verificar que se muestre un mensaje de error de autenticación
    cy.contains('E-mail ou Senha inválidos').should('be.visible');
  });

  it('should not login with wrong username', () => {
    const username = 'wrong user name';
    const wrongPassword = 'R0b3rt0250390!';

    loginController.login(username, wrongPassword);

    // Verificar que se muestre un mensaje de error de autenticación
    cy.contains('Dados inválidos').should('be.visible');
  });
});
