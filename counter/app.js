document.addEventListener("DOMContentLoaded", function(){ 
// Added a DOMContentLoaded Event Listener to ensure that the entire script runs only after the HTML document has been fully loaded and parsed.


    const increaseBttn = document.getElementById("increase");
    const decreaseBttn = document.getElementById("decrease");
    const startBttn = document.getElementById("start");
    const resetBttn = document.getElementById("reset");
    const stopBttn = document.getElementById("stop");
// We created a connection between JS button variables and HTML button elements using their HTML IDs for interaction.

    const counterDiv = document.getElementById("counter");
// Defined a variable to represent the counter <div> element for dynamic content updates.

    let counterCount = 0;
    counterDiv.innerHTML = `<p>${counterCount}</p>`;
// counter's default value is set to 0 and the default count added in counterDiv as a paragraph (<p></p>).

    let isStopped = true;
// We defined a boolean variable to track whether the counter is active or paused.

    increaseBttn.addEventListener("click", function(){
        counterCount++; // Added 1 to counterCount's value
        counterDiv.innerHTML = `<p>${counterCount}</p>`; // We added the counterCount value in counterDiv as a paragraph.
    });
// Added a click event listener to the increaseBttn variable to implement an increment function for the counter.


    resetBttn.addEventListener("click", function(){
        counterCount = 0; // Removing 1 from counterCount's value
        counterDiv.innerHTML = `<p>${counterCount}</p>`; // We added the counterCount value in counterDiv as a paragraph.
    });
// Added a click event listener to the resetBttn variable to implement a reset function for the counter.


    decreaseBttn.addEventListener("click", function(){
        if(counterCount > 0){ // if the counter's value greater than 0, it will remove 1 from counterCount's value
            counterCount--;
        }
        counterDiv.innerHTML = `<p>${counterCount}</p>`; // We added the counterCount value in counterDiv as a paragraph.
    });
// Added a click event listener to the decreaseBttn variable to implement a decrement function for the counter.


    startBttn.addEventListener("click", function(){
        isStopped = false;
        if (counterCount > 0  && isStopped===false){ // If the counter's value is greater than 0 and the counter is not paused, the code within the if statement will execute.
            countingInterval = setInterval(() => { // Created a time interval to perform repetitive operations and assigned an ID to the interval for clearing it later when needed.
                counterCount--; // Removing 1 from counterCount's value
                counterDiv.innerHTML = `<p>${counterCount}</p>`; // We added the counterCount value in counterDiv as a paragraph.
                if(counterCount === 0 || counterCount < 0){ // If the counter's value is equals or less than 0, the code within the if statement will execute.
                    counterCount = 0; // counterCount is set to 0 
                    counterDiv.innerHTML = `<p>${counterCount}</p>`; // We added the counterCount value in counterDiv as a paragraph.
                    isStopped = true; // Counter is paused
                    clearInterval(countingInterval); // Interval is cleaned
                    // If the interval is not cleared, it will continue executing indefinitely, which is not the desired behavior.
                }
            }, 1000); // Set the interval to execute every second (1000 milliseconds).
        }
    });

    stopBttn.addEventListener("click", function(){
        isStopped = true; // Counter is paused
        clearInterval(countingInterval); // Interval are cleaned
    });
// Added a click event listener to the resetBttn variable to pause the counter.


});