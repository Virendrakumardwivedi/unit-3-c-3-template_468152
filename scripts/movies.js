// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
const arr= JSON.parse(localStorage.getItem("movie")) ||[];

const movies_div = document.getElementById("movies");
let id;

async function searchMovies(){
    try{
        const search = document.getElementById("search").value;

        const res = await fetch(`http://www.omdbapi.com/?apikey=8b11dcbf&s=${search}`)

        const data = await res.json();
        const movies = data.Search
       console.log(data)
        return movies;
        
    }catch(err){
        console.log("err:",err)
    }
}

function appendMovies(data){
    movies_div.innerHTML=null;

    data.forEach(function(el){
        // const p =document.createElement("h3")
        // p.innerText=el.Title;

        const img = document.createElement("img")
        img.setAttribute("src",el.Poster)
        img.setAttribute("class", "images")


        const p =document.createElement("h3")
        p.innerText=el.Title;

       
        const buy = document.createElement("button")
        buy.innerHTML="BUY Ticket";
        buy.setAttribute("class","book_now")
        buy.addEventListener("click",function(){
            arr.push(el);
            localStorage.setItem("movie",JSON.stringify(arr))
            window.location.href="checkout.html";
        })


        movies_div.append(p,img ,buy);
        

        // const movies ={
        //     Title,
        // }
        // p.onclick=()=>{
        //     showvideo(movies)
        // }
       
       
    });

    
}

async function main() {
    const data  = await searchMovies();

    if(data === undefined){
        return false;
    }
    appendMovies(data)
}

function debounce(fun, delay){
    if (id){
        clearTimeout(id);
    }
    id= setTimeout(function (){
        fun();
    }, delay)
}