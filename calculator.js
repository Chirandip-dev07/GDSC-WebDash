function sum(num1,num2)
{
    return num1 + num2
}
function diff(num1,num2)
{
    if (num1>num2){
        return num1 - num2
    }
    else{
        return num2 - num1
    }
}
function prod(num1,num2)
{
    return num1*num2
}
function div(num1,num2)
{
    if (num1>num2){
        return num1 / num2
    }
    else{
        return num2 / num1
    }
}
const prompt = require('prompt-sync')();
const num1 = parseInt(prompt("Enter the first number : "));
const num2 = parseInt(prompt("Enter the second number : "));
const func = prompt("ENTER THE OPERATOR : SUM for addition, DIFF for difference, PRO for product, DIV for division : ");
{
    if (func == "SUM"){
        const ans = sum(num1,num2)
        console.log("The sum of the given numbers is ",ans)
    }
    else if (func == "DIFF"){
        const ans = diff(num1,num2)
        console.log("The difference of the given numbers is ",ans)
    }
    else if (func == "PRO"){
        const ans = prod(num1,num2)
        console.log("The product of the given numbers is ",ans)
    }
    else if (func == "DIV"){
        const ans = div(num1,num2)
        console.log("The division of the given numbers is ",ans)
    }
    else{
        console.log("Wrong Operator Entered")
    }
}