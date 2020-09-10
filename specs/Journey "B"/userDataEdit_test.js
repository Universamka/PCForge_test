const assert = require('assert');
const pages = require('../pages.json');

//Login
const LoginAction = require('../Actions/Login_pa');
const loginActions = new LoginAction();
const loginData = require('../TestData/creds.json');

//Left Navigation Bar
const leftNavBar = require('../Actions/leftNavBar_pa'); 
const navigation = new leftNavBar();

//User page
const UserAction = require('../Actions/userProfile_pa');
const userActions = new UserAction();
const data = require('../TestData/testData.json');

const UserObject = require('../Objects/userProfile_po');
const userObj = new UserObject();

function userLogin(){
    loginActions.enterEmail(loginData.email);
    loginActions.enterPassword(loginData.password);
    loginActions.login();
}

describe('Edit user profile, add favorite game, home-news-log out', () => {    

    before(function(){
        browser.url(pages.loginPage); // 1. Go to the Login page 
        userLogin();  // 2. Enter valid password there  → Click on "Login" button             
    });
    
    it('Edit user profile', () =>{ 

        userActions.goToUserProfile(); // Go to user profile
        userActions.editUser();   //Click "Edit" button 
        userActions.clearUserName();
        browser.pause(3000);
        userActions.setNewValidUserName(data.validName); //  Change user's name to new valid name
        userActions.clearUserEmail(); 
        browser.pause(3000);
        userActions.setNewValidUserEmail(data.validEmail);  // Change user's email to new valid email
        userActions.saveChanges();   //Click "Save" button 

        assert.strictEqual(userName.getValue(), data.validName);
        assert.strictEqual(userEmail.getValue(), data.validEmail);
    });

    it('Add favorite game to user\'s profile game list', () =>{ 

        userActions.addGame();  //  Click on "+Add Game" button
        userActions.clickGameInputField();
        userActions.inputGameNameData(data.inputGameTestData);  //  Find "303 Squadron: Battle of Britain"
        browser.pause(1500);
        userActions.chooseFirstMultiboxItem();  // click on it for saving in your Games list

        assert.strictEqual(userObj.userGamesList.contains(userObj.testGameInput), true); 
        //Check the specified game was successfully added to the user's list of favorite games

    });
    it('Home - News - Log out', () =>{   
        
        navigation.homePageButton.click(); //  Click “Home page” button
        assert.strictEqual(browser.getUrl(), pages.homePage); 

        browser.url(pages.newsPage());  //I used direct link as redirection to the News page unfortunatelly doesn't work yet
        assert.strictEqual(browser.getUrl(), pages.newsPage);

        navigation.logOut.click(); //  Click on “Logout” button
        navigation.logOutYesBtn.click();
        browser.pause(3000);
        assert.strictEqual(browser.getUrl(), pages.loginPage);

    });
     
    
    
    
    
    
        
       
});