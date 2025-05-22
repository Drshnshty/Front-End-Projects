const ratings=document.querySelectorAll(".rating");
const ratingsContainer=document.querySelector(".ratings-conatiner");
const sendBtn=document.querySelector("#send");
const panel=document.querySelector("#panel");

let selectedRating="Satisfied";
//Attach Events
ratingsContainer.addEventListener("click", e => {
  const rating = e.target.closest('.rating'); 
  //const rating=e.target.parenetNode.classList,contains(".rating");
  if (rating) {
    removeActive();
    rating.classList.add("bg-gray-600", "rounded", "transition-all", "duration-1000");
    selectedRating = rating.querySelector("small").innerHTML;
    // selectedrating=e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click",()=>{
  panel.innerHTML=`<p class="text-6xl mb-3">🧡</p> <strong class="text-4xl">Thank You</strong> <br> <strong class"text-2xl">FeedBack-${selectedRating}</strong>`

})

function removeActive(){
  for(let i=0;i<ratings.length;i++){
    ratings[i].classList.remove("bg-gray-600", "rounded", "transition-all", "duration-1000");
  }
}