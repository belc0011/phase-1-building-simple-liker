// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




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

let heartColor = document.querySelectorAll(".like-glyph")
console.log(heartColor);
for (let heart of heartColor) {
  heart.addEventListener("click", () => {
    if (heart.style.backgroundColor === "red") {
      heart.style.backgroundColor = "white";
    }
    else heart.style.backgroundColor = "red";
  })
}

/*function fillHeart() {

}*/
mimicServerCall()
.then(data => {
  if (data.code >= 200 && data.code < 400) {
    fillHeart();
  }
})
.catch(error => {
  alert("uh oh!");
  console.log(error.message);
})