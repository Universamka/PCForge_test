class BuildObject{
    
    get resetSetupButton() {return $('.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.styles_btn__47jU7')};
    get buildProgress() {return $('.MuiLinearProgress-root.MuiLinearProgress-colorPrimary.styles_progressBar__2S-Km.MuiLinearProgress-determinate')}

    //Panels
    get cpuPanel() {return $('#panelcpu-header')};
    get gpuPanel() {return $('#panelgpu-header')};
    get ramPanel() {return $('#panelram-header')};
    get motherPanel() {return $('#panelmotherboard-header')};
    get powerPanel() {return $('#panelpowersupply-header')};
    get hddPanel() {return $('#panelhdd-header')};
    get ssdPanel() {return $('#panelssd-header')};


    
    get addButton() {return $('.MuiButtonBase-root.MuiIconButton-root.styles_root__3wcMW.styles_btnAdd__3Vyqc')};
    get searchField() {return $('.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedEnd.MuiOutlinedInput-inputAdornedEnd.MuiInputBase-inputMarginDense.MuiOutlinedInput-inputMarginDense')};
    get pageNumber() {return $('[aria-label="Go to page 3"]')};

    //Cpu panel
    get cpuNamePanel() {return $('.MuiTypography-root styles_nameComponent__29USL.MuiTypography-body1')};
    get cpuNameSummary() {return $('.MuiTypography-root.MuiTypography-subtitle1')};
    get cpuPageNumber() {return $('[aria-label="Go to page 3"]')};
    get cpuAddButton() {return $('.MuiButtonBase-root.MuiIconButton-root.styles_root__3wcMW.styles_btnAdd__3Vyqc')};

    //Gpu panel
   
    get gpuAddButtton() {return $('.MuiButtonBase-root.MuiIconButton-root.styles_root__3wcMW.styles_btnAdd__3Vyqc')};

}

module.exports = BuildObject;