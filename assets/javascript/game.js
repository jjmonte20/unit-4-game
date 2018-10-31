// Watch the demo.

// The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters.

// Here's how the app works:

// There will be four crystals displayed as buttons on the page.

// The player will be shown a random number at the start of the game.

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.
// The player wins if their total score matches the random number from the beginning of the game.

// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// Option 1 Game design notes
// The random number shown at the start of the game should be between 19 - 120.

// Each crystal should have a random hidden value between 1 - 12.



// Define variables for the initial score, wins, and losses
var currentValue = 0;
var wins = 0;
var losses = 0;

// goal number variable needs to be a random number between 19 and 120
var goalNumber = Math.floor((Math.random() * 120) + 19);
console.log(goalNumber);

$(".goalScore").html(goalNumber);
$(".youWin").html(wins);
$(".youLose").html(losses);

//now I need to give the buttons a value.  These are valued at a random number between 1 and 12
var firstButton = Math.floor((Math.random() * 12) + 1);
console.log("First button value is: " + firstButton);

//button 2
var secondButton = Math.floor((Math.random() * 12) + 1);
console.log("Second button value is: " + secondButton);

//button 3
var thirdButton = Math.floor((Math.random() * 12) + 1);
console.log("Third button value is: " + thirdButton);

//button 4
var fourthButton = Math.floor((Math.random() * 12) + 1);
console.log("Fourth button value is: " + fourthButton);

// attempting a reset function for gems.  The function should be global, but the actions are not done until the game ends
function gemReset() {
    firstButton = Math.floor((Math.random() * 12) + 1);
    console.log("First button value is: " + firstButton);

    //button 2
    secondButton = Math.floor((Math.random() * 12) + 1);
    console.log("Second button value is: " + secondButton);

    //button 3
    thirdButton = Math.floor((Math.random() * 12) + 1);
    console.log("Third button value is: " + thirdButton);

    //button 4
    fourthButton = Math.floor((Math.random() * 12) + 1);
    console.log("Fourth button value is: " + fourthButton);
}

$(".currentScore").html(currentValue);

    //first task make buttons that work.  .on("click", function{}) should do the trick
    //buttons work and each have unique functions
    $(".btn-primary").on("click", function() {
        console.log("Button 1 works");
        //now that I know the button works.  I need to add value to the button.
        //I have a value for the first button, now I should add it to the current value.
        currentValue = currentValue + firstButton;
        console.log(currentValue);
        $(".currentScore").html(currentValue);
        //need the current value to display on screen
        
        
        if (currentValue === goalNumber) {
            alert("You're Winner!!!");
            console.log("win");
            wins++;
            $(".youWin").html(wins);

            //need to reset goal number to something new
            goalNumber = Math.floor((Math.random() * 120) + 19);
            console.log(goalNumber);
            currentValue = 0;
            console.log(currentValue);
            $(".currentScore").html(currentValue);
            $(".goalScore").html(goalNumber);
            gemReset();
            // firstButton = Math.floor((Math.random() * 12) + 1);
            // console.log("First button value is: " + firstButton);

            // //button 2
            // secondButton = Math.floor((Math.random() * 12) + 1);
            // console.log("Second button value is: " + secondButton);

            // //button 3
            // thirdButton = Math.floor((Math.random() * 12) + 1);
            // console.log("Third button value is: " + thirdButton);

            // //button 4
            // fourthButton = Math.floor((Math.random() * 12) + 1);
            // console.log("Fourth button value is: " + fourthButton);

            // need a function that does this, but also allows a replay ^^
        } 
        
        //function for if the person loses
        else if (currentValue > goalNumber) {
            alert("You lose!!!");
            console.log("lose");
            losses++;
            $(".youLose").html(losses);

            //need to reset goal number to something new
            goalNumber = Math.floor((Math.random() * 120) + 19);
            console.log(goalNumber);
            currentValue = 0;
            console.log(currentValue);
            $(".currentScore").html(currentValue);
            $(".goalScore").html(goalNumber);
            gemReset();
        };
    });
    $(".btn-secondary").on("click", function() {
        console.log("Button 2 works");
        //was able to successfully add a value to current value, but need to ensure the value retains its number when I enter the others
        //button 2 function
        currentValue = currentValue + secondButton;
        console.log(currentValue);
        $(".currentScore").html(currentValue);

        if (currentValue === goalNumber) {
            alert("You're Winner!!!");
            console.log("win");
            wins++;
            $(".youWin").html(wins);

            goalNumber = Math.floor((Math.random() * 120) + 19);
            console.log(goalNumber);
            currentValue = 0;
            console.log(currentValue);
            $(".currentScore").html(currentValue);
            $(".goalScore").html(goalNumber);
            gemReset();
        } 
        
        //function for if the person loses
        else if (currentValue > goalNumber) {
            alert("You Lose!!!");
            console.log("lose");
            losses++;
            $(".youLose").html(losses);

            goalNumber = Math.floor((Math.random() * 120) + 19);
            console.log(goalNumber);
            currentValue = 0;
            console.log(currentValue);
            $(".currentScore").html(currentValue);
            $(".goalScore").html(goalNumber);
            gemReset();
        };
    });
    $(".btn-success").on("click", function() {
        console.log("Button 3 works");
        //button 3 function
        currentValue = currentValue + thirdButton;
        console.log(currentValue);
        $(".currentScore").html(currentValue);

        if (currentValue === goalNumber) {
            alert("You're Winner!!!");
            console.log("win");
            wins++;
            $(".youWin").html(wins);

            goalNumber = Math.floor((Math.random() * 120) + 19);
            console.log(goalNumber);
            currentValue = 0;
            console.log(currentValue);
            $(".currentScore").html(currentValue);
            $(".goalScore").html(goalNumber);
            gemReset();
            
        } 
        
        //function for if the person loses
        else if (currentValue > goalNumber) {
            alert("You lose!!!");
            console.log("lose");
            losses++;
            $(".youLose").html(losses);

            goalNumber = Math.floor((Math.random() * 120) + 19);
            console.log(goalNumber);
            currentValue = 0;
            console.log(currentValue);
            $(".currentScore").html(currentValue);
            $(".goalScore").html(goalNumber);
            gemReset();
        };
    });
    $(".btn-danger").on("click", function() {
        console.log("Button 4 works");
        //button 4 function
        currentValue = currentValue + fourthButton;
        console.log(currentValue);
        $(".currentScore").html(currentValue);

        if (currentValue === goalNumber) {
            alert("You're winner!!!");
            console.log("win");
            wins++;
            $(".youWin").html(wins);

            goalNumber = Math.floor((Math.random() * 120) + 19);
            console.log(goalNumber);
            currentValue = 0;
            console.log(currentValue);
            $(".currentScore").html(currentValue);
            $(".goalScore").html(goalNumber);
            gemReset();
        } 
        
        //function for if the person loses
        else if (currentValue > goalNumber) {
            alert("You lose!!!");
            console.log("lose");
            losses++;
            $(".youLose").html(losses);

            goalNumber = Math.floor((Math.random() * 120) + 19);
            console.log(goalNumber);
            currentValue = 0;
            console.log(currentValue);
            $(".currentScore").html(currentValue);
            $(".goalScore").html(goalNumber);
            gemReset();
        };
    });




    //now that these buttons work, I need to add some game logic.
    //I have a goal value that picks a random number between 19 and 120
    //I want the win condition to be a matching number between the current value and the goal number
    //I want the losing condition to be the current number being over the goal number
