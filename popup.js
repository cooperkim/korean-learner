// let reader = new FileReader();
// reader.readAsText(korean_test.csv);

//Initializing a bunch of different variables needed
var words = []; //array that will hold korean words
var defs = []; //array that will hold korean definitions

//These arrays hold what the user will see
var words_answer = []; //words of the four displayed
var defs_answer = []; //definitions of the four displayed

var names_or_def; //variable that will determine if the user must find the word or defintion
var vals = []; //this was some random ass array I made to hold if the user clicked the right value

//initializing the choice buttons from the html file
var choice1 = document.getElementById("choice1"); 
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");

//this function is gonna take the definitions and words and randomize them into the answer arrays
function randomize()
{
    words = ["주", "년", "오늘", "내일", "어제", "달력", "할수있다", "사용하다", "하다", "가다", "오다", "웃다", "만들다", "보다", "작은", "좋은"];
    defs = ["week", "year", "today", "tomorrow", "yesterday", "calendar", "can", "use", "do", "go", "come", "laugh", "make", "see", "small", "good"]
    words_answer = [];
    defs_answer = [];
    var counter = 0;
    while (words_answer.length < 4) //4 because I only want 4 shits in the answer things
    {
        var rand = Math.floor(Math.random() * (words.length) ) + 0; //random number between 0 and 15
        if (words[rand] != 0)
        {
          //assigning words_answer and defs_answer
        words_answer[counter] = words[rand];
        defs_answer[counter] = defs[rand];
        //making the chosen words and defs equal zero so skipped if chosen again
        words[rand] = 0;
        defs[rand] = 0;
        counter++;
        }
    }
}

//this function gets either a word or defintion to ask the user to match with
function select()
{
  var rand = Math.floor(Math.random() * (2) + 0); //random number between 0 and 1
  var randChoice = Math.floor(Math.random() * (words_answer.length) + 0); //random number between 0 and 3
  if(rand == 0)
  {
    var selectionChoice = words_answer[randChoice];
    document.getElementById('getWord').innerHTML = selectionChoice; //assigning word to selection choice
    printNameOrDef(rand); //calling the function printNameOrDef
  }
  else
  {
    var selectionChoice = defs_answer[randChoice];
    document.getElementById('getWord').innerHTML = selectionChoice;
    printNameOrDef(rand);
  }
  return(randChoice);
}

//this function displays the definitions or words in 4s
//So like if the word to find was "cheese" which is from the word answer array
//The 4 displays you would see would be 4 definitions from the definition answer array
function printNameOrDef(name_or_def)
{
  if (name_or_def == 0)
  {
    document.getElementById('choice1').innerHTML = defs_answer[0];
    document.getElementById('choice2').innerHTML = defs_answer[1];
    document.getElementById('choice3').innerHTML = defs_answer[2];
    document.getElementById('choice4').innerHTML = defs_answer[3];
  }else{
    document.getElementById('choice1').innerHTML = words_answer[0];
    document.getElementById('choice2').innerHTML = words_answer[1];
    document.getElementById('choice3').innerHTML = words_answer[2];
    document.getElementById('choice4').innerHTML = words_answer[3];
  }
}

//function that makes vals some random shit if clicked
//I know this is a horrible way to tell if the user clicked something but
//I don't know javascript and google didn't tell me how to do it better
function selection1()
{
  vals = [true, false, false, false];
}
function selection2()
{
  vals = [false, true, false, false];
}
function selection3()
{
  vals = [false, false, true, false];
}
function selection4()
{
  vals = [false, false, false, true];
}

//This function sees if the choice made is the right one
function checkChoice(index)
{
  if(vals[index] == true)
  {
    document.getElementById('test').innerHTML = "yeet";
    document.getElementById('continue').style.display = "block";
  }else if(vals[index] == false){
    document.getElementById('test').innerHTML = "naw";
  }else{
    document.getElementById('test').innerHTML = "select a choice first";
  }
}

//this function restarts all the code so a whole new display is generated
function next()
{
  randomize();
  index = select();
  document.getElementById('continue').style.display = "none";
  document.getElementById('test').innerHTML = "";
  vals = [];
}

// function test()
// {
//   console.log("fuck off");
// }

console.log(vals);

//calling the functions for when I call it in the html file
randomize();
index = select();
choice1.addEventListener("click", selection1);
choice2.addEventListener("click", selection2);
choice3.addEventListener("click", selection3);
choice4.addEventListener("click", selection4);
var submit = document.getElementById("submit");
submit.addEventListener("click", function() {
  checkChoice(index);
});
var cont = document.getElementById("continue");
cont.addEventListener("click", next);

//if you really did not understand anything please email cooperhan@gmail.com with questions