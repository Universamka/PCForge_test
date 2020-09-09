class BuildObject{
    

    // The buttons that are on top of the build block 
    get resetSetupButton() {return $('//button[@class="MuiButtonBase-root MuiButton-root MuiButton-outlined styles_btn__47jU7"]/span[text()="Reset Setup"]')};
    get resetSetupFilters() {return $('//button[@class="MuiButtonBase-root MuiButton-root MuiButton-outlined styles_btn__47jU7"]/span[text()="Reset Filters"]')};
    get saveSetupButton() {return $('//button[@class="MuiButtonBase-root MuiButton-root MuiButton-outlined styles_btn__47jU7 styles_btnPrimary__1l_M-"]')};


    get buildProgress() {return $('//div[@class="MuiLinearProgress-root MuiLinearProgress-colorPrimary styles_progressBar__2S-Km MuiLinearProgress-determinate"]')};
   

    //Headers
    get cpuHeader() {return '//div[@id="panelcpu-header"]'};
    get gpuHeader() {return '//div[@id="panelgpu-header"]'};
    get ramHeader() {return '//div[@id="panelram-header"]'};
    get motherHeader() {return '//div[@id="panelmotherboard-header"]'};
    get powerHeader() {return '//div[@id="panelpowersupply-header"]'};
    get hddHeader() {return '//div[@id="panelhdd-header"]'};
    get ssdHeader() {return '//div[@id="panelssd-header"]'};
   
    // Panels
    get cpuPanel() {return $(this.cpuHeader)};
    get gpuPanel() {return $(this.gpuHeader)};
    get ramPanel() {return $(this.ramHeader)};
    get motherPanel() {return $(this.motherHeader)};
    get powerPanel() {return $(this.powerHeader)};
    get hddPanel() {return $(this.hddHeader)};
    get ssdPanel() {return $(this.ssdHeader)};    

    // Hardware names on panels
    get namePanelField() {return '//p[@class="MuiTypography-root styles_nameComponent__29USL MuiTypography-body1"]'}
    get cpuNamePanel() {return $(this.cpuHeader+this.namePanelField)};
    get gpuNamePanel() {return $(this.gpuHeader+this.namePanelField)};
    get ramNamePanel() {return $(this.ramHeader+this.namePanelField)};
    get motherNamePanel() {return $(this.motherHeader+this.namePanelField)};
    get powerNamePanel() {return $(this.powerHeader+this.namePanelField)};
    get hddNamePanel() {return $(this.hddHeader+this.namePanelField)};
    get ssdNamePanel() {return $(this.ssdHeader+this.namePanelField)};

    // Hardware names in the summary block
    // Fields have this index only when all fields are selected and displayed in the summary block.    
    get summaryBlock() {return '//div[@class="MuiBox-root jss13 styles_componentWrapper__2QOPH"]'};
    get hardwareTitleSummary() {return '//h6[@class="MuiTypography-root MuiTypography-subtitle1"]'};
    get cpuNameSummary() {return $(this.summaryBlock + '/div[1]' + this.hardwareTitleSummary)};
    get gpuNameSummary() {return $(this.summaryBlock + '/div[2]' + this.hardwareTitleSummary)};
    get ramNameSummary() {return $(this.summaryBlock + '/div[3]' + this.hardwareTitleSummary)};
    get motherNameSummary() {return $(this.summaryBlock + '/div[4]' + this.hardwareTitleSummary)};
    get powerNameSummary() {return $(this.summaryBlock + '/div[5]' + this.hardwareTitleSummary)};
    get hddNameSummary() {return $(this.summaryBlock + '/div[6]' + this.hardwareTitleSummary)};
    get ssdNameSummary() {return $(this.summaryBlock + '/div[7]' + this.hardwareTitleSummary)};

    // Plus buttons
    // The number in square brackets means the number of the block in which the button is located. In other words, the number of the button.
    get hardwareBlock() {return '/following-sibling::div//div[@class="MuiPaper-root styles_componentItem__1rkHX MuiPaper-elevation1 MuiPaper-rounded"]'}

    get cpuAddButton() {return $ (this.cpuHeader + this.hardwareBlock + '[1]/button')};
    get gpuAddButton() {return $ (this.gpuHeader + this.hardwareBlock + '[1]/button')};
    get ramAddButton() {return $ (this.ramHeader + this.hardwareBlock + '[1]/button')};
    get motherAddButton() {return $ (this.motherHeader + this.hardwareBlock + '[1]/button')};
    get powerAddButton() {return $ (this.powerHeader + this.hardwareBlock + '[1]/button')};
    get hddAddButton() {return $ (this.hddHeader + this.hardwareBlock + '[1]/button')};
    get ssdAddButton() {return $ (this.ssdHeader + this.hardwareBlock + '[1]/button')};

    // Search fields
    get searchField() {return '/following-sibling::div//div[@class="MuiBox-root jss525 styles_search__3cUS0"]'};
    get cpuSearchField() {return $ (this.cpuHeader + this.searchField)};
    get gpuSearchField() {return $ (this.gpuHeader + this.searchField)};
    get ramSearchField() {return $ (this.ramHeader + this.searchField)};
    get motherSearchField() {return $ (this.motherHeader + this.searchField)};
    get powerSearchField() {return $ (this.powerHeader + this.searchField)};
    get hddSearchField() {return $ (this.hddHeader + this.searchField)};
    get ssdSearchField() {return $ (this.ssdHeader +  + this.searchField)};

    //Clear buttons on panels
    get clearButton() {return '//button[@class="MuiButtonBase-root MuiButton-root MuiButton-outlined styles_btn__47jU7"]'};
    get cpuClearButton() {return $(this.cpuHeader + this.clearButton)};
    get gpuClearButton() {return $(this.gpuHeader + this.clearButton)};
    get ramClearButton() {return $(this.ramHeader + this.clearButton)};
    get motherClearButton() {return $(this.motherHeader + this.clearButton)};
    get powerClearButton() {return $(this.powerHeader + this.clearButton)};
    get hddClearButton() {return $(this.hddHeader + this.clearButton)};
    get ssdClearButton() {return $(this.ssdHeader + this.clearButton)};


 
    //Ram
    get ramCountLabel() {return $(this.ramHeader + '//div[@class="styles_wrapper__27ZMJ"]')};
    get increaseRamButton() {return $('//div[@id="panelram-header"]//button[@aria-label="increase"]')};
    get decreaseRamButton() {return $('//div[@id="panelram-header"]//button[@aria-label="reduce"]')};



    // Save your setup window
    // w - Window
    get saveSetupWindow() {return $('//div[@class="MuiDialogContent-root"]')};
    get wSaveSetupButton() {return $('//button[@class="MuiButtonBase-root MuiButton-root MuiButton-outlined styles_btn__47jU7 styles_button__1nhaW styles_saveButton__3txjW styles_btnPrimary__1l_M-"]')};
    get wSetupCloseButton() {return $('//button[@class="MuiButtonBase-root MuiButton-root MuiButton-outlined styles_btn__47jU7 styles_button__1nhaW styles_btnSecondary__3untI"]')};
    get wSetupTitle() {return $('//input[@id="setup_title"]')};
    get wSetupDescription() {return $('//textarea[@id="setup_description"]')};
    get wSetupImage() {return $('input[type="file"]')};
    

}

module.exports = BuildObject;