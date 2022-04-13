//gets value input from user
function returnText(){
    input = document.getElementById("value-input").value;
    literToGallon = document.getElementById("liters-input").value;
    kmPerTank = document.getElementById("kmPerTank").value;
    console.log(input, literToGallon, kmPerTank)
   
   // this is to replace each html element with the input from
    //theuser... i don't know how to do all of them with one move//
  
    newInput0 = document.getElementById("userInput0")
    newInput0.textContent = input
    
    //newInput1 = document.getElementById("userInput1")
    //newInput1.textContent = input
  
    newInput2 = document.getElementById("userInput2")
    newInput2.textContent = literToGallon
  
    //newInput3 = document.getElementById("userInput3")
    //newInput3.textContent = input
  
    //newInput4 = document.getElementById("userInput4")
    //newInput4.textContent = input
  
    //newInput5 = document.getElementById("userInput5")
    //newInput5.textContent = input
    //console.log(newInput)
    
//console.log(input)
//conversion functions
function wonToDollar(x) {
    let wTD = x / 1200
    let wTDcalced = document.getElementById("wTD")
    wTDcalced.textContent = wTD.toFixed(3)
    console.log(wTD)
}

function feetToMeters(x) {
    let fTM = x / 3.28084
    let fTMcalced = document.getElementById("fTM")
    fTMcalced.textContent = fTM.toFixed(3)
    console.log(fTM)
}

function litresToGallons(x) {
    let lTG = x / 3.785
    let lTGcalced = document.getElementById("lTG")
    lTGcalced.textContent = lTG.toFixed(3)
    return lTG
    
}

function gallonToLiters(x) {
    let gTL = x * 3.785
    let gTLcalced = document.getElementById("gTL")
    gTLcalced.textContent = gTL.toFixed(3)
    console.log(gTL)
}

function gallonOfGasCosts(x) {
    let gOGC = (x * 3.785) /1200
    let gOGCcalced = document.getElementById("gallonOfGasCosts")
    gOGCcalced.textContent = gOGC.toFixed(2)
    return gOGC
}

function costPerTank(x, y) {
    let cPT = x * y
    let cPTcalced = document.getElementById("costPerTank")
    cPTcalced.textContent = cPT.toFixed(2)
    console.log(cPT, cPTcalced)
    return cPT
}

function dollarPerMile(x, y) {
    let dPM = y / (x / 1.60934)
    let dPMcalced = document.getElementById("dollarPerMile")
    dPMcalced.textContent = dPM.toFixed(2)
}

function kilogramsToPounds(x) {
    let kTP = x / 2.2
    let kTPcalced = document.getElementById("kTP")
    kTPcalced.textContent = kTP.toFixed(3)
    console.log(kTP)
}
function poundsToKilo(x) {
    let pTK = x * 2.2
    let pTKcalced = document.getElementById("pTK")
    pTKcalced.textContent = pTK.toFixed(3)
    console.log(pTKcalced)
}

//call each function

wonToDollar(input)

litresToGallons(literToGallon)

gallonOfGasCosts(input)

costPerTank(gallonOfGasCosts(input), litresToGallons(literToGallon))

dollarPerMile(kmPerTank, costPerTank(gallonOfGasCosts(input), litresToGallons(literToGallon)))

kilogramsToPounds(input)

feetToMeters(input)

gallonToLiters(input)

kilogramsToPounds(input)

poundsToKilo(input)


}

//this is ugly code but it works