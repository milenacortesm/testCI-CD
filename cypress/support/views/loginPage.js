class LoginPage {

    //Esta clase representa la interfaz de usuario de la página de inicio de sesión. 

    visit() {
        cy.visit('https://sistema.appbarber.com.br/index.php#/agenda')
    }
  
    fillUsername(username) {
      cy.get('#login-name').type(username);
    }
  
    fillPassword(password) {
        cy.get('#login-pass').type(password);
    }
  
    submitLoginForm() {
        cy.get('.login-form > .btn').click()
     // cy.get('form').submit();
    }
  }
  
  export default LoginPage;
  