//Input: Get the wieght in pounds from the lable with the pounds id and convert it to a number.
//Computation: convert pounds to kilograms by dividing pounds by 2.205 and round to the tenths.
//Output: Return the kilgrams to the output field.
function lbsToKilos() {
    //Input
    let pounds = parseFloat(document.getElementById("pounds").value);
    //Computation
    let kilograms = pounds / 2.205;
    let digits = 1;
    let multiplier = Math.pow(10, digits);
    kilograms = Math.round(kilograms * multiplier) / multiplier;
    //Output
    document.getElementById("output").innerHTML = kilograms + " Kilograms";
}