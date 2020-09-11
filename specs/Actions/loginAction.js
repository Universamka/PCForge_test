const LoginObject = require('../Objects/loginObject');
const objects = new LoginObject();

class LoginAction{    
    enterEmail(value){
        objects.loginField.clearValue();
        objects.loginField.setValue(value);
    }
    enterPassword(value){
        objects.passwordField.clearValue();
        objects.passwordField.setValue(value);
    }   
    login(){
        objects.loginButton.click()
    }    
}

module.exports = LoginAction;