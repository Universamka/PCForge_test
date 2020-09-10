const userProfile_po = require('../Objects/userProfile_po');
const objects = new userProfile_po();

class userProfile_pa {
    goToUserProfile() {
        objects.profileLink.click();
    }
    editUser() {
        objects.userEditButton.click(); //Click "Edit" button
    }
    clearUserName() {
        objects.userName.clearValue();
    }
    setNewValidUserName(value) {
        objects.userName.setValue(value); //  Change user's name to other valid name
    }
    clearUserEmail() {
        objects.userEmail.clearValue();
    }
    setNewValidUserEmail(value) {
        objects.userEmail.setValue(value); // Change user's email to other valid email
    }
    saveChanges() {
        objects.saveButton.click(); //Click "Save" button
    }

    addGame() {
        objects.addGameButton.click(); //  Click on "+Add Game" button
    }

    clickGameInputField() {
        objects.inputGameField.click();
    }

    inputGameNameData(value) {
        objects.inputGameField.setValue(value);
    }
    chooseFirstMultiboxItem() {
        objects.firstMultiBoxItem.click(); // click on it for saving in your Games list
    }
}
module.exports = userProfile_pa;