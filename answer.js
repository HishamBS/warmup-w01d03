let number = prompt("enter your number in here");

if(number % 3 == 0 && number % 5 == 0 && number % 7 == 0)
{
    alert('PlingPlangPlong');

}
else if (number % 3 == 0 && number % 5 == 0)
{
    alert('PlingPlang');

}
else if (number % 3 == 0 && number % 7 == 0)
{
    alert('PlingPlong');

}
else if (number % 5 == 0 && number % 7 == 0)
{
    alert('PlangPlong');

}
else if (number % 3 == 0)
{
    alert('Pling');  
}
else if (number % 5 == 0)
{
    alert('Plang');

}
else if (number % 7 == 0)
{
    alert('Plong');

}
else
{
    alert("your number is not plangable  "+number);
}




// cool solution
// let num = 105;
// let word = "";
// if (!(num % 3)){
//  word += "Pling";
// }if (!(num % 5)){
//  word += "Plang";
// }if (!(num % 7)){
//  word += "Plong";
// }
// if(!word){
//  console.log(num);
// }else{
//  console.log(word);
// }

