
// document.querySelector("add_to_wallet").addEventListener("add-money",addfun)

// function addfun(){
//     event.preventDefault();
//     let money =document.getElementById("amount").value;

//  var div = document.createElement("div")
//  var h1 = document.createElement("h1")
//  h1.innerText=money;

//  div.append(h1)
//  document.querySelector("add-money").append(div)

//     }


// function addTowallet(){

// }
amount = amount+Number(localStorage.getItem("amount"))|| [];

function addMoney(el){
    let amount = document.querySelector("amount").value;

   
    // document.querySelector("wallet").innerHTML=amount;
    // document.querySelector("amount").value;
 let h1 =  document.createElement("h1")
 h1.innerHTML=el.value


 add-money.append(h1)


    localStorage.setItem("amount", amount);

    

    

}




