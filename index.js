//carousel javascript

//create global variables.
const WAVE_POOL_MIN_HEIGHT = 42; 
const WATERSLIDE_MIN_HEIGHT = 48;
const LAZY_RIVER_MIN_HEIGHT = 36;
let attraction;
let selected_attraction;

function ParkAttraction(attraction) { // created a park attraction function to verify which attraction was selected. 

    if(attraction === "wave") {
        selected_attraction = "Wave Pool"
    } else if (attraction === "river") {
        selected_attraction = "Lazy River";
    } else {
        selected_attraction = "Water Slide";
    }
}

function checkHeight(attraction, height) { // provide a function to check height and attraction type

    if( attraction === "wave" && height < WAVE_POOL_MIN_HEIGHT) {
        return false;
    } else if (attraction === 'water' && height < WATERSLIDE_MIN_HEIGHT) {
        return false;
    }  else if (attraction === "river" && height < LAZY_RIVER_MIN_HEIGHT ) {
        return false;
    }

    return true;
}

function adult(height) { // verify height of the user
    if(height > 42) {
        const withAdult = prompt("Are you with an adult?"); // if user is with an adult they can ride all the rides.
        if(withAdult === "yes") {
            return true;
        }
    }
    return false;
}

function isAllowed(attraction, height) {

    const allow = checkHeight(attraction, height); // check the height and attraction type 

    allow ? alert(`You are allowed to ride the attraction ${selected_attraction}`) :
    alert(`You are unable to ride the attraction ${selected_attraction}`);
}

function buyTicket() { //create a function that prompts the user for attraction type and height
    const attractionType = prompt('Which attraction do you want to visit: type "wave" for wave pool, "water", for waterslide, or "river" for lazy river?');
    const userHeight = prompt("What is your height in inches");
    const isWithAdult = adult(userHeight);
    ParkAttraction(attractionType); //created a function to 
                                    //alert the user which attraction they are going on
    if(isWithAdult) { // create a function to determine if the user is with an adult and alert.
        alert("You are allowed to ride any of the rides!");
    } else if(!isWithAdult) {
        isAllowed(attractionType, userHeight); // if user is not with an adult run the isAllowed function
    }
}