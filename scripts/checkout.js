// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


const showDetils = JSON.parse(localStorage.getItem("movie"));

showDetils.forEach(function(el){
    const img = document.createElement("img")
    img.setAttribute("src",el.Poster)
    img.setAttribute("class", "images")


    const p =document.createElement("h3")
    p.innerText=el.Title;

   

        arr.push(el);
 
        movies.append(p,img);

    })


   


