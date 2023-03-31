window.addEventListener("DOMContentLoaded", (event) => {
    const counter = document.getElementById("counter");
    const minusCounter = document.getElementById("minus");
    const plusCounter = document.getElementById("plus");
    const heart = document.getElementById("heart");
    const pauseBtn = document.getElementById("pause");
    const form = document.getElementById("comment-form");
    const listElement = document.getElementById("list");

    let count = 0;
    let isPaused = false;
    let intervals = setInterval(function() {
        if (!isPaused){
            count ++;
            counter.textContent = count;    
        }
    }, 1000);


    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const comment = document.getElementById("comment-input");
        const commentText = comment.value;

        const commentDiv = document.createElement("div");
        commentDiv.textContent = commentText;
        listElement.appendChild(commentDiv);
        comment.value = "";

    })

    pauseBtn.addEventListener("click", function() {
        isPaused = !isPaused;
        if(isPaused){
            pauseBtn.textContent = "Resume";
        }else {
            pauseBtn.textContent = "Pause";
        }
    });

    minusCounter.addEventListener("click", function() {
        count --;
        counter.textContent = count;
    })

    plusCounter.addEventListener("click", function() {
        count ++;
        counter.textContent = count;
    })
})