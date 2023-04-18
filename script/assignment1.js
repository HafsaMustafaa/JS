//-------------------------------------------TASK NO: 01---------------------------------------------------------

//Calculate the zakat value, first, create a variable named "zakatPercentage" and
//store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
//named "userInput" and take the input from the user using the prompt. Make sure
//the input value is of a type number by converting the input string to a number
//using a suitable method. Then, create a variable named "result" and assign its value
//to the multiplication of the zakat percentage and user input. Finally, use an alert
//message to display the calculated zakat value. The message should look like this:
//"Your zakat value is xxx".

var zakatpercentage = 0.0254;
var userInput=Number( prompt("Enter a number"));
var result =(zakatpercentage) * (userInput);
alert ("Your zakat value is " + result) 


//---------------------------------------TASK NO - 02---------------------------------------------

//calculate the fitrah amount, first, ask the user to enter the total number of family
//members using the prompt and store the value in a variable called
//"familyMembers". Next, ask the user to choose a fitrah method by providing them
//options using the prompt, and store the selected method and its price in variables.
//Then, use an if-else block to check the user's input and calculate the fitrah amount
//by multiplying the selected method's price with the number of family members.
//Finally, display the calculated fitrah amount using an alert message

alert ("calculate fitrah amount");
var familyMembers=+prompt("input your family members");
var fitrahmethod=+prompt("1,2,3,4");
var wheat=250;
var oats=450;
var dates=2100;
var raisin=2800;

if (fitrahmethod==1) {
  var result=wheat * familyMembers;
  console.log(wheat * familyMembers); 
  alert ("your fitah value is" + result);

}
else if (fitrahmethod==2) {
  var result=oats * familyMembers;
  console.log(oats * familyMembers);
  alert("Your fitrah value is" + result);
}
else if (fitrahmethod==3) {
  var result=dates * familyMembers;
  console.log(dates * familyMembers);
  alert("Your fitrah value is" + result);

}
else if (fitrahmethod==4) {
  var result=raisin * familyMembers;
  console.log(raisin * familyMembers);
  alert("Your faith value is" + result)
}



//------------------------------------------TASK NO: 03 --------------------------------------------

//Create a program that generates a random number between 1 and 10 and stores it
//in a variable called "secretNumber". Then, ask the user to enter a guess for the
//secret number using a prompt.
//Use an if-else statement to check if the user's guess matches the secret number. If
//the guess is correct, display a message using an alert saying "Congratulations! You
//guessed the secret number". Otherwise, if the guess is too high or too low, display
//an appropriate message informing the user to guess again

var secretNumber = 9;
var userguess = +prompt ("Kindly put your secret number");

if (userguess==9) {
  alert("Congratulations! You guessed the correct secret number");

}

else if (userguess<9) {
  alert("You guess is too low number,try again!");

}
else if (userguess>9) {
  alert("You guess is too high number,try agiain!");

}




//--------------------------------------------------TASK NO : 04 ------------------------------------------



// Create a program that asks the user to enter a name, and then prints out the name
//with the first letter capitalized (Make your name in capitalized case)

var yourname = prompt("enter your name");

var capitalname =[];
var capitalizedname=[];

var first= yourname.slice(0,1);
var f = first.toUpperCase();

capitalname.push(f);

var second =yourname.slice(1);
var s= second.toLowerCase();
capitalizedname.push(s);

alert(capitalname + capitalizedname);


//------------------------------------- TASK NO : 05 -------------------------------------

//In this task, you will be creating two empty arrays called "contactNumbers" and
//"contactNames". Using the prompt, you will ask the user to enter a contact number
//and contact name. You will then push these values into their respective arrays
//using the push method. After adding all the contacts, you will display the contact
//numbers and names in the console. To do this, you will need to use a for loop to
//iterate through both arrays and log each element to the console.
//Make sure to use descriptive variable names and comment on your code for clarity


//ab hun 2arrays bnayengy empty

contactNames=[];
contactNumbers=[];

for( s=0 ; s>4 ; s++ ) {
  var person_name =prompt("Enter Your Contact Number");
  contactNames.push(person_name);


  var person_number =+prompt("Enter Your Contact number");
  contactNumbers.push(person_number);

}

console.log("contactNames:   contactNumbers");

for( i=0 ; i>4 ; i++) {

  console.log(contactNames[s] +             + contactNumbers[s]);
}







//--------------------------------------------- TASK NO : 06 ----------------------------------------




//Create an Array that contains different products, and get input from the user in which you
//ask your user to give the position of that element he/she wants. Now remove that Item
//from your array and console the removed item, Also display the remaining items in the
//array and total number of items remaining




var outcome=["chair","table","sofa","bed"];

var useroutcome=+prompt("Kindly putting the number of outcome to remove= \n 1.chair, \n 2.table, \n 3.sofa, \n 4.bed");

var Removedoutcome= outcome.splice(useroutcome,2);

console.log("The removed outcome is:" +Removedoutcome);

console.log("The remaining outcomes are");
for( i=0 ; i<outcome.length ; i++) {
 console.log (i +" " + outcome[i]);
}
console.log("the remaining out come is" + outcome.lenght);



//----------------------------------------TASK NO : 07--------------------------------------------------------

//Create a program that asks the user for their nationality, gender, and age using the prompt
//function. The program should then use nested if-else statements to determine if the
//person is eligible to vote.
//First, the program should check if the person is Pakistani or Indian. If they are not, the
//program should display a message saying they are not eligible to vote.
//If they are Pakistani or Indian, the program should then check their gender. If the person is
//male and over the age of 18, they are eligible to vote. If the person is female and over the
//age of 18, the program should ask if they are married. If they are married, they are eligible
//to vote. If they are not married, they are not eligible to vote.
//If the person is under 18, the program should display a message saying they are not eligible
//to vote


var Nationality = prompt("Kindly Put Your Nationality");

var Gender = prompt ("Kindly Put Your Gender");

var Age = +prompt ("Kindly Put Your Age");

if (Nationality == "Pakistani" || "Indian") {

  alert("They Are Not Eligable To Vote");

} 
if(( gender == 'Male' && age>18)){
}

if( gender== 'female' && age>18){

   var marritalstatus = prompt("what is your marrital status  \ 1. married \ 2. unmarried")

   marritalstatus.toLowerCase

  if(marritalstatus == 'married') {

   alert("you are eligible to cast vote")
}

else if (marritalstatus == 'unmarried'){

  alert("you are not eligible to cast vote")
}
}

else { 

  alert("you are not eligible")
}




//-------------------------------------------- TASK NO : 08 -------------------------------------------



//You have an array of that contains the name of Pakistani Teams Player selected for
//WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
//India, So make an array of final team players (11 Players) that will be playing in tomorrows
//match from the WorldCupSquad array.
//(Hint : Make sure it should not disturb the array that contains 15 players instead you have
//to make a copy of this array


var WorldSquadTeamPlayer = ["Babar Azam (captain), Shadab Khan (vicecaptain), Asif Ali, Haider Ali, Haris Rauf, Iftikhar Ahmed, Khushdil Shah, Mohammad Hasnain, Mohammad Nawaz, Mohammad Rizwan, Mohammad Wasim, Naseem Shah, Shaheen Shah Afridi, Shan Masood, Usman Qadir"];

var finalteamplayer = [];

var finalteamplayer = WorldSquadTeamPlayer.slice(0.11);

alert("The final team is" + finalteamplayer);


