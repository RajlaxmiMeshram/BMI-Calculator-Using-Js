
function BmiCalculator (weight , height)
{
 var change = Math.floor(weight/(height*height));
 return change;
}
var bmi = BmiCalculator(77,1.9);

console.log(bmi);