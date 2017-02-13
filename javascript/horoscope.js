document.getElementById("button").onclick = horoscope;

function horoscope (month,day){

  var userInput = document.getElementById("month").value;
  var userInput2 = parseInt(document.getElementById("day").value);

  if((userInput == "january" && userInput2 >= 20) || (userInput == "february" && userInput2 <= 18)){
   console.log ("Mama");
   var sign = "Aquarious";
   var scope = "Stop worrying";

}else if((userInput == "february" && userInput2 >= 19) || (userInput == "march" && userInput2 <= 20)){
  console.log ("Alex");
  var sign = "Pisces";
  var scope = "Call her back";

}else if((userInput == "march" && userInput2 >= 21) || (userInput == "april" && userInput2 <= 19)){
  console.log ("Hi");
  var sign = "Aries";
  var scope = "Stop being so stubborn!";

}else if((userInput == "april" && userInput2 >= 20) || (userInput == "may" && userInput2 <= 20)){
  console.log ("Hello");
  var sign = "Taurus";
  var scope = "Try to nap more this week";

}else if((userInput == "may" && userInput2 >= 21) || (userInput == "june" && userInput2 <= 20)){
  console.log ("Genesis");
  var sign = "Gemini";
  var scope = "Stop being so two faced";

}else if((userInput == "june" && userInput2 >= 21) || (userInput == "july" && userInput2 <= 22)){
  console.log ("wow");
  var sign = "Cancer";
  var scope = "Try waking up earlier this week, boo";

}else if((userInput == "july" && userInput2 >= 23) || (userInput == "august" && userInput2 <= 22)){
  console.log ("Carlos");
  var sign = "Leo";
  var scope = "Stop Driving Uber and try to do something real with your life";

}else if((userInput == "august" && userInput2 >= 23) || (userInput == "september" && userInput2 <= 22)){
  console.log ("Singh");
  var sign = "Virgo";
  var scope = "Divorce Amanda and mary Maria";

}else if((userInput == "september" && userInput2 >= 23) || (userInput == "october" && userInput2 <= 22)){
  console.log ("Hello Marine");
  var sign = "Libra";
  var scope = "Learn to be pore patient on your self and live in the moment";

}else if((userInput == "october" && userInput2 >= 23) || (userInput == "november" && userInput2 <= 21)){
  console.log ("Dimple");
  var sign = "Scorpio";
  var scope = "Stop hurting other people";

}else if((userInput == "november" && userInput2 >= 22) || (userInput == "december" && userInput2 <= 21)){
  console.log ("Ayoub");
  var sign = "Sagittarius";
  var scope = "You're a sell out";

}else if((userInput == "december" && userInput2 >= 22) || (userInput == "january" && userInput2 <= 19)){
  console.log ("Beto");
  var sign = "Capricorn";
  var scope = "You smell like shit";

}else{
  console.log("end")
}



document.getElementById('sign').innerHTML = sign;
document.getElementById('scope').innerHTML = scope;
}
