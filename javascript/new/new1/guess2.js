var random = Math.floor(Math.random()*6)+1
console.log( random)
guess = parseInt(prompt("enter number from 1 to 10"));
if( random === guess)
{
	document.write("its a correct number")
}
else
{
	document.write( "it is incorrect number")
}	