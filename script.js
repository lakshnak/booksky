var popbutton=document.getElementById("add-button")
var pop=document.getElementById("pop")
var overlay=document.getElementById("overlay")
var cancel=document.getElementById("cancel")

popbutton.addEventListener("click",function(){
  overlay.style.display="block"
  pop.style.display="block"
})
cancel.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    pop.style.display="none"
  })
var add=document.getElementById("add")
var booktitle=document.getElementById("book-title")
var bookauthor=document.getElementById("book-author")
var bookdes=document.getElementById("bookdes")
var container=document.querySelector(".container")


add.addEventListener("click",function(event){
  event.preventDefault()
  var div=document.createElement("div")
  div.setAttribute("class","over")
  div.innerHTML=`<h2>${booktitle.value}</h2>
                <h3>${bookauthor.value}</h3>
                <p>${bookdes.value}</p>
                <button onclick="deletebtn(event)">Delete</button>` 
  container.append(div)
  overlay.style.display="none"
  pop.style.display="none"
  
})  
function deletebtn(event){
    event.target.parentElement.remove()
}