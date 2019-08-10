
var random = Math.floor(Math.random()*6)+1
console.log( random)
guess = parseInt(prompt("enter number from 1 to 6"));
   if( random === guess){
      document.write("its a correct number");
}
  else if(guess > random){
	   guess = parseInt(prompt("plzz enter small number"));
	   console.log( guess )
        if(random === guess){
	   alert ("your answer is correct");
	    }
	}
	   
	else if(guess < random ){
		guess = parseInt(prompt("plzz enter the bigger number"));
		console.log( guess )
		if(random === guess){
			alert ("your answer is correct");
		}
	}
		
else
{
	document.write( "it is incorrect number");
}	
