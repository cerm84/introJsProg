const CELL_COST = 250;
const ACCES_COST = 12;
const BANK_ACC = 1000;
var cont = "y";
var cant;
var subPur;
var totalPur;
var totalCount = 0;

function calcTax(subTot) {
    var TAX_RATE = 0.15;
    return subTot + (subTot * TAX_RATE);
}

function formPrice(total) {
    return "$" + total.toFixed(2);
}

while (true) {
    cant = Number(prompt("How many cell phones do you want to buy (cell phone price = $250.00"));
    subPur = cant * CELL_COST;
    totalPur = calcTax(subPur);
    totalCount = totalPur + totalCount;
    if (totalCount < BANK_ACC) {
        totalPur = "Your total is: " + formPrice(totalCount);
        console.log("Thanks for yor purshase!!");
        console.log(totalPur);
    } else {
        console.log("You don't have enough funds in your account");
        totalPur = "Your total is: " + formPrice(totalCount);
        console.log(totalPur);
        break;
    }
    cant = Number(prompt("How many accesories do you want to purshase (Accesories price = $12.0)"));
    subPur = cant * ACCES_COST;
    totalPur = calcTax(subPur);
    totalCount = totalPur + totalCount;
    if (totalCount < BANK_ACC) {
        totalPur = "Your total is: " + formPrice(totalCount);
        console.log("Thanks for yor purshase!!");
        console.log(totalPur);
    } else {
        console.log("You don't have enough funds in your account");
        totalPur = "Your total is: " + formPrice(totalCount);
        console.log(totalPur);
        break;
    }
    cont = prompt("Do you want to keep bying? (y/n)");
    if (cont === "n") {
        break;
    }   
}
