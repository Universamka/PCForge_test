const leftNavBar_pe = require('../Objects/leftNavBar_pe');
const objects = new leftNavBar_pe();

class leftNavBar_pa{    

    goLogOut(){
        objects.logOut.click();
    }

    confirmLogOut(){
        objects.logOutYesBtn.click();
    }
}

module.exports = leftNavBar_pa;