//var first_name = "Dean"; two forward
//slashes var last_name = "Davidson";
//
/*   */

var greeting = "Sup!";
var first_name = "Dean";
var last_name = "Davidson";
var message1 = "don't forget to get sugar-free drinks!";
var message2 = "But we want sugar.";
var favoriteQuote = "\"I have a dream...\"";
var my_image = "<img src=\"images/my-image.png\" /> ";
var goodbye = "Peace out, d00dz!11!!!1!1!!";

//use single quotes if you have a lot of illegal characters
var my_image = '<img src="images/my-image.png" /> ';

/* BAD variable names (errors!!!!!!!!!)
var first name = "";
var 2first_name = "";
var math = "";
*/

/* operators
"=" assigns values
"+=" (concatenation assignment operator) adds to whatever the variable currently has
*/

//output variables to the console
/*
console.log(greeting);
console.log(first_name);
console.log(last_name);
console.log(message1);
console.log(message2);
console.log(favoriteQuote);
console.log(my_image);
console.log(my_image);
console.log(goodbye);
*/

/*
console.log(greeting + " " + first_name + " " + last_name + ", " + message1 + " " + message2 + " " + favoriteQuote + " " + my_image + " " + goodbye);
*/

//Quotes with asteriks will be the variables that change.

//When I was counting *hours*, you were *counting* breaths. You said you can't *remember*, I *swear* I wont *forget*.

var static_words1 = "When I was counting ";
var static_words2 = ", you were ";
var static_words3 = " breaths. You said you can't ";
var static_words4 = ", I ";
var static_words5 = " I wont ";
var static_words6 = ".";

//Create a variable that is used as a reference for your form button.
//We use the unique ID attribute to do this.
var button = document.getElementById("submit");

//Then we add the ability to have a mouse click fire off a function when clicked on
button.addEventListener("click", onClick, false);

function onClick(evt)
{
  //This line stops the form from submitting by preventing its default action
  evt.preventDefault(evt);
  
  //Forms
  var element1 = document.getElementById("form1").elements.item(0).value;
  var element2 = document.getElementById("form1").elements.item(1).value;
  var element3 = document.getElementById("form1").elements.item(2).value;
  var element4 = document.getElementById("form1").elements.item(3).value;
  var element5 = document.getElementById("form1").elements.item(4).value;
  console.log(static_words1 + element1 + static_words2 + element2 + static_words3 + element3 + static_words4 + element4 + static_words5 + element5 + static_words6);
}









