const assert = require('assert');
const pages = require('../pages.json');

//Login
const LoginAction = require('../Actions/loginAction');
const loginActions = new LoginAction();
const loginData = require('../TestData/credentials.json');



function userLogin(){
    loginActions.enterEmail(loginData.user.login);
    loginActions.enterPassword(loginData.user.password);
    loginActions.login();
}

describe('Build page', () => {    

    before(function(){
        browser.url(pages.loginPage);
        userLogin();
                
    });

    it('Create setup', () =>{
        browser.pause(3000);
    });

    
    
});