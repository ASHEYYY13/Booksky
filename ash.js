//selcting overlay popup-box and button
var overlay=document.querySelector(".overlay")
var popup=document.querySelector(".popup-box")
var addpopupbutton=document.querySelector("#add-popup-button")
//addeventlistener isused to do multiple funcyions ormultiple work at same time
addpopupbutton.addEventListener("click",function(){
    overlay.style.display="block"
    popup.style.display="block"
})
var cancel=document.querySelector("#cancel-popup")
cancel.addEventListener("click",function(event){
  event.preventDefault()
  overlay.style.display="none"
  popup.style.display="none"
})

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("book-title")
var authername=document.getElementById("auther-name")
var descriptioninput=document.getElementById("book-description")


addbook.addEventListener("click",function(event){
  event.preventDefault()
  var div=document.createElement("div")
  div.setAttribute("class","book-container")
  div.innerHTML=`<h2>${booktitle.value}</h2>
  <h4>${authername.value}</h4>
  <p>${descriptioninput.value}</p>
  <button onclick="deletebook(event)">Delete</button>`
container.append(div)
overlay.style.display="none"
popup.style.display="none"

})


function deletebook(event){
    event.target.parentElement.remove()
}