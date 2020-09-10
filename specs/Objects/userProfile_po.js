class userProfile_PO{
    //User avatar link
    get profileLink() {return $('img[alt = "user profile"]')};

    //For editing user profile
    get userEditButton() { return $('button.MuiButtonBase-root.MuiButton-root.MuiButton-outlined')};
    get userName() { return $('input[placeholder = "Name"]')};
    get userEmail() { return $('input[placeholder = "Email"]')};
    get saveButton() { return $('button.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.styles_btn__47jU7.styles_btnPrimary__1l_M-')};

    //For adding favorite games 
    get addGameButton() { return $('button.MuiButtonBase-root.MuiButton-root.MuiButton-contained')};
    get inputGameField() { return $('input#game')};
    //get firstMultiBoxItem() { return $('div.MuiBox-root.jss94 styles_userPageContainer__2meBp')};
    get firstMultiBoxItem() { return $('div.styles_selectOptionsContainer[tabindex = "0"]')};
    get userGamesList() { return $('div.styles_userPreferences__1TNj8')};
    get testGameInput() { return $('a[href = "/game/225"]')};

}
module.exports = userProfile_PO;




