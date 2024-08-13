class AuthModel {

    // Esta clase representa la lógica de negocio relacionada con la autenticación. 
    
    login(username, password) {
      // Aquí iría la lógica para enviar una solicitud de inicio de sesión al servidor
      // Por simplicidad, supondremos que el inicio de sesión es exitoso
      cy.log(`Inicio de sesión exitoso para el usuario: ${username}`);
    }
  }
  
  export default AuthModel;
  