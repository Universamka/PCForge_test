const BuildObject = require('../Objects/buildObject');
const objects = new BuildObject();

class BuildAction{    

    waitForSpinner(){
        //As long as I can't access the spinner...
        browser.pause(3000);
    }    

    resetSetup(){
        objects.resetSetupButton.click();
    }
    goToPage(){
        objects.pageNumber.click()
    }
    searchGpu(value){
        objects.searchField.clearValue();
        objects.searchField.setValue(value);
    }

    openCpuPanel(){
        objects.cpuPanel.click();
    }
    openGpuPanel(){
        objects.gpuPanel.click();
    }
    
    add(){
        objects.addButton.click();
    }
    
    

}

module.exports = BuildAction;