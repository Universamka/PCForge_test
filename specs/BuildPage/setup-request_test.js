const assert = require('assert');
const path = require('path');
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


function uploadSetupImage(){
    const remoteFilePath = browser.uploadFile('../TestData/setup.jpg');
    $('#uploadFile').setValue(remoteFilePath);
}

describe('Build page', () => {    

    before(() => {
        browser.url(pages.loginPage);
        userLogin();
        menuActions.goBuildPage();
                
    });

    it('Create setup', async () =>{
        buildActions.resetSetup();

        buildActions.openMotherPanel();
        buildActions.addMother();
        buildActions.waitForSpinner();

        buildActions.openCpuPanel();  
        buildActions.addCpu(); 
        buildActions.waitForSpinner();
       

        buildActions.openGpuPanel();
        buildActions.addGpu();
        buildActions.waitForSpinner();   


        buildActions.openRamPanel();   
        buildActions.addRam();     
        buildActions.waitForSpinner();
       
        buildActions.openPowerPanel();  
        buildActions.addPower();              
        buildActions.waitForSpinner();
        
       

       buildActions.openSaveWindow();
       buildActions.waitForDialog();
       
       buildActions.setSetupName('Name');
       buildActions.setSetupDescription('Descriptionnnnnnnn');
       await buildActions.uploadSetupImage('../TestData/setup.jpg');

       
        /*** 
       
        buildActions.openPowerPanel();        
       // buildActions.waitForSpinner();
        buildActions.addPower();

        buildActions.openHddPanel();        
       // buildActions.waitForSpinner();
        buildActions.addHdd();

        buildActions.openSsdPanel();        
       // buildActions.waitForSpinner();
       buildActions.addSsd();  


       // buildActions.saveSetupMenu();

        //buildActions.waitForDialog();
        //buildActions.setSetupName(buildData.setup.name);
        //buildActions.setSetupDescription(buildData.setup.description);
       // uploadSetupImage();

      //  buildActions.saveSetupWindow();
 */

        browser.pause(3000);
    });

    
    
});