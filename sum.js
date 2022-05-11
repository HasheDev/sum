function sum_Addition() {
    console.log(`Formula: ${arguments[0]}+${arguments[1]}`)
    return arguments[0]+arguments[1];
}

function sum_Subtract() {
    console.log(`Formula: ${arguments[0]}-${arguments[1]}`)
    return arguments[0]-arguments[1];
}

function sum_Multiplication() {
    console.log(`Formula: ${arguments[0]}*${arguments[1]}`)
    return arguments[0]*arguments[1]
}

function sum_Divsion() {
    console.log(`Formula: ${arguments[0]}/${arguments[1]}`)
    return arguments[0]/arguments[1]
}


function sum_Percent() {
    console.log(`Formula: ${arguments[0]}*${arguments[1]}/100`)
    return arguments[0]*arguments[1]/100
}


/* JS operators */
function advancy_sum_Chose()
{
    let sum_List = "";

    for (let letter of arguments)
    {
        sum_List += letter;   
    }
    console.log(`Formula: ${sum_List}`)
    return eval(sum_List)
}
function basic_Sum_Chose() {
    if(arguments[1] == "+")
        return sum_Addition(arguments[0], arguments[2])
    else if(arguments[1] == "-")
        return sum_Subtract(arguments[0], arguments[2])
    else if(arguments[1] == "*"|"x")
        return sum_Multiplication(arguments[0], arguments[2])
    else if(arguments[1] == "/")
        return sum_Divsion(arguments[0], arguments[2])
    else if(arguments[1] == "%p")
        return sum_Percent(arguments[0], arguments[2])
       
}


/* Using: Js-operators. */
console.log(advancy_sum_Chose(1, "/", 2, "+", "50*3"))
/* Using: Basic-operators-math. */
console.log(basic_Sum_Chose(10, "*", 1000))