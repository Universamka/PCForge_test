const leftNavBar_pe = require('../Objects/leftNavBar_pe');
const objects = new leftNavBar_pe();

class leftNavBar_pa{    
    goBuildPage(){
        objects.goBuildSetupPageButton.click();
    }

    goLogOut(){
        objects.logOut.click();
    }
}

module.exports = leftNavBar_pa;