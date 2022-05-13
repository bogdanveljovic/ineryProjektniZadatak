//Show more

(function () {
    document.getElementById("show-more-btn").addEventListener("click", showMore)
    document.getElementById("show-less-btn").addEventListener("click", showLess)


    function showMore (e) {
        document.getElementById("showMore1").classList.remove("hide")
        document.getElementById("showMore2").classList.remove("hide")
        document.getElementById("show-more-btn").classList.add("hide")
        document.getElementById("show-less-btn").classList.remove("hide")
        e.preventDefault();
    }

    function showLess(e) {
        document.getElementById("showMore1").classList.add("hide")
        document.getElementById("showMore2").classList.add("hide")
        document.getElementById("show-less-btn").classList.remove("hide")
        document.getElementById("show-less-btn").classList.add("hide")
        e.preventDefault();
    }
  })();

  // Show all jobs

  (function () {
    document.getElementById("all").addEventListener("click",all)
    document.getElementById("frontEnd").addEventListener("click",frontEnd)
    document.getElementById("backEnd").addEventListener("click",backEnd)
    document.getElementById("blockChain").addEventListener("click",blockChain)
    
    
    function all () {
        document.querySelector(".blockChain").classList.remove("hideMore");
        document.querySelector(".backEnd").classList.remove("hideMore");
        document.querySelector(".office").classList.remove("hideMore");
        document.querySelector(".frontEnd").classList.remove("hideMore");
    }
    function frontEnd () {
        all()
       document.querySelector(".blockChain").classList.add("hideMore");
       document.querySelector(".backEnd").classList.add("hideMore");
       document.querySelector(".office").classList.add("hideMore");
    }
    function backEnd() {
        all()
       document.querySelector(".blockChain").classList.add("hideMore");
       document.querySelector(".frontEnd").classList.add("hideMore");
       document.querySelector(".office").classList.add("hideMore");
    }
    function blockChain () {
        all()
        document.querySelector(".backEnd").classList.add("hideMore");
        document.querySelector(".frontEnd").classList.add("hideMore");
        document.querySelector(".office").classList.add("hideMore");
    }
    


  })();
  

// document.getElementById("show-more-btn").addEventListener("click", myFunction)
// function myFunction(e) {
//     let firstItem = document.getElementById("showMore1")
//     let secondItem = document.getElementById("showMore2")
//     let showMoreBtn = document.getElementById("show-more-btn")

//     if(firstItem.style.display === "none" && secondItem.style.display === "none") {
//         firstItem.style.display = "grid"
//         secondItem.style.display = "grid";
//         showMoreBtn.innerHTML = "Read less"
//     }   else {
//         firstItem.style.display = "none"
//         secondItem.style.display = "none"
//         showMoreBtn.innerHTML = "Read more"
//     }
//     e.preventDefault();
// }














