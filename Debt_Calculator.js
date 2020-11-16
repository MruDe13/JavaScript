// Get Customer Name, Items Bought, and Amount 
const custName = document.querySelector("#btCustomer");
const item = document.querySelector("#btItem");
const amt = document.querySelector("#btAmount");
const submit = document.querySelector("#btSubmit");
const paidAmt = document.querySelector("#btPaid");


// Creating a list of all user transactions
const debitBook = [];

let totalDebt = 0;

function showthis (){
    
    // Changing the Inputs into Value
    const customerName = custName.value;
    const itemBought = item.value;
    const amount = amt.value;

    let transactions = {
        "itemBought": itemBought,
        "amount": amount
    }
    let userFound = false ;

    for (let i=0; i<debitBook.length; i++) {
        if (debitBook[i].username === customerName){
            debitBook[i].transactionlist.push(transactions);
            debitBook[i].customerDebt += parseInt(amount);
            totalDebt += parseInt(amount);
            userFound = true;
        } 
    }

    if (userFound === false){
        let userTransaction = {
            "username": customerName,
            "transactionlist":[transactions],
            "customerDebt": parseInt(amount)
        }
        debitBook.push(userTransaction);
        totalDebt += parseInt(amount);
    }


    console.log(debitBook);
}

function remaining(){
    const customerName = custName.value;
    const amount = amt.value;
    let search = false;
    for (i=0; i<debitBook.length; i++){
        if (debitBook[i].username === customerName){
            debitBook[i].customerDebt -= parseInt(amount);
            totalDebt -= parseInt(amount);
            console.log(debitBook);
            search = true;
            if (debitBook[i].customerDebt < 0){
                youOwe = debitBook[i].customerDebt;
                console.log(`You owe Rs. ${youOwe} to ${customerName}`)
            } else{
                owesYou = debitBook[i].customerDebt;
                console.log(`${customerName} owes you ${owesYou}.`)
            }
        } 
        
        if (search=== false){
            console.log(`${customerName} does not exist in our directoy. Please add ${customerName} to directorty first.`)
        }
        
        

    }
}

submit.addEventListener("click", showthis, false);
paidAmt.addEventListener("click", remaining, false);

