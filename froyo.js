/* A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. When they view the browser console, they observe a table listing how many of each flavor they have ordered. In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.
*/

//Prompt the user to enter a list of froyo flavors, separated by a comma. Input is vanilla,vanilla,vanilla,strawberry,coffee,coffee

const USERINPUT = prompt("List the froyo flavors you would like to order, using a comma to separate each flavor!", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");

// Use .split to convert the string input into an array

const INPUTARRAY = USERINPUT.split(",");

//Declare an object that uses the froyo flavor as the keys and the number ordered for the values

const FROYOFLAVORS = {
    vanilla: 0,
    strawberry: 0,
    coffee: 0
};


//Declare a function that returns the object (counting the frequencies of elements in an array) and use a for loop to iterate through the array of flavors 

function totalCount(flavorArray) {
    for (let flavor of flavorArray){
        if (FROYOFLAVORS[flavor]){
            FROYOFLAVORS[flavor]++;
        } else {
            FROYOFLAVORS[flavor] = 1;
        }

    }

}

totalCount(INPUTARRAY);

//Use console.table to showcase how many of each flavor they ordered. 
console.table(FROYOFLAVORS); 

