var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12"];
var blankImagePath = "images/views.jpg";
var firstNumber = -1;
var secondNumber = -1;
var score = 0;
var allFound = 0;
// JSON declaration
var player = { "firstname": "", "lastname": "", "age": 0, "score": 0 };

// create a variable with the blank image name
// create a empty array for the actual images
var actualImages = new Array();

function printBlanks() {
    // call our random image creation function
    createRandomImageArray();
    var allimages = "";
    // create a for loop
    for (var i = 0; i < imageTags.length; i++) {
        // iterate through the image tag ids and sets the source 
        document.getElementById(imageTags[i]).src = blankImagePath;
    }
    allimages += imageTags[i] + "<br>";
}

function createRandomImageArray() {
    // create an array of actual images
    var actualImagePath = ["images/orange.jpg", "images/city.jpg", "images/cover.jpg", "images/orange.jpg", "images/cover.jpg", "images/city.jpg"];
    // create another array to make sure the images only get added twice
    var count = [0, 0, 0, 0, 0, 0];
    // create a while statement to check to see if our actual image array is full
    while (actualImages.length < 12) {
        // get a random number between 0 and the number total number of images that we can choose from
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        // create an if statement that says if the total number added is less than 2, then
        // add the image to the actual image array
        if (count[randomNumber] < 2) {
            actualImages.push(actualImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

function flipImage(number) {
    document.getElementById(imageTags[number]).src = actualImages[number];
    // make the second image appear
    if (firstNumber >= 0) {
        secondNumber = number;
        document.getElementById(imageTags[number]).src = actualImages[number];

    }
    else if (firstNumber < 0) // make the first image appear
    {
        firstNumber = number;
        document.getElementById(imageTags[firstNumber]).src = actualImages[firstNumber];

    }

    // check to see if the images do not match
    if (actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0) {
        score++;
        setTimeout(imagesDisappear, 1000); // calls a method after 1 second
    }
    // check to see if the images do match
    else if (actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0) {
        score++;
        allFound++;

        firstNumber = -1;
        secondNumber = -1;
        if (allFound == actualImages.length / 2) {
            player.score = score;
            localStorage.setItem("playerInfo", JSON.stringify(player));
            window.location = "index3.html";
        }
    }
}

function imagesDisappear() {

    console.log(firstNumber);
    document.getElementById(imageTags[firstNumber]).src = blankImagePath;
    document.getElementById(imageTags[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

// add to the JSON from the textboxes
function addToPlayer() {
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var age = document.getElementById("txtAge").value;

    player.firstname = firstName;
    player.lastname = lastName;
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "index2.html";
}

// get the information out of JSON
function playerInfo() {
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    var str = "Name: " + player.firstname + " " + player.lastname + "<br>" +
        "Age: " + player.age + "<br>" +
        "Score: " + player.score;
    if (document.getElementById("endInformation") != null) {
        document.getElementById("endInformation").innerHTML = str;
    }
}
