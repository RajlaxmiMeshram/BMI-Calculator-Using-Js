
function BmiCalculator (weight , height)
{
 
 var bmi = weight/ Math.pow(height,2);
 return Math.round(bmi);
}
var bmii = BmiCalculator(65,1.8);
console.log(bmii);
