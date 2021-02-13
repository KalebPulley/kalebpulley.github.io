/*
Input: get the values of the user's weather selection.
Computation: set variable output to the corosponding footwear.
Output: return output.
*/
function footwear() {

    //input in these 4 lines

    let weather = document.getElementById('weather').value;

    //Computation check what the answer should be.
    let output
    switch (weather) {
        case "Hot":
            output = "Sandles";
            break;
        case "Rain":
            output = "Galoshes";
            break;
        case "Snow":
            output = "Boots";
            break;
        case "Unknown":
            output = "Shoes";
            break;
        default :
            output = "No weather selected"
    }
      
    //Output
    
    document.getElementById('output').innerHTML = output;  
}
