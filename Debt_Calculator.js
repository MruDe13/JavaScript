// Get Customer Name, Items Bought, and Amount 
const custName = document.querySelector("#btCustomer");
const item = document.querySelector("#btItem");
const amt = document.querySelector("#btAmount");
const submit = document.querySelector("#btSubmit")


// Creating an Object for items and price
let transactions = {};

// Making a list of all the transactions
let transactionList = [];

// Creating and Object of Customername and Transactions associated to it
let userTransaction = {};

// Creating a list of all user transactions
const debitBook = [];




function showthis (){
    
    // Changing the Inputs into Value
    const customerName = custName.value;
    const itemBought = item.value;
    let amount = parseInt(amt.value);
    // if (debitBook == null) {
    //     transactions = {
    //         itemBought,
    //         amount
    //     }
    //     userTransaction = {
    //         customerName,
    //         transactionList
    //     }

    //     transactionList.push(transactions)

    //     debitBook.push(userTransaction)

    // } else{

    //     for (const element of debitBook) {
    //         console.log('Hello World');
    if (debitBook.customerName == customerName){     
        
        find = debitBook[customerName];
        customerFound = debitBook[find];
        transactions = {
            itemBought,
            amount
        }
        find.transactionList.push(transactions);
        
    } else {
        transactionList = [];
        transactions = {
            itemBought,
            amount
        }
        userTransaction = {
            customerName,
            transactionList
        }

        transactionList.push(transactions)

        debitBook.push(userTransaction)

            // return transactions,transactionList,userTransaction, debitBook
            }
    console.log(debitBook);
        }

        

        


        
    
    


submit.addEventListener("click", showthis, false);

