/*
caluclating price and responses
*/
let cash = 30
let price = 40

function autoCalculate (cash , price){

    // Automatically compute and show result
}
      
    if (cash > price)  {
        const change 
        = cash - price; 
        console.log ("you paid extra! Here is $${change} change.");
    }
    
    else if (cash === price)
        {
            console.log("You paid the excat amount. Have a nice day!");
        }

    else {
            const owed = price - cash;
            console.log("Sorry, not enough money. You still owe "$${owed.toFixed(2)"}
            .);}  