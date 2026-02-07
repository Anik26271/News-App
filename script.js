let key ="59130517c6114ff39da2040d021cc51b";
let cardData = document.querySelector(".cardData");
let SearchBtn= document.getElementById("searchBtn");
let inputData = document.getElementById("inputData");
let searchType = document.getElementById("type");




const getData = async(input)=>{
  let res=  await fetch(`https://newsapi.org/v2/everything?q=${input}&apikey=${key}`);
  let jsonData =  await res.json();
  console.log(jsonData.articles);

  searchType.innerText=" "+input;
  inputData.value= "";

  cardData.innerHTML=" ";

  jsonData.articles.forEach(function(article){
    console.log(article);
    let divs= document.createElement("div");
  divs.classList.add("card");
  cardData.appendChild(divs);

  
  divs.innerHTML=`
  <img src="${article.urlToImage}" alt="">
      <h3>${article.title}</h3>
      <p>${article.description}</p>


  `
  divs.addEventListener("click", function(){
    window.open(article.url);
  })

  })


  

}
window.addEventListener("load", function(){
  getData("india");

})


SearchBtn.addEventListener("click", function(){
  let inputText = inputData.value; 
  getData(inputText);
})

// navClick function //
function navClick(navName){
  if(navName== "politics"){
    document.getElementById("politics").style.color="blue";
    document.getElementById("sports").style.color="white";
    document.getElementById("technology").style.color="white";


  }

  if(navName== "sports"){
    document.getElementById("politics").style.color="white";
    document.getElementById("sports").style.color="blue";
    document.getElementById("technology").style.color="white";

  }

  if(navName== "technology"){
    document.getElementById("politics").style.color="white";
    document.getElementById("sports").style.color="white";
    document.getElementById("technology").style.color="blue";

  }

  getData(navName);

}
