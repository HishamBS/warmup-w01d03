let bankAccount = (function(){
    let fullName = "Iweala Ebere";
    let balance  = 1 
    let realPin = 123456

    function credit(amount, pin){
      if(pin === realPin){
        balance = amount + balance
      }else{
        console.log("Haha... I took your money!")
      }
    }
  
    function getBalance(){
      return balance
    }
  
    function withdraw (amount,pin)
    {
     
      if (!(amount > balance))
      {
        if(pin === realPin){
            balance = balance - amount;
        }else{
            console.log("wrong pin")
          }
      }
      else {
        console.log("number exceeds ur funds")
      }
    }
    return {
      full : fullName,
      balance : getBalance,
      credit : credit,
      withdraw : withdraw
    }
  
  })()
  
  
  console.log( bankAccount.full )
  bankAccount.credit(5000, 123456)
  console.log( "$" + bankAccount.balance())
  bankAccount.withdraw(5002,123456);
  console.log( "$" + bankAccount.balance())

  
  

  