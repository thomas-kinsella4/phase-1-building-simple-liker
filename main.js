// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeHeart = document.getElementsByClassName("like-glyph");
const modalDiv =  document.querySelector("#modal");

Array.from(likeHeart).forEach(heart => {
  heart.addEventListener("click", (e) => {
    mimicServerCall()
    .then(() => {
      const filledHeart = e.target;
      filledHeart.innerText = FULL_HEART;
      filledHeart.classList.toggle("activated-heart");
    })
    .catch(() => {
      modalDiv.classList.remove("hidden");
      setTimeout(() => {
        modalDiv.className = "hidden";
      }, 3000)
    })
  })
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}




