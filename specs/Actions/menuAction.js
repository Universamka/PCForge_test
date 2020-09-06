const MenuObject = require('../Objects/menuObject');
const objects = new MenuObject();

class MenuAction{    
    goBuildPage(){
        objects.goBuildPageButton.click();
    }
}

module.exports = MenuAction;