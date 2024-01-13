
class BankAccount {
// creating class attributes / 
    constructor(AccountHolder, Balance){
        this._AccountHolder = AccountHolder;
        this._Balance = Balance;
    }
    // using getters and setters :
    get AccountHolder(){
        return this._AccountHolder;
    }

    set AccountHolder(newAccount){
        this._AccountHolder = newAccount;
    }

    get Balance(){
        return this._Balance;
    }

    set Balance(NewBalance){
        this._Balance = NewBalance;
    }

    // create methods | using abstraction to only show the user what is needed
     deposite(amount) {
        if (amount > 0){
            this._Balance += amount ;
            console.log("Deposite Amount:" + amount + " New Balance: " + this._Balance);
        }
        else{
            console.log("Invalid Amount")
        }
    }

    Withdraw(amount){
        if(amount > 0){
            this._Balance -= amount;
            console.log("Withdraw Amount:" + amount + " New Balance: " + this._Balance);
        }
        else{
            console.log("Invalid Amount");
        }
    }


    CheckBanlance(){
        console.log("New Balance: " + this._Balance);
    }

}

// create instance of the class 
const myAccount = new BankAccount('Ib', 10000);
console.log(myAccount.AccountHolder);
myAccount.CheckBanlance();
myAccount.deposite(10000);
myAccount.Withdraw(200);
myAccount.CheckBanlance();

// using setters and getters 
myAccount.AccountHolder = "Jim";
myAccount.Balance = 100;
console.log(myAccount.AccountHolder);
myAccount.CheckBanlance();
