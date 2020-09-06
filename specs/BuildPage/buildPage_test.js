const assert = require('assert');
const pages = require('../pages.json');

//Login
const LoginAction = require('../Actions/loginAction');
const loginActions = new LoginAction();
const loginData = require('../TestData/credentials.json');

//Menu
const MenuAction = require('../Actions/menuAction');
const menuActions = new MenuAction();
//Build
const BuildAction = require('../Actions/buildAction');
const buildActions = new BuildAction();
const buildData = require('../TestData/buildPageData.json');




function userLogin(){
    loginActions.enterEmail(loginData.user.login);
    loginActions.enterPassword(loginData.user.password);
    loginActions.login();
}

describe('Build page', () => {    

    before(function(){
        browser.url(pages.loginPage);
        userLogin();
        menuActions.goBuildPage();
                
    });

    it('Create setup', () =>{
        buildActions.resetSetup();

        buildActions.openCpuPanel();        
        buildActions.goToPage();
        buildActions.waitForSpinner();
        buildActions.add();

        buildActions.openGpuPanel();
        buildActions.searchGpu(buildData.gpuName);
        buildActions.waitForSpinner();
        buildActions.add();
        browser.pause(3000);
    });

    
    
});