class Login_PO{
    get loginField() { return $('[name="Email"]')};
    get passwordField() {return $('[name="Password"]')};

    get loginButton() { return $('button.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.styles_btn__47jU7[type="submit"]')};
    get loginGoogleButton() { return $()};
}

module.exports = Login_PO;