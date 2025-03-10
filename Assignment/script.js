// Write the codes in here
let x = 5;
var y = 6;
const z = 7;
let sum = x+y; 
y -= 5;
x *= z;
let quot = x/y;
y = x%12;
let a = x;
//(x = 35 , y = 11 ,z = 7)
if(x == 35 && y != 12 && z<y && a === x){
    console.log(true);
}
else{
    console.log(false);
}
let yString = y.toString();
console.log(x + " " + y + " " + z + " " +sum + " " + quot + " " + a + " " + typeof(yString));