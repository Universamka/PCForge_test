const login_po = require('../Objects/login_po');
const objects = new login_po();
const credentials = require('../TestData/creds.json');

class Login_pa{    
    enterEmail(value){
        objects.loginField.clearValue();
        objects.loginField.setValue(credentials.email);
    }
    enterPassword(value){
        objects.passwordField.clearValue();
        objects.passwordField.setValue(credentials.password);
    }   
    login(){
        objects.loginButton.click()
    }    
}

module.exports = Login_pa;