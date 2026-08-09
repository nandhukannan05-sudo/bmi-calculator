
function calculateBMI(){
let weightInput = prompt("Enter your weight in KG:");
let heightInput = prompt("Enter your weight in CM:"); //Expecting cm


let weight = parseFloat(weightInput);
let heightCM =parseFloat(heightInput);

let height = heightCM / 100;

let bmi = weight / (height * height);

document.getElementById("result").innerHTML =`your BMI is: ${bmi.toFixed(2)}`;
}