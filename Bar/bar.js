var age = Number(prompt("How old are you?"));

if(age < 0) {
	alert("Error");
} 

else if(age < 18) {
	alert("Sorry, you are not old enough to enter");
}

else if(age === 21) {
	alert("Happy 21st Birthday!!")
}

else {
	alert("Come on in")
}