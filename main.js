// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let heartColor = document.querySelectorAll(".like-glyph")
console.log(heartColor);
Array.from(heartColor).forEach((heart, index) => {
  heart.setAttribute("id", "heart-" + index)
  heart.addEventListener("click", () => {
  mimicServerCall("http://mimicServer.example.com", {})
  .then(data => {
    if (data === "Pretend remote server notified of action!") {
      if (heart.classList.contains("activated-heart")) {
        heart.classList.remove("activated-heart");
        document.getElementById("heart" + index).textContent = EMPTY_HEART
      }
      else heart.classList.add("activated-heart");
      document.getElementById("heart-" + index).textContent = FULL_HEART
      }
    })
  .catch(error => {
    document.getElementById("modal").classList.remove("hidden")
    setTimeout(function() {
      document.getElementById("modal").classList.add("hidden")
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


