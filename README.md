# BSA-2020
BSA-2020-QA-Tech repository

Fork repository and append your name and surname to its original name in format "<originalName>-<surname>_<name>"

## Preconditions
- Install NodeJS LTS version
- VSCode or any other IDE
- terminal
- hands and brain

## Useful materials for locators/selectors
- DOM tree - https://learn.javascript.ru/dom-nodes
- Xpath Manual - https://docs.google.com/document/d/1PdfKMDfoqFIlF4tN1jKrOf1iZ1rqESy2xVMIj3uuV3g/pub
- CSS Selectors - https://www.w3schools.com/cssref/css_selectors.asp
- CSS Selectors Tester - https://www.w3schools.com/cssref/trysel.asp

### Useful links

[WebDriverIO](https://webdriver.io/docs/api.html) - Useful to learn how it works
[MochaJS](https://mochajs.org/#command-line-usage) - Useful to learn additional commands for our test runner
[Chai](https://www.chaijs.com/) - assertion library. Extends the NodeJS's assert.

### Prerequisities
```
npm install

```

## Nuances for running tests
* For now, all test launch can be made with `npm test`. In this case, no parameters can not be changed. If you need to change something, you need to edit the script in package.json. Before committing to the master, you should check that your updated settings are not included in the commit. 