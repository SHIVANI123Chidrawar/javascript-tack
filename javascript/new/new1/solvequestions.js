var Correctanswers = 0;
var firstquestion = prompt("what is name of lauguage which is also language of snake?");
if(firstquestion.toUpperCase() ==="PYTHON"){
	Correctanswers += 1;
}
	
var secondquestion = prompt("what is name of language which is also name of gem?");
if(secondquestion.toUpperCase() ==="RUBY"){
	Correctanswers += 1;
} 
var thirdquestion= prompt("what is name of language interactivity with webElement");
if(thirdquestion.toUpperCase() ==="JAVASCRIPT"){
	Correctanswers += 1;
}
	
var fourthquestion = prompt("what is name of language  Which is used for styling");
if(fourthquestion.toUpperCase() === "CSS"){
	Correctanswers += 1;	
}
	
var fifthquestion= prompt("what is name of language stucture");
if(fifthquestion.toUpperCase() === "HTML"){
	Correctanswers += 1;	
	}
	
	if (Correctanswers === 5)
	{
		document.write("it is gold");
	}
	else if(Correctanswers >= 3)
	{
		document.write("it is silver");
	}
	else if(Correctanswers >= 1)
	{
		document.write("it is bronze");
	}
	else {
		document.write("please try again");
	}