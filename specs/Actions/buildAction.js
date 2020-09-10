const BuildObject = require('../Objects/buildObject');
const objects = new BuildObject();
const path = require('path');





class BuildAction{    

    waitForSpinner(){
        //As long as I can't access the spinner...
        browser.pause(3000);
    }    

    waitForDialog(){
        objects.saveSetupWindow.waitForDisplayed(5000);
    } 


    resetSetup(){
        objects.resetSetupButton.click();
    }
    resetFilters(){
        objects.resetSetupFilters.click();
    }
    openSaveWindow(){
        objects.saveSetupButton.click();
    }

    closeSaveWindow(){
        objects.wSetupCloseButton.click();
    }

    // Open hardware panels
    openCpuPanel(){
        objects.cpuPanel.click();
    }
    openGpuPanel(){
        objects.gpuPanel.click();
    }
    openRamPanel(){
        objects.ramPanel.click();
    } 
    openMotherPanel(){
        objects.motherPanel.click();
    }  
    openPowerPanel(){
        objects.powerPanel.click();
    }   
    openHddPanel(){
        objects.hddPanel.click();
    }
    openSsdPanel(){
        objects.ssdPanel.click();
    }

    // Click on the add button
    addCpu(){
        objects.cpuAddButton.click();
    }
    addGpu(){
        objects.gpuAddButton.click();
    }
    addRam(){
        objects.ramAddButton.click();
    }
    addMother(){
        objects.motherAddButton.click();
    }
    addPower(){
        objects.powerAddButton.click();
    }
    addHdd(){
        objects.hddAddButton.click();
    }
    addSsd(){
        objects.ssdAddButton.click();
    }   

    
    searchCpu(value){
        objects.cpuSearchField.clearValue();
        objects.cpuSearchField.setValue(value);
    }   
    searchGpu(value){
        objects.gpuSearchField.clearValue();
        objects.gpuSearchField.setValue(value);
    } 
    searchRam(value){
        objects.ramSearchField.clearValue();
        objects.ramSearchField.setValue(value);
    } 
    searchMother(value){
        objects.motherSearchField.clearValue();
        objects.motherSearchField.setValue(value);
    } 

    searchPower(value){
        objects.powerSearchField.clearValue();
        objects.powerSearchField.setValue(value);
    } 
    searchHdd(value){
        objects.hddSearchField.clearValue();
        objects.hddSearchField.setValue(value);
    } 
    searchSsd(value){
        objects.ssdSearchField.clearValue();
        objects.ssdSearchField.setValue(value);
    } 
    

    // Save your setup
    setSetupName(value){
        objects.wSetupTitle.clearValue();
        objects.wSetupTitle.setValue(value);
    }

    setSetupDescription(value){
        objects.wSetupDescription.clearValue();
        objects.wSetupDescription.setValue(value);
    }

    saveSetup(){
        objects.wSaveSetupButton.click();
    }


  

    async uploadSetupImage(file) {
        const puppeteer = browser.getPuppeteer()
        const page = (await puppeteer.pages())[0]
        
        const input = await page.$(objects.wSetupImage);
        const filePath = path.join(__dirname, file);
        input.uploadFile(filePath);
    }

    
   

    increaseRam(){
        objects.increaseRamButton.click();
    }
    decreaseRam(){
        objects.decreaseRamButton.click();
    }



    
    

}

module.exports = BuildAction;