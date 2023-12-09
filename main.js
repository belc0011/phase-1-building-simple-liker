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
    console.log(heart)
    console.log(data + "data should be here")
    if (data === "Pretend remote server notified of action!") {
      console.log("first if statement")
      if (heart.classList.contains("activated-heart")) {
        console.log("second if statement");
        heart.classList.remove("activated-heart");
        document.getElementById("heart" + index).textContent.EMPTY_HEART
      }
      else heart.classList.add("activated-heart");
      document.getElementById("heart-" + index).textContent.FULL_HEART
      console.log("else statement")
      }
    })
  .catch(error => {
    alert("uh oh!");
    console.log(error.message);
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


